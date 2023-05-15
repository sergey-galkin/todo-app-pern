import React, { useCallback, useMemo } from 'react';
import css from './Table.module.css';
import { useGetTodosQuery } from '../../../api/todosApiSlice';
import { useDispatch, useSelector } from 'react-redux';
import TH from '../../common/TH/TH';
import { setOrder } from './tableSlice';
import { useIdentificationQuery } from '../../../api/authApiSlice';
import { close, open } from '../Modal/modalSlice';
import Modal from '../Modal/Modal';
import EditTodoWindow from '../ModalChildren/EditTodoWindow/EditTodoWindow';
import { createPortal } from 'react-dom';
import { setEditedTodo } from '../ModalChildren/EditTodoWindow/editTodoWindowSlice';

const columns = [
  'name',
  'email',
  'task',
  'completed',
  'edited',
];

const modalOwner = 'table';

const Table = () => {
  const { data: user } = useIdentificationQuery()
  const params = useSelector(state => state.table);
  const { data, refetch } = useGetTodosQuery(params);
  const { orderColumn, orderDirection } = useSelector(state => state.table);
  const modal = useSelector(state => state.modal);
  const dispatch = useDispatch();
  
  const modalHandlers = useMemo(() => {
    return {
      open: () => dispatch(open(modalOwner)),
      close: () => dispatch(close())
    }
  }, [])

  const headers = useMemo(
    () => columns.map((name) => {
      const sort = (column) => {
        dispatch(setOrder({
          orderColumn: column,
          orderDirection: orderDirection === 'asc' ? 'desc' : 'asc',
        }));
        refetch();
      }

      const key = Math.random();

      return <TH 
        key={key}
        columnName={name}
        orderColumn={orderColumn}
        orderDirection={orderDirection}
        sort={sort}
      />
    })
  , [orderColumn, orderDirection]);

  const todos = data ? data.todos : [];

  const openEditTodoWindow = useCallback((e) => {
    const { id } = e.currentTarget;
    const todo = todos.find(v => v.id === +id);
    dispatch(setEditedTodo(todo));
    dispatch(open(modalOwner))
  }, [data]);

  const isAdmin = user && user.role === 'ADMIN';
  let rowsClassName = '';
  let rowsHandleClick = null;
  
  if (isAdmin) {
    rowsClassName = css.editable;
    rowsHandleClick = openEditTodoWindow;
  }
  
  const rows = useMemo(
    () => todos.map((todo, i) => (
      <tr key={todo.id} id={todo.id} className={rowsClassName} onClick={rowsHandleClick}>
        <td>{i + 1}</td>
        <td>{todo.name}</td>
        <td>{todo.email}</td>
        <td>{todo.task}</td>
        <td className={css.mark}>{todo.completed ? '✔' : ''}</td>
        <td className={css.mark}>{todo.edited ? '✔' : ''}</td>
      </tr>
    ))
  , [todos, user]);

  return (
    <>
      <table className={css.table}>
        <thead>
          <tr>
            <th>№</th>
            {headers}
          </tr>
        </thead>
        <tbody>
          {rows}
        </tbody>
      </table>
      {modal.owner === modalOwner && createPortal(
        <Modal header={'Edit Todo'} closeModal={modalHandlers.close}>
          <EditTodoWindow closeModal={modalHandlers.close} />
        </Modal>,
        document.body
      )}
    </>
  )
}

export default Table