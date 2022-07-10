import styled from 'styled-components';
import { Button, Form, Input, Row } from 'antd';

export const FullContainer = styled(Row)`
  width: 100%;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LoginContainer = styled(Row)`
  width: 40rem;
  height: 40rem;
  border-radius: 20px;
  background-color: var(--grey-700);

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  gap: 2.5rem;
`;

export const FormStyled = styled(Form)`
  width: 60%;
`;

export const InputLogin = styled.input`
  width: 100%;
  height: 2.5rem;
  background-color: var(--grey-300);
  border: 0;
  border-radius: 3px;
  font-size: 1.5rem;
  color: var(--grey-900);
  display: block;
`;

export const ButtonLogin = styled(Button)`
  width: 100%;
  height: 2.5rem;
  margin-top: 2.5rem;
  font-size: 1.5rem;
  font-weight: bold;
  background-color: var(--purple);
  color: var(--white);
  border: 0;
  border-radius: 3px;
  transition: all 0.3s;
  :hover {
    filter: brightness(0.8);
  }
`;

export const LinkCadastro = styled.a`
  color: var(--purple);
  font-size: 1.2rem;
`;
