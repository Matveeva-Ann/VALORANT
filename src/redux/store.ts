import { configureStore } from '@reduxjs/toolkit'
import { leadersApi } from './leaders'

export const store = configureStore({
  reducer: {
    [leadersApi.reducerPath]: leadersApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(leadersApi.middleware),
})