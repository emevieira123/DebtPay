/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMutation } from 'react-query';
import { queryClient } from '../pages/_app';
import createParcelas from '../queries/createParcelas';
import { URLS } from '../services/URLS';

export default function useCreateParcelas(onSuccess: () => void) {
  return useMutation(createParcelas, {
    onSuccess() {
      queryClient.invalidateQueries(URLS.DEBT);

      onSuccess();
    },
    onError(err: any) {
      console.log(err.message);
    },
  });
}
