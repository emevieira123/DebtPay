import { toast } from 'react-toastify';
import { api } from '../services/api';
import { URLS } from '../services/URLS';

export default async function updateStatusParcela(id: string) {
  return await api
    .put(URLS.UPDATE_STATUS_PARCELAS.replace('{parcelaId}', id))
    .then((resp) => {
      console.log(resp);
      toast.success('O status da parcela foi atualizado com sucesso!!');
    })
    .catch((err) => {
      console.log(err.message);
      toast.error(err.response);
      toast.error(err.request);
      toast.error('Erro: ao atualizar status da parcelas!');
    });
}
