/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMutation } from 'react-query';
import { URLS } from '../services/URLS';
import { queryClient } from '../pages/_app';
import createNewUser from '../queries/createNewUser';

export default function useCreateNewUser(onSuccess: () => void) {
  return useMutation(createNewUser, {
    onSuccess() {
      queryClient.invalidateQueries(URLS.USERS);

      onSuccess();
    },
    onError(err: any) {
      console.log(err.message);
    },
  });
}
