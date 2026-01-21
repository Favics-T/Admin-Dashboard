const BASE_URL = 'http://localhost:4000';

export const getTalents = async (
  page = 1,
  limit = 10,
  search = '',
  filters = {}
) => {
  let query = `?_page=${page}&_limit=${limit}`;

  if (search) {
    query += `&q=${encodeURIComponent(search)}`;
  }

  Object.entries(filters).forEach(([key, value]) => {
    if (value) {
      query += `&${key}=${encodeURIComponent(value)}`;
    }
  });

  const res = await fetch(`${BASE_URL}/talents${query}`);

  if (!res.ok) {
    throw new Error('Failed to fetch talents');
  }

  const data = await res.json();
  const totalCount = res.headers.get('X-Total-Count');

  return { data, totalCount: Number(totalCount) };
};
