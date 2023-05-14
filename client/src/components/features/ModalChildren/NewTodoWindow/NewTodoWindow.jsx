import React, { useCallback } from 'react';
import css from './NewTodoWindow.module.css';
import { useAddTodoMutation, useGetTodosQuery } from '../../../../api/todosApiSlice';
import Button from '../../../common/Button/Button';
import MessageWindow from '../MessageWindow/MessageWindow';
import FormField from '../../../common/FormField/FormField';
import { useDispatch, useSelector } from 'react-redux';
import { resetChecks, resetTodo, setChecks, setMessage, setTodo } from './NewTodoWindowSlice';

const fields = [
  {
    id: 'name',
    type: 'text',
    placeholder: 'Name',
  },
  {
    id: 'email',
    type: 'email',
    placeholder: 'Email',
  },
  {
    id: 'task',
    type: 'text',
    placeholder: 'Task',
  },
];

const NewTodoWindow = ({ closeModal }) => {
  const [addTodo] = useAddTodoMutation();
  const { refetch } = useGetTodosQuery();
  const dispatch = useDispatch();
  const { message, todo, checks} = useSelector((state) => state.newTodoWindow);

  const handleFormFieldChange = useCallback((e) => {
    const { id, value } = e.target;
    dispatch(setTodo({id, value}));
  }, []);

  const closeModalAndResetState = useCallback(() => {
    dispatch(setMessage(''));
    dispatch(resetTodo());
    dispatch(resetChecks());
    closeModal();
  }, []);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    dispatch(resetChecks());
    dispatch(setMessage('In progress...'));
    
    addTodo(todo).unwrap()
      .then(res => {
        // console.log(res);
        if (res.status) {
          dispatch(setMessage('Task successfully added'));
          dispatch(resetTodo());
          refetch();
        } else {
          dispatch(setChecks(res.checks));
          dispatch(setMessage(''));
        }
      })
      .catch((err) => {
        dispatch(setMessage('Something went wrong'));
        dispatch(resetTodo());
        dispatch(resetChecks());
      })
    ;
  }

  return (
    <>
      {message 
        ? <MessageWindow message={message} showButton={message !== 'In progress...'} closeModal={closeModalAndResetState} />
        : (
          <form className={css.form} onSubmit={handleFormSubmit}>
            {fields.map((f) => (
              <FormField {...f} key={f.id}
                value={todo[f.id]}
                onChange={handleFormFieldChange}
                warning={!checks[f.id]}
              />
            ))}
            <div className={css.btnsHolder}>
              <Button caption={'Add'} handleClick={null} type={'submit'} />
              <Button caption={'Cancel'} handleClick={closeModalAndResetState} classesArr={[css.cancelBtn]}/>
            </div>
          </form>
        )
      }
    </>
  );
}

export default NewTodoWindow;
