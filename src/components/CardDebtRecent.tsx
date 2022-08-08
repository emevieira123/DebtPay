import React from 'react';
import { CardContainer, StyledDados } from '../styles/debtStyles';
import { MoneyIcon } from '../assets/MoneyIcon';
import { CardRecentContent } from './CardRecentContent';
import useGetDebts from '../hooks/useGetDebts';

interface CardDebtRecentProps {
  setDebtId: (id: string) => void;
  setIsLoading: (isLoading: boolean) => void;
}

export function CardDebtRecent({
  setDebtId,
  setIsLoading,
}: CardDebtRecentProps) {
  const { data: debts } = useGetDebts();

  const valorParcela = debts?.map((item) =>
    item.parcelas?.slice(0, 1).map((parce) => parce.valor_parcela),
  );

  const totalParcelas = debts?.map(
    (item) => item.parcelas?.map((parce) => parce.valor_parcela).length,
  );

  const parcelasPagas = debts?.map(
    (item) => item.parcelas?.filter((parce) => parce.status === true).length,
  );

  const diaVencimento = debts?.map((item) =>
    item.parcelas?.slice(0, 1).map((parce) => parce.dia_vencimento),
  );

  return (
    <>
      {debts?.slice(0, 3).map((debt, index) => {
        const Total = valorParcela[index] * totalParcelas[index];
        return (
          <CardContainer
            onClick={() => {
              setDebtId(debt.id);
              setIsLoading(!debts ? true : false);
            }}
            key={debt.id}
            color={
              !totalParcelas[index]
                ? '#4A4A4A'
                : parcelasPagas[index] === totalParcelas[index]
                ? '#22BF1F'
                : '#8B21DF'
            }
          >
            <StyledDados>
              <div
                style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}
              >
                <CardRecentContent title="Cobrador:" content={debt.name_debt} />
                <CardRecentContent title="Produto:" content={debt.produto} />
              </div>
              <MoneyIcon />
            </StyledDados>
            <StyledDados>
              <CardRecentContent
                title="Valor da Parcela:"
                content={`R$ ${
                  valorParcela[index].length <= 0
                    ? '-'
                    : `${valorParcela[index]}`.replace('.', ',')
                }`}
              />
              <CardRecentContent
                title="Dia de Vencimento:"
                content={
                  diaVencimento[index].length <= 0
                    ? '-'
                    : String(diaVencimento[index]).padStart(2, '0')
                }
              />
            </StyledDados>
            <StyledDados>
              <CardRecentContent
                title="Valor Total:"
                content={`R$ ${
                  valorParcela[index].length <= 0
                    ? '-'
                    : Total.toFixed(2).replace('.', ',')
                }`}
              />
              <CardRecentContent
                title="Parcelas Pagas"
                content={
                  totalParcelas[index] <= 0
                    ? '-'
                    : `${parcelasPagas[index]}/${totalParcelas[index]}`
                }
              />
            </StyledDados>
          </CardContainer>
        );
      })}
    </>
  );
}
