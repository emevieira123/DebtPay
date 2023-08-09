import React from 'react';
import { CardContainer, StyledDados } from '../styles/debtStyles';
import { MoneyIcon } from '../assets/MoneyIcon';
import { CardRecentContent } from './CardRecentContent';
import useGetDebts from '../hooks/useGetDebts';
import { MoneyFormat } from './drawer/InfoDebtDrawer';
import { LoadingPage } from './LoadingPage';

interface CardDebtRecentProps {
  setDebtId: (id: string) => void;
}

export function CardDebtRecent({ setDebtId }: CardDebtRecentProps) {
  const { data: debts, isLoading } = useGetDebts();

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

  if (isLoading) {
    return (
      <>
        <LoadingPage loading={isLoading} />
        <LoadingPage loading={isLoading} />
        <LoadingPage loading={isLoading} />
      </>
    );
  }

  return (
    <>
      {debts?.slice(0, 3).map((debt, index) => {
        const Total = valorParcela[index] * totalParcelas[index];
        const VParcela = valorParcela[index];
        return (
          <CardContainer
            onClick={() => {
              setDebtId(debt.id);
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
                  valorParcela[index].length <= 0 ? '-' : MoneyFormat(VParcela)
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
                  valorParcela[index].length <= 0 ? '-' : MoneyFormat(Total)
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
