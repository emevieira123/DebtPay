import React from 'react';
import { Button } from 'antd';
import styled from 'styled-components';

interface ActionButtonPurpleProps {
  htmlType?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
  children: React.ReactNode;
}

export function ActionButtonPurple({
  htmlType,
  onClick,
  children,
}: ActionButtonPurpleProps) {
  return (
    <StyledButton htmlType={htmlType} onClick={onClick}>
      {children}
    </StyledButton>
  );
}

const StyledButton = styled(Button)`
  border: 0;
  width: 15rem;
  border-radius: 3px;
  font-size: 1.25rem;
  margin-top: 2rem;
  padding: 0.6rem 0 0.6rem 0;
  background: var(--purple);
  color: var(--white);
  transition: all 0.3s;
  :hover {
    filter: brightness(0.8);
  }
`;
