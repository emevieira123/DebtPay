import React from 'react';
import { Row } from 'antd';
import styled from 'styled-components';
import 'antd/dist/antd.css';

export function InfoParcelasDrawer() {
  return (
    <InfoTable>
      <span>Nº Parcela</span>
      <span>Valor Da Parcela</span>
      <span>Dia de Vencimento</span>
      <span>Status</span>
    </InfoTable>
  );
}

const InfoTable = styled(Row)`
  width: 100%;
  padding: 2rem 0 0.5rem 0;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;

  span {
    font-size: 1rem;
    font-weight: bold;
    display: flex;
    justify-content: center;
  }
`;
