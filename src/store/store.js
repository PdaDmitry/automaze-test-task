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

const persistTasksConfig = {
  key: 'tasks',
  storage,
  whitelist: ['items'],
};

const persistedTasksReducer = persistReducer(persistTasksConfig, tasksReducer);

export const store = configureStore({
  reducer: {
    tasks: persistedTasksReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
