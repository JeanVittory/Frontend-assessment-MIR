import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { GetProducts } from '@service/types';

export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_URL }),
  endpoints: (builder) => ({
    getProducts: builder.query<GetProducts[], void>({
      query: () => '/products',
      keepUnusedDataFor: 600,
    }),
  }),
});

export const { useGetProductsQuery } = productsApi;
