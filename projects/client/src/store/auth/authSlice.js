import { createSlice } from '@reduxjs/toolkit';
// import { login } from './operationsAuth';

const initialState = {
  token: null,
  user: null,
  isLoading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: state => {
      state.token = null;
      state.user = null;
      state.error = null;
    },
  },
  extraReducers: builder => {
    builder;
    // .addCase(login.pending, state => {
    //   state.isLoading = true;
    //   state.error = null;
    // })
    // .addCase(login.fulfilled, (state, action) => {
    //   state.isLoading = false;
    //   state.token = action.payload.token;
    //   state.user = action.payload.user;
    // })
    // .addCase(login.rejected, (state, action) => {
    //   state.isLoading = false;
    //   state.error = action.payload.message;
    // });
  },
});

export const { logout } = authSlice.actions;
export const authReducer = authSlice.reducer;
