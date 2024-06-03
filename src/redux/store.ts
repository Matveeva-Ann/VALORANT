import { configureStore } from '@reduxjs/toolkit'
import { leadersApi, persistedCreateApiReducer } from './leaders'
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

export const store = configureStore({
  reducer: {
    [leadersApi.reducerPath]: persistedCreateApiReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(leadersApi.middleware),
});

export const persistor = persistStore(store);