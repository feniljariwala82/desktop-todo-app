import { configureStore } from '@reduxjs/toolkit';
import authReducer from 'features/auth/authSlice';
import counterReducer from 'features/counter/counterSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer,
  },
});
