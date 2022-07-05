/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-function */
import React, { useContext } from 'react';
import { Checkbox, Form } from 'antd';
import { DebtPayLogo } from '../../assets/DebtPayLogo';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  ButtonLogin,
  FormStyled,
  FullContainer,
  InputLogin,
  LinkCadastro,
  LoginContainer,
} from './styles';
import { AuthContext } from '../../contexts/AuthContext';
import { useForm } from 'react-hook-form';

export default function Login() {
  const { register, handleSubmit } = useForm();
  const { signIn } = useContext(AuthContext);

  async function handleSignIn(data) {
    try {
      await signIn(data);
    } catch (e) {
      toast.error('Erro: E-mail ou Senha Inválidos!');
    }
  }

  return (
    <FullContainer>
      <LoginContainer>
        <DebtPayLogo />

        <FormStyled
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
          onFinish={handleSubmit(handleSignIn)}
          onFinishFailed={() => {}}
          autoComplete="off"
        >
          <Form.Item
            label="Email"
            // name="email"
            rules={[
              {
                required: true,
                message: 'Please input your email!',
              },
            ]}
          >
            <InputLogin
              type="text"
              id="email"
              name="email"
              {...register('email')}
              style={{ marginBottom: '2.5rem' }}
            />
          </Form.Item>

          <Form.Item
            label="Password"
            // name="password"
            rules={[
              {
                required: true,
                message: 'Please input your password!',
              },
            ]}
          >
            <InputLogin
              type="password"
              id="password"
              name="password"
              {...register('password')}
            />
          </Form.Item>

          <Form.Item
            name="remember"
            valuePropName="checked"
            wrapperCol={{ offset: 8, span: 16 }}
          >
            <Checkbox> Remember me</Checkbox>
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <ButtonLogin htmlType="submit">Entrar</ButtonLogin>
          </Form.Item>
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
