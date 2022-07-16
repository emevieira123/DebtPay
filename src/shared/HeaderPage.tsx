import { Avatar, Button, Row } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import React, { useContext } from 'react';
import styled from 'styled-components';
import { DebtPayLogo } from '../assets/DebtPayLogo';
import { LogoutIcon } from '../assets/LogoutIcon';
import { AuthContext } from '../contexts/AuthContext';
import { destroyCookie } from 'nookies';
import { URLS } from '../services/URLS';
import Router from 'next/router';

export function HeaderPage() {
  const { user } = useContext(AuthContext);

  const Logout = () => {
    destroyCookie({}, 'debtpay.token');
    destroyCookie({}, 'idUser');
    window.location.reload();

    setTimeout(() => {
      Router.push(URLS.LOGIN);
    }, 1000);
  };

  return (
    <Container>
      <ContainerUser>
        <Avatar size="large" icon={<UserOutlined />} />
        <UserName>{user?.name}</UserName>
      </ContainerUser>
      <ContainerLogo>
        <DebtPayLogo width="200" height="60" />
      </ContainerLogo>
      <ContainerLogout>
        <IconButton icon={<LogoutIcon />} onClick={Logout} />
      </ContainerLogout>
    </Container>
  );
}

const Container = styled(Row)`
  width: 100%;
  height: 5rem;
  border-bottom: 1px solid var(--grey-700);
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 0 3rem 0 3rem;
`;

const ContainerUser = styled(Row)`
  display: flex;
  align-items: center;
`;

const UserName = styled.span`
  font-size: 1.5rem;
  margin-left: 0.5rem;
`;

const ContainerLogo = styled(Row)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
`;
const ContainerLogout = styled(Row)`
  display: flex;
  align-items: center;
  justify-content: end;
`;

const IconButton = styled(Button)`
  background: transparent;
  border: 0;
  color: #4a4a4a;
  :focus,
  :hover {
    color: #fff;
    background: transparent;
  }
`;
