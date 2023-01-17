import { configureStore } from '@reduxjs/toolkit';
import { keywordSlice } from './keywordSlice';

export const store = configureStore({
  reducer: {
    [keywordSlice.name]: keywordSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
