import { createSlice } from '@reduxjs/toolkit';

export const navbarSlice = createSlice({
  name: 'navbar',
  initialState: false,
  reducers: {
    OpenSidebar: (state) => {
      state = true;
      return state;
    },
    CloseSidebar: (state) => {
      state = false;
      return state;
    },
  },
});

export const { OpenSidebar, CloseSidebar } = navbarSlice.actions;
export default navbarSlice.reducer;
