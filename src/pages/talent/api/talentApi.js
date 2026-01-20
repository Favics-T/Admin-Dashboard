const BASE_URL = 'http://localhost:4000';

/**
 * Fetch talents from server with pagination, search, and filters
 * @param {number} page - current page
 * @param {number} limit - items per page
 * @param {string} search - search query
 * @param {object} filters - { role: 'Frontend Developer' }
 */
export const getTalents = async (page = 1, limit = 10, search = '', filters = {}) => {
  let query = `?_page=${page}&_limit=${limit}`;

  if (search) {
    query += `&q=${encodeURIComponent(search)}`;
  }

  // Add filters dynamically
  Object.keys(filters).forEach((key) => {
    if (filters[key]) {
      query += `&${key}=${encodeURIComponent(filters[key])}`;
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
