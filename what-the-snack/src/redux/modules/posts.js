import { createSlice } from '@reduxjs/toolkit';

const initialState = [{
  id: '',
  author: '',
  title: '',
  body: '',
  like: 0,
  url: '',
}];

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
});

export const {} = postsSlice.actions;
export default postsSlice.reducer;