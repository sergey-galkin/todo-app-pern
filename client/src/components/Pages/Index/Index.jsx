import * as React from 'react';
import css from './Index.module.css';
import Table from '../../features/Table/Table';
import Actions from '../../features/Actions/Actions';
import Pagination from '../../features/Pagination/Pagination';

const Index = () => {
  return (
    <>
      <header className={css.header}>
        <h1>ToDo list</h1>
        <span>Powered by PERN</span>
      </header>
      <main className={css.main}>
        <Actions />
        <Table />
        <Pagination />
      </main>
    </>
 )
}

export default Index