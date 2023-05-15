import { createSlice } from '@reduxjs/toolkit';

const modalSlice = createSlice({
  name: 'modal',
  initialState: {
    opened: false,
  },
  reducers: {
    open(state) {
      state.opened = true;
    },
    close(state) {
      state.opened = false;
    },
  },
});

export const { open, close } = modalSlice.actions;
export default modalSlice.reducer;