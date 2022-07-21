/* eslint-disable @typescript-eslint/no-explicit-any */
import { toast } from 'react-toastify';
import { api } from '../services/api';
import { URLS } from '../services/URLS';

export default async function createParcelas(value: any) {
  return await api
    .post(URLS.CREATE_PARCELAS, value)
    .then((resp) => {
      console.log(resp);
    })
    .catch((err) => {
      console.log(err.message);
      toast.error(err.response);
      toast.error(err.request);
    });
}
