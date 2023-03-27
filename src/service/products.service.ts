import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { GetProducts } from '@service/types';
import { URL } from '@constants/index';

export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({ baseUrl: URL }),
  endpoints: (builder) => ({
    getProducts: builder.query<GetProducts[], void>({
      query: () => '/products',
      keepUnusedDataFor: 600,
    }),
  }),
});

export const { useGetProductsQuery } = productsApi;
