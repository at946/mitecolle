import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface searchState {
  isSearched: boolean;
}

const initialState: searchState = {
  isSearched: false,
};

export const searchStateSlice = createSlice({
  name: 'searchState',
  initialState,
  reducers: {
    setIsSearched: (state, action: PayloadAction<boolean>) => {
      state.isSearched = action.payload;
    },
  },
});

export const { setIsSearched } = searchStateSlice.actions;
