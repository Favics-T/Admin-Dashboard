import { useEffect, useState } from 'react';
import { getTalents } from '../api/talentsApi';

const useTalents = (page, limit, search = '') => {
  const [talents, setTalents] = useState([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTalents = async () => {
      try {
        setLoading(true);
        setError(null);

        // Server-side search + pagination
        const { data, totalCount } = await getTalents(page, limit, search);

        setTalents(data);
        setTotal(totalCount);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTalents();
  }, [page, limit, search]);

  return { talents, total, loading, error };
};

export default useTalents;
