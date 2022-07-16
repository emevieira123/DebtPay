import { api } from '../../../services/api';
import { URLS } from '../../../services/URLS';
import { toast } from 'react-toastify';

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
      toast.error('Erro: todos os campos devem ser preenchidos!');
    });
}
