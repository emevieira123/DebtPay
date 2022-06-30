import { Button, Row } from 'antd';
import styled from 'styled-components';

export const Container = styled(Row)`
  width: 100%;
  padding: 1rem 2rem 0 2rem;

  justify-content: center;

  h1 {
    color: var(--white);
    text-transform: uppercase;
  }
`;

export const AddButton = styled(Button)`
  width: 2.5rem;
  height: 2.5rem;
  border: 0;
  border-radius: 50%;
  background: var(--green);
  color: var(--grey-900);
  font-size: 2rem;
  position: fixed;
  right: 2rem;

  display: flex;
  justify-content: center;
  align-items: center;
  :focus,
  :hover {
    border: 2px solid var(--green);
    color: var(--green);
    background: transparent;
  }
`;

export const ContainerCardDebtRecent = styled(Row)`
  width: 100%;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 3rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid var(--grey-500);
`;

export const CardContainer = styled(Row)`
  border-left: 6px solid var(--purple);
  border-radius: 5px;
  background: var(--grey-500);
  padding: 15px;
  gap: 5px;
  cursor: pointer;
  transition: all 0.3s;

  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  :hover {
    background: var(--grey-700);
  }
`;

export const StyledDados = styled(Row)`
  width: 100%;
  justify-content: space-between;
`;
