import { createSlice } from '@reduxjs/toolkit';

export const OrderSummaryViewSlice = createSlice({
  name: 'orderSummary',
  initialState: {
    orderSummary: [],
  },
  reducers: {
    updateSummary: (state, action) => {
      state.orderSummary = action.payload;
    },
  },
});
export const { updateSummary } = OrderSummaryViewSlice.actions;

export const getOrders = (state) => state.orderSummary.orderSummary;
export default OrderSummaryViewSlice.reducer;
