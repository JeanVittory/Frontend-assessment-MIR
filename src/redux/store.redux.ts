import { configureStore } from '@reduxjs/toolkit';
import { productsApi } from '../service';

export const store = configureStore({
  reducer: {
    [productsApi.reducerPath]: productsApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
});
