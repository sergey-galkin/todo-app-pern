import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from '../api/apiSlice';
import newTodoWindowReducer from '../components/features/ModalChildren/NewTodoWindow/newTodoWindowSlice';
import tableReducer from '../components/features/Table/tableSlice';
import modalReducer from '../components/features/Modal/modalSlice';

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    newTodoWindow: newTodoWindowReducer,
    table: tableReducer,
    modal: modalReducer,
  },
  middleware: getDefaultMiddleWare => 
    getDefaultMiddleWare().concat(apiSlice.middleware)
});
