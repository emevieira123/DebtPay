import { Input, Row } from 'antd';
import styled from 'styled-components';

export const FormContainer = styled(Row)`
  width: 80%;
  height: auto;
  background-color: var(--grey-700);
  padding: 4% 10% 4% 10%;

  display: flex;
  align-items: center;
  flex-direction: column;

  h1 {
    margin: 2.5rem 0 1.5rem 0;
    text-transform: uppercase;
    font-size: 1.5rem;
  }
`;

export const ContainerInput = styled(Row)`
  width: 100%;
  margin-top: 2rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
`;

export const StyleInput = styled(Input)`
  /* display: block; */
  width: 100%;
  height: 2.5rem;
  background-color: var(--grey-300);
  border: 0;
  border-radius: 3px;
  font-size: 1.5rem;
  color: var(--grey-900);
`;
