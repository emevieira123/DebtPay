import React from 'react';
import { CardContainer } from '../styles';
import { MoneyIcon } from '../../../assets/MoneyIcon';
import { StyledDados } from '../styles';
import { CardRecentContent } from './CardRecentContent';
import useGetDebts from '../hooks/useGetDebts';

interface CardDebtRecentProps {
  setDebtId: (id: string) => void;
}

export function CardDebtRecent({ setDebtId }: CardDebtRecentProps) {
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
        return (
          <CardContainer
            onClick={() => setDebtId(debt.id)}
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
                <CardRecentContent title="Nome:" content={debt.name_debt} />
                <CardRecentContent title="Produto:" content={debt.produto} />
              </div>
              <MoneyIcon />
            </StyledDados>
            <StyledDados>
              <CardRecentContent
                title="Valor da Parcela:"
                content={`R$ ${
                  valorParcela[index].length <= 0 ? '-' : valorParcela[index]
                }`}
              />
              <CardRecentContent
                title="Vencimento Dia:"
                content={
                  diaVencimento[index].length <= 0 ? '-' : diaVencimento[index]
                }
              />
            </StyledDados>
            <StyledDados>
              <CardRecentContent
                title="Valor Total:"
                content={`R$ ${
                  valorParcela[index].length <= 0
                    ? '-'
                    : valorParcela[index] * totalParcelas[index]
                }`}
              />
              <CardRecentContent
                title="Parcelas Pagas"
                content={
                  parcelasPagas[index] <= 0
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
