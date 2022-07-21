import { api } from '../../../services/api';
import { URLS } from '../../../services/URLS';

export default function getDebts() {
  return api.get(URLS.DEBT).then((resp) => resp.data);
}
