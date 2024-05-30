
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const leadersApi = createApi({
  reducerPath:'leadersApi',
  baseQuery: fetchBaseQuery({baseUrl: 'https://6569abe1de53105b0dd7715a.mockapi.io/api/'}),
  endpoints: (builder) => ({
    getLeaders: builder.query({query: () => 'leaders',}),
    getPlayer: builder.query({query: (id) => `leaders/${id}`})
  })
})


export const { useGetLeadersQuery, useGetPlayerQuery } = leadersApi;