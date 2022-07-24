/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-function */
import React, { useContext, useState } from 'react';
import { DebtPayLogo } from '../../assets/DebtPayLogo';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  ButtonLogin,
  CheckedStyle,
  FormStyled,
  FullContainer,
  InputLogin,
  LinkCadastro,
  LoginContainer,
} from '../../styles/loginStyles';
import { AuthContext } from '../../contexts/AuthContext';
import { useForm } from 'react-hook-form';
import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';

export default function Login() {
  const { register, handleSubmit } = useForm();
  const { signIn } = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(false);

  async function handleSignIn(data) {
    setIsLoading(true);
    try {
      await signIn(data);
    } catch (e) {
      setIsLoading(false);
      toast.error('Erro: E-mail ou Senha Inválidos!');
    }
  }

  return (
    <FullContainer>
      <LoginContainer>
        <DebtPayLogo />

        <FormStyled
          name="basic"
          onSubmit={handleSubmit(handleSignIn)}
          autoComplete="off"
        >
          <label>
            Email
            <InputLogin
              type="text"
              id="email"
              name="email"
              {...register('email')}
              style={{ marginBottom: '2.5rem' }}
            />
          </label>

          <label>
            Senha
            <InputLogin
              type="password"
              id="password"
              name="password"
              {...register('password')}
            />
          </label>

          <CheckedStyle> Lembrar-se</CheckedStyle>

          <ButtonLogin type="submit">
            {isLoading ? <Spin indicator={spinLoader} /> : 'Entrar'}
          </ButtonLogin>
        </FormStyled>

        <LinkCadastro href="/register">Cadastre-se</LinkCadastro>
      </LoginContainer>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </FullContainer>
  );
}

const spinLoader = (
  <LoadingOutlined
    style={{
      fontSize: 24,
    }}
    spin
  />
);
