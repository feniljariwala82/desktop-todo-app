import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
  isLoggedIn: false,
  error: null,

  // response from the api
  token: null,
  user: null,
  customer: null,
  agents: [],
  studios: [],
  scan_profiles: [],
  contacts: [],
};

export const counterSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
});

export default counterSlice.reducer;
