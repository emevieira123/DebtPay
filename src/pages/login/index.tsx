/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react';
import { Checkbox, Form } from 'antd';
import { DebtPayLogo } from '../../assets/DebtPayLogo';
import {
  ButtonLogin,
  FormStyled,
  FullContainer,
  InputLogin,
  LinkCadastro,
  LoginContainer,
} from './styles';

export default function Login() {
  return (
    <FullContainer>
      <LoginContainer>
        <DebtPayLogo />

        <FormStyled
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
          onFinish={() => {}}
          onFinishFailed={() => {}}
          autoComplete="off"
        >
          <Form.Item
            label="Email"
            name="email"
            rules={[
              {
                required: true,
                message: 'Please input your email!',
              },
            ]}
          >
            <InputLogin style={{ marginBottom: '2.5rem' }} />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: 'Please input your password!',
              },
            ]}
          >
            <InputLogin type="password" />
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
    </FullContainer>
  );
}
