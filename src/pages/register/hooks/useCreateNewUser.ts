/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMutation } from 'react-query';
import { URLS } from '../../../services/URLS';
import { queryClient } from '../../_app';
import createNewUser from '../queries/createNewUser';

export default function useCreateNewUser(onSuccess: () => void) {
  return useMutation(createNewUser, {
    onSuccess() {
      queryClient.invalidateQueries(URLS.NEW_USER);

      onSuccess();
    },
    onError(err: any) {
      console.log(err.message);
    },
  });
}
