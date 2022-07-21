import React from 'react';
import { Row } from 'antd';
import styled from 'styled-components';
import { MoneyIcon } from '../assets/MoneyIcon';
import useGetDebts from '../pages/debt/hooks/useGetDebts';

interface CardDebtPreviousProps {
  setDebtId: (id: string) => void;
}

export function CardDebtPrevious({ setDebtId }: CardDebtPreviousProps) {
  const { data: debts } = useGetDebts();

  const valorParcela = debts
    ?.slice(3)
    .map((item) =>
      item.parcelas?.slice(0, 1).map((parce) => parce.valor_parcela),
    );

  const totalParcelas = debts
    ?.slice(3)
    .map((item) => item.parcelas?.map((parce) => parce.valor_parcela).length);

  const parcelasPagas = debts
    ?.slice(3)
    .map(
      (item) => item.parcelas?.filter((parce) => parce.status === true).length,
    );

  const diaVencimento = debts
    ?.slice(3)
    .map((item) =>
      item.parcelas?.slice(0, 1).map((parce) => parce.dia_vencimento),
    );

  return (
    <>
      {debts?.slice(3).map((debt, index) => {
        return (
          <FullContainer
            onClick={() => setDebtId(debt.id)}
            color={
              !totalParcelas[index]
                ? '#4A4A4A'
                : parcelasPagas[index] === totalParcelas[index]
                ? '#22BF1F'
                : '#8B21DF'
            }
            key={debt.id}
          >
            <MoneyIcon width="27" height="27" />
            <Row>
              <Title>Nome:</Title>
              <Content>{debt.name_debt}</Content>
            </Row>
            <Row>
              <Title>Produto:</Title>
              <Content>{debt.produto}</Content>
            </Row>
            <Row>
              <Title>Valor da Parcela:</Title>
              <Content>
                R$ {valorParcela[index].length <= 0 ? '-' : valorParcela[index]}
              </Content>
            </Row>
            <Row>
              <Title>Venc:</Title>
              <Content>
                {diaVencimento[index].length <= 0 ? '-' : diaVencimento[index]}
              </Content>
            </Row>
            <Row>
              <Title>Valor Total:</Title>
              <Content>
                R${' '}
                {valorParcela[index].length <= 0
                  ? '-'
                  : valorParcela[index] * totalParcelas[index]}
              </Content>
            </Row>
            <Row>
              <Title>Parcelas Pagas:</Title>
              <Content>
                {totalParcelas[index] <= 0
                  ? '-'
                  : `${parcelasPagas[index]}/${totalParcelas[index]}`}
              </Content>
            </Row>
          </FullContainer>
        );
      })}
    </>
  );
}

const FullContainer = styled(Row)`
  width: 100%;
  background: var(--grey-500);
  border-left: 6px solid ${(props) => `${props.color}`};
  border-radius: 3px;
  display: grid;
  grid-template-columns: 0.2fr 1fr 1fr 1fr 0.5fr 1fr 1fr;
  padding: 1rem;
  margin-top: 0.5rem;
  cursor: pointer;
  transition: all 0.3s;
  :hover {
    background: var(--grey-700);
  }
`;

const Title = styled.span`
  font-weight: bold;
  font-size: 1rem;
  margin-right: 0.5rem;
`;

const Content = styled.span`
  font-size: 1rem;
`;
