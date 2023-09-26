import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  status: "idle",
  error: null
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducer: {
    logOutUser: (state, action) => {
      
    }
  }, 
  extraReducers: (builder) => {
    builder.addMatcher()
  },
});

// export {} userSlice.actions; 
export default userSlice.reducer;

// create the userAPI endpoints for getting teh user