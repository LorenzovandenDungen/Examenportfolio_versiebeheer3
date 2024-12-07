// src/services/AuthService.js

import axios from 'axios';

const API_URL = 'http://localhost:8000/api'; // Pas dit aan naar jouw Laravel API URL

class AuthService {
  register(user) {
    return axios.post(`${API_URL}/register`, user);
  }

  login(credentials) {
    return axios.post(`${API_URL}/login`, credentials);
  }

  logout(token) {
    return axios.post(`${API_URL}/logout`, {}, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
  }

  getUser(token) {
    return axios.get(`${API_URL}/user`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
  }
}

export default new AuthService();
