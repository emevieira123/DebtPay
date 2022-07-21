import { useQuery } from 'react-query';
import getDebts from '../queries/getDebts';
import { URLS } from '../services/URLS';

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
