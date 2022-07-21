import { useQuery } from 'react-query';
import getDebtAndParcelas from '../queries/getDebtAndParcelas';
import { URLS } from '../services/URLS';

export default function useGetDebtAndParcelas(debtId: string) {
  const resultQuery = useQuery(
    [URLS.DEBT_PARCELAS, debtId],
    () => getDebtAndParcelas(debtId),
    {
      enabled: typeof debtId !== null,
      cacheTime: 0,
      onError: (error) => {
        console.log(error);
      },
    },
  );

  return resultQuery;
}
