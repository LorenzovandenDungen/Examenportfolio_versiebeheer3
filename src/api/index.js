import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:8000/api', // De URL naar je Laravel API
  headers: {
    'Content-Type': 'application/json',
  },
});

export default {
  getPackages() {
    return apiClient.get('/packages');
  },
  getPackage(id) {
    return apiClient.get(`/packages/${id}`);
  },
  createPackage(packageData) {
    return apiClient.post('/packages', packageData);
  },
    updatePackage(id, packageData) {
        return apiClient.put(`/packages/${id}`, packageData);
    },
    deletePackage(id) {
        return apiClient.delete(`/packages/${id}`);
    },
  getUsers() {
    return apiClient.get('/users');
  },
  createPayment(paymentData) {
    return apiClient.post('/payments', paymentData);
  },
};
