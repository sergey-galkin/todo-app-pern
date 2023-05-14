import React, { useState } from 'react';
import css from './NewTodoButton.module.css';
import Button from '../../../common/Button/Button';
import { createPortal } from 'react-dom';
import Modal from '../../Modal/Modal';
import NewTodoWindow from '../../ModalChildren/NewTodoWindow/NewTodoWindow';

const NewTodoButton = ({  }) => {
  const [modal, setModal] = useState(false);

  const handleClick = () => {
    setModal(p => !p);
  }

  return (
    <>
      <Button caption={'New Task'} handleClick={handleClick} />
      {modal && createPortal(
        <Modal header={'Create New Task'} closeModal={handleClick}>
          <NewTodoWindow closeModal={handleClick} />
        </Modal>,
        document.body
      )}
    </>
  )
}

export default NewTodoButton