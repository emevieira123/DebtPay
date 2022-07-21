import { useQuery } from 'react-query';
import { URLS } from '../../../services/URLS';
import getDebts from '../queries/getDebts';

export default function useGetDebts() {
  const resultQuery = useQuery([URLS.DEBT], getDebts, {
    // onSuccess: (data) => {
    //   console.log(data);
    // },
    onError: (error) => {
      console.log(error);
    },
  });

  return resultQuery;
}
