import React from 'react';
import { Outlet } from 'react-router-dom';
import css from './Layout.module.css'
import { useIdentificationQuery } from '../../../api/authApiSlice';
import Loader from '../../features/Loader/Loader';

const Layout = () => {
  const { isLoading } = useIdentificationQuery();
  return (
    <div className={css.container}>
      {isLoading 
        ? <Loader />
        : <Outlet />
      }
    </div>
  );
}

export default Layout;
