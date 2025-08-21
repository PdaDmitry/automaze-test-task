import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

export const request = {
  post: async (url, data = {}, onSuccess, onError) => {
    try {
      const res = await axios.post(`${API_URL}${url}`, data);
      if (onSuccess) onSuccess(res.data);
      return res.data;
    } catch (err) {
      const message = err.response?.data?.message || 'Request Error!';
      if (onError) onError(message);
    }
  },

  get: async (url, params = {}, onSuccess, onError) => {
    try {
      const res = await axios.get(`${API_URL}${url}`, { params });
      if (onSuccess) onSuccess(res.data);
      return res.data;
    } catch (err) {
      const message = err.response?.data?.message || 'Request Error!';
      if (onError) onError(message);
    }
  },

  put: async (url, data = {}, onSuccess, onError) => {
    try {
      const res = await axios.put(`${API_URL}${url}`, data);
      if (onSuccess) onSuccess(res.data);
      return res.data;
    } catch (err) {
      const message = err.response?.data?.message || 'Request Error!';
      if (onError) onError(message);
    }
  },

  delete: async (url, onSuccess, onError) => {
    try {
      const res = await axios.delete(`${API_URL}${url}`);
      if (onSuccess) onSuccess(res.data);
      return res.data;
    } catch (err) {
      const message = err.response?.data?.message || 'Request Error!';
      if (onError) onError(message);
    }
  },
};
