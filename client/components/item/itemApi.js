import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const itemApi = createApi({
  reducerPath: 'itemApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000' }),
  endpoints: (build) => ({
    getAllItems: build.query({
      query: () => '/items'
    }),
  })
});

export const { useGetAllItemsQuery } = itemApi; 
