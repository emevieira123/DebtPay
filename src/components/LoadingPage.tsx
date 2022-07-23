import { Spin } from 'antd';
import { ReactNode } from 'react';
import styled from 'styled-components';
import { LoadingOutlined } from '@ant-design/icons';

type LoadingProps = {
  children: ReactNode;
  loading: boolean;
};

export function LoadingPage({ children, loading }: LoadingProps) {
  return (
    <LoadingContainer
      spinning={loading}
      indicator={<LoadingOutlined style={{ fontSize: 50 }} spin />}
    >
      {children}
    </LoadingContainer>
  );
}

const LoadingContainer = styled(Spin)`
  align-items: top;
  justify-content: center;
`;
