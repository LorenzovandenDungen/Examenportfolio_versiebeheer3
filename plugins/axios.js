// src/plugins/axios.js

import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:8000/api', // Pas dit aan naar jouw Laravel API URL
  headers: {
    'Content-Type': 'application/json',
  },
});

export default apiClient;
