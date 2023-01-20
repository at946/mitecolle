import { configureStore } from '@reduxjs/toolkit';
import { keywordSlice } from './keywordSlice';
import { searchStateSlice } from './searchStateSlice';

export const store = configureStore({
  reducer: {
    [keywordSlice.name]: keywordSlice.reducer,
    [searchStateSlice.name]: searchStateSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
