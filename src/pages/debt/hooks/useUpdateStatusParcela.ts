/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMutation } from 'react-query';
import { URLS } from '../../../services/URLS';
import { queryClient } from '../../_app';
import updateStatusParcela from '../queries/updateStatusParcela';

export default function useUpdateStatusParcela(
  parcelaId: string,
  onSuccess: () => void,
) {
  return useMutation(updateStatusParcela, {
    onSuccess() {
      queryClient.invalidateQueries(URLS.DEBT_PARCELAS);
      queryClient.invalidateQueries(URLS.DEBT);

      onSuccess();
    },
    onError(err: any) {
      console.log(err.message);
    },
  });
}
