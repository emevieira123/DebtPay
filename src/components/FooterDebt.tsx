import React from 'react';
import { Row } from 'antd';
import styled from 'styled-components';

export function FooterDebt() {
  return (
    <FooterContainer>
      <StatusContainer style={{ alignItems: 'center' }}>
        <CircleStatus color="#8B21DF" />
        <span>Em Andamento</span>
        <CircleStatus color="#22BF1F" />
        <span>Quitado</span>
      </StatusContainer>
    </FooterContainer>
  );
}

const FooterContainer = styled(Row)`
  width: 100%;
  padding-bottom: 10px;
  justify-content: space-between;
`;

const StatusContainer = styled(Row)`
  gap: 10px;
`;

const CircleStatus = styled(Row)`
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  background: ${(props) => `${props.color}`};
`;
