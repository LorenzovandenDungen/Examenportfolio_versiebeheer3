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
        const response = await api.post('/register', data)
        this.token = response.data.access_token
        localStorage.setItem('access_token', this.token)
        this.user = response.data.user
      },
      async login(data) {
        const response = await api.post('/login', data)
        this.token = response.data.access_token
        localStorage.setItem('access_token', this.token)
        this.user = response.data.user
      },
      logout() {
        this.user = null
        this.token = ''
        localStorage.removeItem('access_token')
      },
      async fetchUser() {
        if (this.token) {
          const response = await api.get('/user')
          this.user = response.data
        }
      }
    },
  })