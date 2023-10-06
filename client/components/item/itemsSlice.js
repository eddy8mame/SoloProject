import { createSlice } from '@reduxjs/toolkit';
import api from './api';

const initialState = {
  user: null,
  data: [],
  selectedItems: {},
  itemIsSelected: false, 
  loadInProgress: false, 
  events: {
    isOptionsOpen: false,
    isLocatedAt: {screenX: 30, screenY: 70},
  }
};

export const itemsSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {
    toggleSelect: (state, action) => {
      console.log(action)
      
      state.selectedItems[action.payload]
      ? delete state.selectedItems[action.payload]
        : state.selectedItems = {
          ...state.selectedItems,
          [action.payload]: state.data[action.payload]
        };
        
      state.itemIsSelected = Object.keys(state.selectedItems).length !== 0; 
    },
    toggleSelectAll: (state, action) => {
      if (action.payload === false) {
        state.selectedItems = {
          ...state.data
      }
        state.itemIsSelected = true;
      } else {
        state.selectedItems = {};
        state.itemIsSelected = false; 
      }
    },
    deleteItem: (state, action) => {

      const idsToDelete = Object.keys(state.selectedItems);
      state.data = [...state.data].filter((item, i) => !state.selectedItems[i])
      state.selectedItems = {};
      state.itemIsSelected = false;
    },
    sort: (state, {payload}) => {
      switch (payload) {
        case 'H-L': {
          state.data = [...state.data].sort((a, b) => b.offers.price - a.offers.price);
          break;
        }
        case 'L-H': {
          state.data = [...state.data].sort((a, b) => a.offers.price - b.offers.price);
          break;
        }
        case 'A-Z': {
          state.data = [...state.data].sort((a, b) => {
            const nameA = a.name.toUpperCase();
            const nameB = b.name.toUpperCase();
            if (nameA < nameB) {
              return -1;
            }
            if (nameA > nameB) {
              return 1;
            }
            return 0; 
          })
          break;
        }
        case 'Z-A': {
          state.data = [...state.data].sort((a, b) => {
            const nameA = a.name.toUpperCase();
            const nameB = b.name.toUpperCase();
            if (nameA < nameB) {
              return 1;
            }
            if (nameA > nameB) {
              return -1;
            }
            return 0; 
          })
          break;
        }
        default:
          state.data;
      }
    },
    updateProduct: (state, {payload}) => {
      console.log('updateProduct')
      const idsToUpdate = Object.keys(state.selectedItems); 
      state.data.forEach((item)=> console.log(item))
    }
  },
  extraReducers: (builder) => {
    builder.addMatcher(api.endpoints.getAllItems.matchFulfilled, (state, action) => {
      state.data = action.payload; 
    })
  }
});

export const { toggleSelect, toggleSelectAll, deleteItem, sort, updateProduct } = itemsSlice.actions; 
export default itemsSlice.reducer; 