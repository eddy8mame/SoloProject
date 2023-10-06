import { configureStore } from '@reduxjs/toolkit'; 
import api from '../components/item/api.js';
import itemsReducer from '../components/item/itemsSlice';
import userReducer from '../components/user/userSlice';

const store = configureStore({
  reducer: {
    items: itemsReducer,
    user: userReducer,
    [api.reducerPath]: api.reducer, 
  }, 
  middleware : (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
})

export default store;