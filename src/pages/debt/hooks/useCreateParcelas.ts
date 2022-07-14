/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMutation } from 'react-query';
import { URLS } from '../../../services/URLS';
import { queryClient } from '../../_app';
import createParcelas from '../queries/createParcelas';

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
