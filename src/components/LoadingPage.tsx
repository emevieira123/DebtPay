import { Spin } from 'antd';
import styled from 'styled-components';
import { LoadingOutlined } from '@ant-design/icons';

type LoadingProps = {
  loading: boolean;
};

export function LoadingPage({ loading }: LoadingProps) {
  return (
    <LoadingContainer
      spinning={loading}
      indicator={<LoadingOutlined style={{ fontSize: 50 }} spin />}
    />
  );
}

const LoadingContainer = styled(Spin)`
  align-items: top;
  justify-content: center;
`;
