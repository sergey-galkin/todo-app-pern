import { apiSlice } from './apiSlice';

function createUrlParams(params) {
  if (!params) return '';
  const data = Object.entries(params)
    .map(param => param.join('='))
    .join('&')
  ;
  return data;
};

export const todosApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    getTodos: builder.query({
      query: (params) => (`/todos?${createUrlParams(params)}`),
      providesTags: ['todos'],
    }),
    addTodo: builder.mutation({
      query: todo => ({
        url: '/todo',
        method: 'post',
        body: todo,
      }),
    }),
    updateTodo: builder.mutation({
      query: todo => ({
        url: '/updateTodo',
        method: 'post',
        body: todo,
      }),
    }),
  })
})

export const {
  useGetTodosQuery,
  useAddTodoMutation,
  useUpdateTodoMutation
} = todosApiSlice
