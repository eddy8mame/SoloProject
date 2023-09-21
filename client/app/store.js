import { configureStore } from '@reduxjs/toolkit'; 
import itemReducer from '../itemSlicer.js'; 
import {itemApi} from '../item/itemApi.js'

export const store = configureStore({
  reducer: {
    item: itemReducer,
    [itemApi.reducerPath]: itemApi.reducer, 
  }, 
  middleware : (getDefaultMiddleware) => {
    getDefaultMiddleware().concat(itemApi.middleware)
  },
})