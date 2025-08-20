import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  extraReducers: builder => {},
});

export const tasksReducer = tasksSlice.reducer;
