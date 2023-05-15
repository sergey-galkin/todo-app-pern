import * as React from 'react';
import css from './Index.module.css';
import { useState } from 'react';
import Error from '../../features/Error/Error';
import Button from '../../common/Button/Button';
import Table from '../../features/Table/Table';
import Actions from '../../features/Actions/Actions';
import Pagination from '../../features/Pagination/Pagination';

const Index = () => {
  // const [isLoading, setIsLoading] = useState(false);
  const [todos, setTodos] = useState([]);
  const [error, setError] = useState(false);
  

  const createTodo = async () => {
    // setIsLoading(true);
    setError(false);
    setTodos([]);

    try {
      const res = await fetch('/api');
      console.log(res);
      if (res.ok) {
        const data = await res.json();
        console.log(data);
        setTodos(data);
      } else {
        setError(true);
      }
    } catch (error) {
      setError(true);
    }

    // setIsLoading(false);
  }
  console.log(111);
  return (
    <>
      <header className={css.header}>
        <h1>ToDo list</h1>
        <span>Powered by PERN</span>
      </header>
      <main className={css.main}>
        {error && <Error />}
        <Actions />
        <Table />
        <Pagination />
      </main>
    </>
 )
}

export default Index