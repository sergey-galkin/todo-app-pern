import axios from 'axios';

export const authentication = (authData) => {
  return axios.post('/api/authentication', authData);
}