import { useEffect, useState } from 'react';

const useTalents = (page, limit, search, sortBy, order) => {
  const [talents, setTalents] = useState([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTalents = async () => {
      try {
        setLoading(true);
        setError(null);

        const params = new URLSearchParams({
          _page: page,
          _limit: limit,
        });

        if (search) {
          params.append('q', search);
        }

        if (sortBy) {
          params.append('_sort', sortBy);
          params.append('_order', order);
        }

        const res = await fetch(
          `http://localhost:4000/talents?${params.toString()}`
        );

        if (!res.ok) {
          throw new Error('Failed to fetch talents');
        }

        const data = await res.json();
        const totalCount = res.headers.get('X-Total-Count');

        setTalents(data);
        setTotal(Number(totalCount));
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTalents();
  }, [page, limit, search, sortBy, order]);

  return { talents, total, loading, error };
};

export default useTalents;
