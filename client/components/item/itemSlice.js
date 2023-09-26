import { createSlice } from '@reduxjs/toolkit';
import itemApi from './itemApi';

const initialState = {
  data: [],
  selectedItems: {},
  itemIsSelected: false, 
  loadInProgress: false, 
};

export const itemSlice = createSlice({
  name: 'item',
  initialState,
  reducers: {
    selectItem: (state, action) => {

      state.selectedItems[action.payload]
      ? delete state.selectedItems[action.payload]
        : state.selectedItems = {
          ...state.selectedItems,
          [action.payload]: state.data[action.payload]
        };
        
      state.itemIsSelected = Object.keys(state.selectedItems).length !== 0; 
    }
  },
  extraReducers: (builder) => {
    builder.addMatcher(itemApi.endpoints.getAllItems.matchFulfilled, (state, action) => {
      state.data = action.payload; 
    })
  }
});

export const { selectItem } = itemSlice.actions; 
export default itemSlice.reducer; 