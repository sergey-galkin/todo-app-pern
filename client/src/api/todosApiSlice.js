import { apiSlice } from './apiSlice';

export const todosApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    getTodos: builder.query({
      query: () => '/todos',
      providesTags: ['todos'],
    }),
    addTodo: builder.mutation({
      query: todo => ({
        url: '/todo',
        method: 'post',
        body: todo,
      }),
    }),
  })
})

export const {
  useGetTodosQuery,
  useAddTodoMutation,
} = todosApiSlice
