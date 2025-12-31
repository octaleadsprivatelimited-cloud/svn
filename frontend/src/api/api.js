import axios from 'axios';
import { API_URL, isApiConfigured } from '../config/env.js';

if (typeof window !== 'undefined') {
  if (!isApiConfigured()) {
    console.warn('⚠️ API URL is not configured. API calls will fail.');
  } else {
    console.log('✅ API URL configured:', API_URL);
  }
}

const api = axios.create({
  baseURL: API_URL || '',
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 30000,
});

api.interceptors.request.use(
  (config) => {
    if (!config.baseURL || config.baseURL === '') {
      const error = new Error('API URL is not configured. Please set VITE_API_URL in Vercel environment variables.');
      return Promise.reject(error);
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.message && error.message.includes('API URL is not configured')) {
      console.error('❌ API Configuration Error:', error.message);
    }
    return Promise.reject(error);
  }
);

const getAuthToken = () => {
  try {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('adminToken');
    }
    return null;
  } catch (error) {
    console.error('Error getting auth token:', error);
    return null;
  }
};

api.interceptors.request.use((config) => {
  const token = getAuthToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const contactAPI = {
  submitContact: async (data) => {
    try {
      const response = await api.post('/api/contact', data);
      return response.data;
    } catch (error) {
      throw error.response?.data || { message: error.message || 'An error occurred' };
    }
  },
  getContacts: async () => {
    try {
      const response = await api.get('/api/contact');
      return response.data;
    } catch (error) {
      throw error.response?.data || { message: error.message || 'An error occurred' };
    }
  },
  getContact: async (id) => {
    try {
      const response = await api.get(`/api/contact/${id}`);
      return response.data;
    } catch (error) {
      throw error.response?.data || { message: error.message || 'An error occurred' };
    }
  },
  deleteContact: async (id) => {
    try {
      const response = await api.delete(`/api/contact/${id}`);
      return response.data;
    } catch (error) {
      throw error.response?.data || { message: error.message || 'An error occurred' };
    }
  },
};

export const productAPI = {
  getProducts: async (active = true) => {
    try {
      const response = await api.get(`/api/products?active=${active}`);
      return response.data;
    } catch (error) {
      throw error.response?.data || { message: error.message || 'An error occurred' };
    }
  },
  getProduct: async (id) => {
    try {
      const response = await api.get(`/api/products/${id}`);
      return response.data;
    } catch (error) {
      throw error.response?.data || { message: error.message || 'An error occurred' };
    }
  },
  createProduct: async (data) => {
    try {
      const response = await api.post('/api/products', data);
      return response.data;
    } catch (error) {
      throw error.response?.data || { message: error.message || 'An error occurred' };
    }
  },
  updateProduct: async (id, data) => {
    try {
      const response = await api.put(`/api/products/${id}`, data);
      return response.data;
    } catch (error) {
      throw error.response?.data || { message: error.message || 'An error occurred' };
    }
  },
  deleteProduct: async (id) => {
    try {
      const response = await api.delete(`/api/products/${id}`);
      return response.data;
    } catch (error) {
      throw error.response?.data || { message: error.message || 'An error occurred' };
    }
  },
};

export const adminAPI = {
  login: async (credentials) => {
    try {
      const response = await api.post('/api/admin/login', credentials);
      if (response.data.token && typeof window !== 'undefined') {
        localStorage.setItem('adminToken', response.data.token);
        localStorage.setItem('admin', JSON.stringify(response.data.admin));
      }
      return response.data;
    } catch (error) {
      throw error.response?.data || { message: error.message || 'An error occurred' };
    }
  },
  logout: () => {
    try {
      if (typeof window !== 'undefined') {
        localStorage.removeItem('adminToken');
        localStorage.removeItem('admin');
      }
    } catch (error) {
      console.error('Error during logout:', error);
    }
  },
  isAuthenticated: () => {
    try {
      if (typeof window !== 'undefined') {
        return !!localStorage.getItem('adminToken');
      }
      return false;
    } catch (error) {
      console.error('Error checking authentication:', error);
      return false;
    }
  },
  getAdmin: () => {
    try {
      if (typeof window !== 'undefined') {
        const admin = localStorage.getItem('admin');
        return admin ? JSON.parse(admin) : null;
      }
      return null;
    } catch (error) {
      console.error('Error getting admin:', error);
      return null;
    }
  },
};

export const healthCheck = async () => {
  try {
    const response = await api.get('/api/health');
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: error.message || 'Health check failed' };
  }
};

export default api;
