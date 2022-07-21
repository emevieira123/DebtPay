/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMutation } from 'react-query';
import { URLS } from '../services/URLS';
import { queryClient } from '../pages/_app';
import createDebt from '../queries/createDebt';

export default function useCreateDebt(onSuccess: () => void) {
  return useMutation(createDebt, {
    onSuccess() {
      queryClient.invalidateQueries(URLS.DEBT);

      onSuccess();
    },
    onError(err: any) {
      console.log(err.message);
    },
  });
}
