import { configureStore } from '@reduxjs/toolkit';  
import charReducer from './reduxSlice';

export const store = configureStore({
    reducer: {char: charReducer},
  });