/* eslint-disable @typescript-eslint/no-explicit-any */
import { api } from '../services/api';
import { URLS } from '../services/URLS';
import { toast } from 'react-toastify';

export default async function createNewUser(value: any) {
  return await api
    .post(URLS.USERS, value)
    .then((resp) => {
      console.log(resp);
      toast.success('Usuário criado com sucesso!!');
    })
    .catch((err) => {
      console.log(err.message);
      toast.error(err.response);
      toast.error(err.request);
      toast.error('Erro: todos os campos devem ser preenchidos!');
    });
}
