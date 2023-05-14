import React from 'react';
import css from './Table.module.css';
import { useGetTodosQuery } from '../../../api/todosApiSlice';

const Table = () => {
  const { data: todos, isFetching } = useGetTodosQuery();
  
  console.log(222);
  if (isFetching) return null;
  
  return (
    <table className={css.table}>
      <thead>
        <tr>
          <th>№</th>
          <th>Name</th>
          <th>Email</th>
          <th>Task</th>
          <th>Completed</th>
          <th>Edited</th>
        </tr>
      </thead>
      <tbody>
        {
          todos.map((todo, i) => (
            <tr key={todo.name}>
              <td>{i + 1}</td>
              <td>{todo.name}</td>
              <td>{todo.email}</td>
              <td>{todo.task}</td>
              <td className={css.mark}>{!todo.completed ? '✔' : ''}</td>
              <td className={css.mark}>{todo.edited ? '✔' : ''}</td>
            </tr>
          ))
        }
      </tbody>
    </table>
  )
}

export default Table