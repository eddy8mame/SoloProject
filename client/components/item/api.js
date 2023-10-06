import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000' }),
  endpoints: (build) => ({
    tagTypes: ['item'],
    getAllItems: build.query({
      query: () => '/items'
    }),
    getLoginUser: build.mutation({
      query: (payload) => ({
        url: '/accounts/login',
        method: 'POST',
        body: payload ,
        headers: {
          'Content-type': 'application/json',
        }
      })
    }),
    getRegisterUser: build.mutation({
      query: (payload) => ({
        url: '/accounts/register',
        method: 'POST',
        body: payload,
        headers: {
          'Content-Type': 'application/json'
        }
      })
    }),
    // takes as input the id of the item to update, and the information to update on the item
    getUpdateItem: build.mutation({
      query: (payload) => ({
        url: `items/${payload.id}`,
        method: 'PATCH', 
        body: payload,
        headers: {
          'Content-Type': 'application/json'
        }
      })
    })
  })
});

export const { useGetAllItemsQuery, useGetLoginUserMutation, useGetRegisterUserMutation, getUpdateItem} = api; 
export default api; 