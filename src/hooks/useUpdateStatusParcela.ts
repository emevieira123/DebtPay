/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMutation } from 'react-query';
import { queryClient } from '../pages/_app';
import updateStatusParcela from '../queries/updateStatusParcela';
import { URLS } from '../services/URLS';

export default function useUpdateStatusParcela(onSuccess: () => void) {
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
