import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { keyword } from '../interfaces/keyword';

export interface keywordState {
  keyword: keyword
}

const initialState: keywordState = {
  keyword: ''
};

export const keywordSlice = createSlice({
  name: 'keyword',
  initialState,
  reducers: {
    setKeyword: (state, action: PayloadAction<keyword>) => {
      state.keyword = action.payload
    },
  },
});

export const { setKeyword } = keywordSlice.actions;
