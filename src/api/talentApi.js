const BASE_URL = 'http://localhost:4000';

export const getTalents = async (page = 1, limit = 10, search = '') => {
  const query = search ? `&q=${encodeURIComponent(search)}` : '';
  const res = await fetch(
    `${BASE_URL}/talents?_page=${page}&_limit=${limit}${query}`
  );

  if (!res.ok) {
    throw new Error('Failed to fetch talents');
  }

  const data = await res.json();
  const totalCount = res.headers.get('X-Total-Count');

  return { data, totalCount: Number(totalCount) };
};
