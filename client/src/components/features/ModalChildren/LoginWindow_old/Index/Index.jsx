import React from 'react';
import { useMemo, useState } from 'react';
import Field from '../Field/Field';
import css from './Index.module.css';
import { useAuthenticationMutation } from '../../../../../api/authApiSlice';
import { useCallback } from 'react';

const LoginWindow = ({ closeModal }) => {
  const fields = useMemo(() => [
    {
      id: 'login',
      type: 'text',
      placeholder: 'Логин',
    },
    {
      id: 'password',
      type: 'password',
      placeholder: 'Пароль',
    },
  ], []);
  
  const setFormFieldInitialState = useCallback(() => {
    return {
      login: '',
      password: '',
    }
  }, []);

  const [authData, setAuthData] = useState(setFormFieldInitialState);
  const [requestStage, setRequestStage] = useState({index: 0, data: ''});
  const [authentication, {}] = useAuthenticationMutation();

  const handleFormFieldChange = useCallback((e) => {
    const id = e.target.id;
    const value = e.target.value;
    setAuthData(p => ({...p, [id]: value}));
  }, [])

  const handleFormSubmit = (e) => {
    e.preventDefault();
    
    setRequestStage({index: 1, data: ''});
    authentication(authData).unwrap()
      .then(res => {
        if (res) closeModal();
        else setRequestStage({index: 4, data: ''});
      })
      .catch(() => setRequestStage({index: 2, data: ''}))
    ;
  }
    
  return (
    <div className={css.container}>
      <form onSubmit={handleFormSubmit}>
        {fields.map((f) => {
          return <Field {...f} key={f.id}
            value={authData[f.id]}
            onChange={handleFormFieldChange}
          />;
        })}
      </form>
    </div>
  );
}

export default LoginWindow;
