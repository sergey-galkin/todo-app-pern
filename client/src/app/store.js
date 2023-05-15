import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from '../api/apiSlice';
import newTodoWindowReducer from '../components/features/ModalChildren/NewTodoWindow/newTodoWindowSlice';
import tableReducer from '../components/features/Table/tableSlice';

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    newTodoWindow: newTodoWindowReducer,
    table: tableReducer,
  },
  middleware: getDefaultMiddleWare => 
    getDefaultMiddleWare().concat(apiSlice.middleware)
});
