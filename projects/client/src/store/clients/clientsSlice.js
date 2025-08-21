// import { createSlice } from '@reduxjs/toolkit';
// import { addClient } from './operationsClients';

// const initialState = {
//   client: [],
//   isLoading: false,
//   error: null,
// };

// const clientsSlice = createSlice({
//   name: 'clients',
//   initialState,
//   reducers: {},
//   extraReducers: builder => {
//     builder
//       .addCase(addClient.pending, state => {
//         state.isLoading = true;
//         state.error = null;
//       })
//       .addCase(addClient.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.user.push(action.payload);
//       })
//       .addCase(addClient.rejected, (state, action) => {
//         state.isLoading = false;
//         state.error = action.payload.message || 'Error adding client';
//       });
//   },
// });

// export const clientsReducer = clientsSlice.reducer;
