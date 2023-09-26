import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const itemApi = createApi({
  reducerPath: 'itemApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000' }),
  endpoints: (build) => ({

    getAllItems: build.query({
      query: () => '/items'
    }),
    getUser: build.mutation({
      query: (payload) => ({
        url: '/accounts/login',
        method: 'POST',
        body: JSON.stringify(payload),
        headers: {
          'Content-type': 'Application/JSON'
        }
      })
    })
  })
});

export const { useGetAllItemsQuery, useGetUserMutation } = itemApi; 
export default itemApi; 