import React from 'react';
import css from './Actions.module.css'
import Button from '../../common/Button/Button';
import NewTodoButton from '../Buttons/NewTodoButton/NewTodoButton';

const Actions = () => {
  return (
    <div className={css.container}>
      <NewTodoButton />
      <Button caption={'Login'} handleClick={() => {}}/>
    </div>
  )
}

export default Actions