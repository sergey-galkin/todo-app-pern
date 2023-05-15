import React, { useCallback } from 'react';
import css from './Table.module.css';
import { useGetTodosQuery } from '../../../api/todosApiSlice';
import { useDispatch, useSelector } from 'react-redux';
import TH from '../../common/TH/TH';
import { setOrder } from './tableSlice';


const columns = [
  'name',
  'email',
  'task',
  'completed',
  'edited',
];



const Table = () => {
  const params = useSelector(state => state.table);
  const { data, refetch } = useGetTodosQuery(params);
  const { skip, orderColumn, orderDirection } = useSelector(state => state.table);
  const dispatch = useDispatch();
  
  const todos = data ? data.todos : [];
  
  console.log(222);
  console.log(todos);
  console.log(skip);
  console.log(orderColumn);
  console.log(orderDirection);

  const sort = (column) => {
    dispatch(setOrder({
      orderColumn: column,
      orderDirection: orderDirection === 'asc' ? 'desc' : 'asc',
    }));
    refetch();
  }

  
  return (
    <table className={css.table}>
      <thead>
        <tr>
          <th>№</th>
          {columns.map((column, i) => 
            <TH columnName={column} orderColumn={orderColumn} orderDirection={orderDirection} sort={sort} />
          )}
        </tr>
      </thead>
      <tbody>
        {todos.map((todo, i) => (
          <tr key={todo.id}>
            <td>{i + 1}</td>
            <td>{todo.name}</td>
            <td>{todo.email}</td>
            <td>{todo.task}</td>
            <td className={css.mark}>{todo.completed ? '✔' : ''}</td>
            <td className={css.mark}>{todo.edited ? '✔' : ''}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default Table