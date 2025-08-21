import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist';
import { tasksReducer } from './tasks/tasksSlice';
import { authReducer } from './auth/authSlice';

const persistAuthConfig = {
  key: 'auth',
  storage,
  whitelist: ['token', 'user'],
};

const persistedAuthReducer = persistReducer(persistAuthConfig, authReducer);

export const store = configureStore({
  reducer: {
    auth: persistedAuthReducer,
    tasks: tasksReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
