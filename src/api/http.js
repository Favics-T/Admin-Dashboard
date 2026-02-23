const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:4000";

const buildUrl = (path, params) => {
  const url = new URL(`${API_BASE_URL}${path}`);
  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      if (value !== undefined && value !== null && value !== "") {
        url.searchParams.set(key, String(value));
      }
    });
  }
  return url.toString();
};

const parseResponse = async (response) => {
  const text = await response.text();
  const payload = text ? JSON.parse(text) : null;

  if (!response.ok) {
    throw new Error(payload?.message || `Request failed (${response.status})`);
  }

  return payload;
};

export const http = {
  async get(path, params) {
    const response = await fetch(buildUrl(path, params));
    return parseResponse(response);
  },

  async post(path, body) {
    const response = await fetch(buildUrl(path), {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    return parseResponse(response);
  },

  async patch(path, body) {
    const response = await fetch(buildUrl(path), {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    return parseResponse(response);
  },

  async delete(path) {
    const response = await fetch(buildUrl(path), { method: "DELETE" });
    return parseResponse(response);
  },
};
