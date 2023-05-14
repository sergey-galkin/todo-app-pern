import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from '../api/apiSlice';
import NewTodoWindowReducer from '../components/features/ModalChildren/NewTodoWindow/NewTodoWindowSlice';

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    newTodoWindow: NewTodoWindowReducer,
  },
  middleware: getDefaultMiddleWare => 
    getDefaultMiddleWare().concat(apiSlice.middleware)
});
