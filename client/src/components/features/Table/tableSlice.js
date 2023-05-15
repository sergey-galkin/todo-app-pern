import { createSlice } from '@reduxjs/toolkit';

const tableSlice = createSlice({
  name: 'table',
  initialState: {
    limit: 3,
    skip: 0,
    orderColumn: 'name',
    orderDirection: 'asc',
  },
  reducers: {
    setSkip(state, action) {
      state.skip = action.payload;
    },
    setOrder(state, action) {
      const { orderColumn, orderDirection } = action.payload;
      return {
        ...state,
        orderColumn: orderColumn,
        orderDirection: orderColumn !== state.orderColumn ? 'asc' : orderDirection,
      }
    },
  },
});

export const { setSkip, setOrder } = tableSlice.actions;
export default tableSlice.reducer;