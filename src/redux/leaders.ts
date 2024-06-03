import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

export const leadersApi = createApi({
  reducerPath: 'leadersApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://6569abe1de53105b0dd7715a.mockapi.io/api/' }),
  endpoints: builder => ({
    getLeaders: builder.query({ query: () => 'leaders' }),
    getPlayer: builder.query({ query: id => `leaders/${id}` }),
  }),
});

export const { useGetLeadersQuery, useGetPlayerQuery } = leadersApi;

const persistConfig = {
  key: 'root',
  storage,
};

export const persistedCreateApiReducer = persistReducer(persistConfig, leadersApi.reducer);
