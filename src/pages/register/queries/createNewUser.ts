/* eslint-disable @typescript-eslint/no-explicit-any */
import { api } from '../../../services/api';
import { URLS } from '../../../services/URLS';

export default async function createNewUser(value: any) {
  return await api
    .post(URLS.DEBT, value)
    .then((resp) => {
      console.log(resp);
      // toast.success('Usuário criado com sucesso!!');
    })
    .catch((err) => {
      console.log(err.res);
      console.log(err.req);
      // toast.error('Erro: todos os campos devem ser preenchidos!');
    });
}
