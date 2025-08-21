import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const login = createAsyncThunk(
  'auth/login',
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const response = await axios.post('/auth/login', { email, password });
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || { message: 'Server error' });
    }
  }
);
