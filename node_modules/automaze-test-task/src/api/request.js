import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

const axiosInstance = axios.create({
  baseURL: API_URL,
  withCredentials: true, // Важно!
});

export const request = {
  post: async (url, data = {}, onSuccess, onError) => {
    try {
      const res = await axiosInstance.post(url, data);
      if (onSuccess) onSuccess(res.data);
      return res.data;
    } catch (err) {
      const message = err.response?.data?.message || 'Request Error!';
      if (onError) onError(message);
    }
  },

  get: async (url, params = {}, onSuccess, onError) => {
    try {
      const res = await axiosInstance.get(url, { params });
      if (onSuccess) onSuccess(res.data);
      return res.data;
    } catch (err) {
      const message = err.response?.data?.message || 'Request Error!';
      if (onError) onError(message);
    }
  },

  put: async (url, data = {}, onSuccess, onError) => {
    try {
      const res = await axiosInstance.put(url, data);
      if (onSuccess) onSuccess(res.data);
      return res.data;
    } catch (err) {
      const message = err.response?.data?.message || 'Request Error!';
      if (onError) onError(message);
    }
  },

  delete: async (url, onSuccess, onError) => {
    try {
      const res = await axiosInstance.delete(url);
      if (onSuccess) onSuccess(res.data);
      return res.data;
    } catch (err) {
      const message = err.response?.data?.message || 'Request Error!';
      if (onError) onError(message);
    }
  },
};
