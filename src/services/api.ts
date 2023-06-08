import axios from 'axios';

const api = axios.create({
  baseURL: 'https://647f35eac246f166da905754.mockapi.io/api',
});

export default api;
