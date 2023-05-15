import React, { useMemo } from 'react';
import css from './NewTodoButton.module.css';
import Button from '../../../common/Button/Button';
import { createPortal } from 'react-dom';
import Modal from '../../Modal/Modal';
import NewTodoWindow from '../../ModalChildren/NewTodoWindow/NewTodoWindow';
import { useDispatch, useSelector } from 'react-redux';
import { close, open } from '../../Modal/modalSlice';

const NewTodoButton = ({  }) => {
  const modal = useSelector(state => state.modal);
  const dispatch = useDispatch();

  const modalHandlers = useMemo(() => {
    return {
      open: () => dispatch(open()),
      close: () => dispatch(close())
    }
  }, [])

  return (
    <>
      <Button caption={'New Task'} handleClick={modalHandlers.open} />
      {modal.opened && createPortal(
        <Modal header={'Create New Task'} closeModal={modalHandlers.close}>
          <NewTodoWindow closeModal={modalHandlers.close} />
        </Modal>,
        document.body
      )}
    </>
  )
}

export default NewTodoButton