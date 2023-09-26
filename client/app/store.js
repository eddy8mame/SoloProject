import { configureStore } from '@reduxjs/toolkit'; 
import itemReducer from '../components/item/itemSlice';
import itemApi from '../components/item/itemApi.js';

export const store = configureStore({
  reducer: {
    item: itemReducer,
    [itemApi.reducerPath]: itemApi.reducer, 
  }, 
  middleware : (getDefaultMiddleware) => getDefaultMiddleware().concat(itemApi.middleware),
})