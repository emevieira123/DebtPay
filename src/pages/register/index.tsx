/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';
import Router from 'next/router';
import { Divider, Row } from 'antd';
import { RegistrationInput } from '../../components/RegistrationInput';
import { ActionButtonPurple } from '../../shared/ActionButtonPurple';
import useCreateNewUser from '../../hooks/useCreateNewUser';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { DebtPayLogo } from '../../assets/DebtPayLogo';
import { FullContainer } from '../../styles/loginStyles';
import { FormContainer } from '../../styles/registerStyles';
import { URLS } from '../../services/URLS';
import styled from 'styled-components';

export default function Registration() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [github_user, setGithub_user] = useState('');

  const { mutate: salvarNovoUsuario } = useCreateNewUser(() => void 0);

  function onSubmit() {
    if (!name || !email || !password) {
      salvarNovoUsuario({});
      Router.push(URLS.LOGIN);
    } else if (confirmPassword !== password) {
      toast.error('As senhas informadas não coincidem!!');
      Router.push(URLS.LOGIN);
    } else {
      salvarNovoUsuario({ name, email, password, github_user });
      Router.push(URLS.LOGIN);
    }
  }

  return (
    <FullContainer>
      <FormContainer>
        <DebtPayLogo />
        <h1>Cadastro de Usuários</h1>

        <Divider style={{ border: '1px solid #4A4A4A', width: '100%' }} />

        <RegistrationInput
          labelOne="Nome Completo"
          typeOne="text"
          nameOne="name"
          idOne="name"
          valueOne={name}
          onChangeOne={(e: any) => setName(e.target.value)}
          labelTwo="E-mail"
          typeTwo="email"
          nameTwo="email"
          idTwo="email"
          valueTwo={email}
          onChangeTwo={(e: any) => setEmail(e.target.value)}
        />
        <RegistrationInput
          labelOne="Senha"
          typeOne="password"
          nameOne="password"
          idOne="password"
          valueOne={password}
          onChangeOne={(e: any) => setPassword(e.target.value)}
          labelTwo="Confirmar Senha"
          typeTwo="password"
          nameTwo="password_confirm"
          idTwo="password_confirm"
          valueTwo={confirmPassword}
          onChangeTwo={(e: any) => setConfirmPassword(e.target.value)}
        />
        <Row style={{ width: '100%', marginTop: '2rem', gap: '2rem' }}>
          <LebalGitHub>
            Usuário do GitHub
            <input
              type="text"
              name="user_github"
              id="user_github"
              value={github_user}
              onChange={(e: any) => setGithub_user(e.target.value)}
            />
          </LebalGitHub>
        </Row>

        <ActionButtonPurple onClick={onSubmit}>Cadastrar</ActionButtonPurple>
      </FormContainer>
    </FullContainer>
  );
}

const LebalGitHub = styled.label`
  color: var(--white);
  input {
    display: block;
    width: 25%;
    height: 2.5rem;
    background-color: var(--grey-300);
    border: 0;
    border-radius: 3px;
    font-size: 1.5rem;
    color: var(--grey-900);
  }
`;
