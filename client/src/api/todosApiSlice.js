import { apiSlice } from './apiSlice';

function createUrlParams(params) {
  if (!params) return '';
  // console.log(params);
  const data = Object.entries(params)
    .map(param => param.join('='))
    .join('&')
  ;
  // console.log(data);
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
  })
})

export const {
  useGetTodosQuery,
  useAddTodoMutation,
} = todosApiSlice
