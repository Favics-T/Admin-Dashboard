import { useEffect, useState } from 'react';
// import { getTalents } from '../api/talentsApi';
import { getTalents } from '../api/talentApi'

const useTalents = (page, limit, search, filters) => {
  const [talents, setTalents] = useState([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTalents = async () => {
      try {
        setLoading(true);
        setError(null);

        const { data, totalCount } = await getTalents(
          page,
          limit,
          search,
          filters
        );

        setTalents(data);
        setTotal(totalCount);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTalents();
  }, [page, limit, search, JSON.stringify(filters)]);

  return { talents, total, loading, error };
};

export default useTalents;