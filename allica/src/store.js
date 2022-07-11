import { configureStore } from '@reduxjs/toolkit';  
import charReducer from './redux/reduxSlice';

export const store = configureStore({
    reducer: {char: charReducer},
  });