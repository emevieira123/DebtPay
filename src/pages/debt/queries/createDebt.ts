/* eslint-disable @typescript-eslint/no-explicit-any */
import { api } from '../../../services/api';
import { URLS } from '../../../services/URLS';
import { toast } from 'react-toastify';

export default async function createDebt(value: any) {
  return await api
    .post(URLS.DEBT, value)
    .then((resp) => {
      console.log(resp);
      toast.success('Dívida cadastradas com sucesso!!');
    })
    .catch((err) => {
      console.log(err.message);
      toast.error('Erro: todos os campos devem ser preenchidos!');
    });
}
