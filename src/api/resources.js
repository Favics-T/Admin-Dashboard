import { http } from "./http";

export const usersApi = {
  list: () => http.get("/users", { _sort: "id", _order: "desc" }),
  create: (payload) => http.post("/users", payload),
  remove: (id) => http.delete(`/users/${id}`),
  update: (id, payload) => http.patch(`/users/${id}`, payload),
};

export const projectsApi = {
  list: () => http.get("/projects", { _sort: "id", _order: "desc" }),
  create: (payload) => http.post("/projects", payload),
  remove: (id) => http.delete(`/projects/${id}`),
};

export const ordersApi = {
  list: () => http.get("/orders", { _sort: "id", _order: "desc" }),
  create: (payload) => http.post("/orders", payload),
  remove: (id) => http.delete(`/orders/${id}`),
  update: (id, payload) => http.patch(`/orders/${id}`, payload),
  getById: (id) => http.get(`/orders/${id}`),
};

export const authUsersApi = {
  findByEmail: async (email) => {
    const items = await http.get("/authUsers", { email });
    return items[0] ?? null;
  },
  create: (payload) => http.post("/authUsers", payload),
};
