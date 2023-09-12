import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3333',
});

api.interceptors.request.use(config => {
  if (config.requiresAuth) {
    const token = localStorage.getItem('token'); // Substitua 'token' pelo nome correto da chave que você usou para armazenar o token
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
  }

  delete config.requiresAuth;

  return config;
}, error => {
  return Promise.reject(error);
});

export default api;
