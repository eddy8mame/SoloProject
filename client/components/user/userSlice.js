import { createSlice } from "@reduxjs/toolkit";

const userToken = localStorage.getItem('userToken')
  ? localStorage.getItem('userToken')
  : {}


const initialState = {
  loading: false,
  userInfo: null,
  userToken,
  error: null, 
  success: false, 
}

export const userSlice = createSlice({
  name: 'user', 
  initialState,
  reducers: {
    logout: (state, {payload}) => {
      console.log('logout')
    }, 
    setCredentials: (state, {payload}) => {
      console.log(payload)
      state.userInfo = payload;
    }
  }
})

export const { logout, setCredentials } = userSlice.actions;
export default userSlice.reducer;