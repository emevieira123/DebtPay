import { Row } from 'antd';
import React from 'react';
import styled from 'styled-components';
import { MoneyIcon } from '../../../assets/MoneyIcon';

interface CardDebtPreviousProps {
  color: string;
}

export function CardDebtPrevious({ color }: CardDebtPreviousProps) {
  return (
    <FullContainer color={color}>
      <MoneyIcon width="27" height="27" />
      <Row>
        <Title>Nome:</Title>
        <Content>Provi Financiamento</Content>
      </Row>
      <Row>
        <Title>Produto:</Title>
        <Content>Curso Rocketseat</Content>
      </Row>
      <Row>
        <Title>Valor da Parcela:</Title>
        <Content>R$ 83,33</Content>
      </Row>
      <Row>
        <Title>Venc:</Title>
        <Content>15/07/2022</Content>
      </Row>
      <Row>
        <Title>Valor Total:</Title>
        <Content>R$ 1080,00</Content>
      </Row>
      <Row>
        <Title>Parcelas Pagas:</Title>
        <Content>1/12</Content>
      </Row>
    </FullContainer>
  );
}

const FullContainer = styled(Row)`
  width: 100%;
  background: var(--grey-500);
  border-left: 6px solid ${(props) => `${props.color}`};
  border-radius: 3px;
  justify-content: space-between;
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
