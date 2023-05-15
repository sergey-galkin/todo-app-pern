import React from 'react';
import css from './Actions.module.css'
import NewTodoButton from '../Buttons/NewTodoButton/NewTodoButton';
import LoginButton from '../Buttons/LoginButton/LoginButton';
import { useIdentificationQuery } from '../../../api/authApiSlice';
import LogoutButton from '../Buttons/LogoutButton/LogoutButton';

const Actions = () => {
  const { data: user } = useIdentificationQuery();
  
  return (
    <div className={css.container}>
      <NewTodoButton />
      {user
        ? <LogoutButton />
        : <LoginButton />
      }
    </div>
  )
}

export default Actions