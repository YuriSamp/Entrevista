import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { IProduct } from '@/interface/poroduct';

// export const cartSlice = createSlice({
//   name: 'cart',
//   initialState: [],
//   reducers: {
//     CartAdd: (state, action: PayloadAction<IProduct[]>) => {
//       state.push(action.payload);
//     },
//     CartDeleted: (state, action) => {
//       return state.filter((todo: IProduct) => todo.id !== action.payload);
//     },
//   },
// });

const initialState = {
  value: 0,
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});

export const { increment, decrement } = counterSlice.actions;

export default counterSlice.reducer;
