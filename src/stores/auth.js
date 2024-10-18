// src/stores/auth.js
import { defineStore } from 'pinia';
import api from '../api/axios';
import { useRouter } from 'vue-router';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null,
    token: localStorage.getItem('access_token') || '',
  }),
  actions: {
    async register(data) {
      try {
        const response = await api.post('/register', data);
        this.token = response.data.access_token;
        localStorage.setItem('access_token', this.token);
      } catch (error) {
        throw error;
      }
    },
    async login(data) {
      try {
        const response = await api.post('/login', data);
        this.token = response.data.access_token;
        localStorage.setItem('access_token', this.token);
      } catch (error) {
        throw error;
      }
    },
    async fetchUser() {
      try {
        const response = await api.get('/user');
        this.user = response.data;
      } catch (error) {
        console.error(error);
      }
    },
    logout() {
      this.user = null;
      this.token = '';
      localStorage.removeItem('access_token');
    },
  },
});
