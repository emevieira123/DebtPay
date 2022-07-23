import { toast } from 'react-toastify';
import { api } from '../services/api';
import { URLS } from '../services/URLS';

type ParcelaType = {
  parcelaId: string;
  status: boolean;
};

export default async function updateStatusParcela(body: ParcelaType) {
  return await api
    .put(`${URLS.UPDATE_STATUS_PARCELAS}/${body.parcelaId}`, body)
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
