import axios from 'axios';
import { API_URL, isApiConfigured, getApiConfigError } from '../config/api.js';

// Validate API URL is configured
if (!isApiConfigured()) {
  const error = getApiConfigError();
  console.error(error);
}

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

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
      throw error.response?.data || { message: 'An error occurred' };
    }
  },
  getContacts: async () => {
    try {
      const response = await api.get('/api/contact');
      return response.data;
    } catch (error) {
      throw error.response?.data || { message: 'An error occurred' };
    }
  },
  getContact: async (id) => {
    try {
      const response = await api.get(`/api/contact/${id}`);
      return response.data;
    } catch (error) {
      throw error.response?.data || { message: 'An error occurred' };
    }
  },
  deleteContact: async (id) => {
    try {
      const response = await api.delete(`/api/contact/${id}`);
      return response.data;
    } catch (error) {
      throw error.response?.data || { message: 'An error occurred' };
    }
  },
};

export const productAPI = {
  getProducts: async (active = true) => {
    try {
      const response = await api.get(`/api/products?active=${active}`);
      return response.data;
    } catch (error) {
      throw error.response?.data || { message: 'An error occurred' };
    }
  },
  getProduct: async (id) => {
    try {
      const response = await api.get(`/api/products/${id}`);
      return response.data;
    } catch (error) {
      throw error.response?.data || { message: 'An error occurred' };
    }
  },
  createProduct: async (data) => {
    try {
      const response = await api.post('/api/products', data);
      return response.data;
    } catch (error) {
      throw error.response?.data || { message: 'An error occurred' };
    }
  },
  updateProduct: async (id, data) => {
    try {
      const response = await api.put(`/api/products/${id}`, data);
      return response.data;
    } catch (error) {
      throw error.response?.data || { message: 'An error occurred' };
    }
  },
  deleteProduct: async (id) => {
    try {
      const response = await api.delete(`/api/products/${id}`);
      return response.data;
    } catch (error) {
      throw error.response?.data || { message: 'An error occurred' };
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
      throw error.response?.data || { message: 'An error occurred' };
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
    throw error.response?.data || { message: 'Health check failed' };
  }
};

export default api;
