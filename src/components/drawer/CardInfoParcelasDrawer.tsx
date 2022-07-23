/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { Row, Switch } from 'antd';
import styled from 'styled-components';
import useUpdateStatusParcela from '../../hooks/useUpdateStatusParcela';

interface CardInfoParcelasProps {
  numeroParcela: number;
  valorParcela: number;
  diaVencimento: number;
  status: boolean;
  parcelaId: string;
}

export function CardInfoParcelasDrawer({
  numeroParcela,
  valorParcela,
  diaVencimento,
  status,
  parcelaId,
}: CardInfoParcelasProps) {
  const { mutate: updateParcela } = useUpdateStatusParcela(() => void 0);

  const onChange = (status) => {
    console.log(`switch to ${status}`);
    updateParcela({ parcelaId, status });
  };

  return (
    <CardContainer>
      <span>{numeroParcela}</span>
      <span>R$ {valorParcela}</span>
      <span>{diaVencimento}</span>
      <span>
        <Switch
          defaultChecked={status}
          onChange={onChange}
          style={{ background: `${!status ? '#8B21DF' : '#22BF1F'}` }}
        />
      </span>
    </CardContainer>
  );
}

const CardContainer = styled(Row)`
  width: 100%;
  height: 3rem;
  border-radius: 3px;
  background: var(--grey-500);
  margin-top: 0.7rem;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  span {
    font-size: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
