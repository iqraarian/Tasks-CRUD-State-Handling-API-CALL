import axios from 'axios';
const api=axios.create({
  baseURL:'https://jsonplaceholder.typicode.com'
});
export const todoAPI={
  getAll: () => api.get('/todos'),
  create: (todo) => api.post('/todos', todo),
  update: (id, updates) => api.patch(`/todos/${id}`, updates),
  delete: (id) => api.delete(`/todos/${id}`)
};
export const userAPI={
  get: (id) => api.get(`/users/${id}`)
};
export const postAPI={
  getPaginated: (page, limit) => api.get(`/posts?_page=${page}&_limit=${limit}`),
  search: (query) => api.get(`/posts?q=${query}`)
};