import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { IProduct } from '@/interface/product';

export const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    CartAdd: (state, action: PayloadAction<IProduct>) => {
      state.push(action.payload);
    },

    CartDeleted: (state, action: PayloadAction<number>) => {
      const newState = state.filter(
        (item: IProduct) => item.id !== action.payload
      );
      return (state = newState);
    },
  },
});

export const { CartAdd, CartDeleted } = cartSlice.actions;

export default cartSlice.reducer;
