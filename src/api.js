// src/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.example.com',  // 실제 API 주소로 변경
});

export default api;
