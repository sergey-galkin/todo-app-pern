import { createSlice } from '@reduxjs/toolkit';

const getInitialState = (initialValue) => {
  return {
    name: initialValue,
    email: initialValue,
    task: initialValue,
  }
};

const newTodoWindow = createSlice({
  name: 'newTodoWindow',
  initialState: {
    message: '',
    todo: getInitialState(''),
    checks: getInitialState(true),
  },
  reducers: {
    setMessage(state, action) {
      state.message = action.payload;
    },
    setTodo(state, action) {
      const { id, value } = action.payload;
      state.todo[id] = value;
    },
    resetTodo(state) {
      state.todo = getInitialState('');
    },
    setChecks(state, action) {
      state.checks = action.payload;
    },
    resetChecks(state) {
      state.checks = getInitialState(true);
    },
  },
});

export const { setMessage, setTodo, resetTodo, setChecks, resetChecks } = newTodoWindow.actions;
export default newTodoWindow.reducer;