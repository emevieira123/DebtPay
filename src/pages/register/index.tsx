/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';
import Router from 'next/router';
import { Divider } from 'antd';
import { RegistrationInput } from '../../components/RegistrationInput';
import { ActionButtonPurple } from '../../shared/ActionButtonPurple';
import useCreateNewUser from './hooks/useCreateNewUser';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { DebtPayLogo } from '../../assets/DebtPayLogo';
import { FullContainer } from '../../components/styles/loginStyles';
import { FormContainer } from '../../components/styles/registerStyles';
import { URLS } from '../../services/URLS';

export default function Registration() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const { mutate: salvarNovoUsuario } = useCreateNewUser(() => void 0);

  function onSubmit() {
    if (confirmPassword === password) {
      console.log({ name, email, password });
      salvarNovoUsuario({ name, email, password });
      Router.push(URLS.LOGIN);
    } else {
      toast.error('As senhas informadas não coincidem!!');
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
          typeTwo="text"
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

        <ActionButtonPurple onClick={onSubmit}>Cadastrar</ActionButtonPurple>
      </FormContainer>
    </FullContainer>
  );
}
