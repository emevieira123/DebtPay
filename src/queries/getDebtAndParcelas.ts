import { api } from '../../../services/api';
import { URLS } from '../../../services/URLS';

export default async function getDebtAndParcelas(id: string) {
  const response = await api
    .get(URLS.DEBT_PARCELAS.replace('{debtId}', id))
    .then((resp) => resp.data);
  return response;
}
