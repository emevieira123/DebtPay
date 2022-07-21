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
      <Row style={{ gap: 5 }}>
        <Button>1</Button>
        <Button>2</Button>
        <Button>3</Button>
        ...
        <Button>10</Button>
      </Row>
    </FooterContainer>
  );
}
// '#8B21DF'  '#22BF1F'
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

const Button = styled.button`
  width: 22px;
  height: 22px;
  background: var(--grey-500);
  border: 0;
  border-radius: 3px;
  transition: all 0.3s;
  :hover {
    background: var(--grey-700);
  }
`;
