import { configureStore } from '@reduxjs/toolkit';
import { leadersApi, persistedCreateApiReducer } from './leaders';
import { persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import { articlesApi, persistedArticlesApiReducer } from './articles';

export const store = configureStore({
  reducer: {
    [leadersApi.reducerPath]: persistedCreateApiReducer,
    [articlesApi.reducerPath]: persistedArticlesApiReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    })
      .concat(leadersApi.middleware)
      .concat(articlesApi.middleware),
});

export const persistor = persistStore(store);
