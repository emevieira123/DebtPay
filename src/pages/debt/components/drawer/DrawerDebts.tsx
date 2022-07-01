import { Drawer, Row } from 'antd';
import styled from 'styled-components';
import { InfoIcon } from '../../../../assets/InfoIcon';

interface DrawerDebtsProps {
  title: string;
  width: string;
  onClose: () => void;
  children: React.ReactNode;
  visible: boolean;
}

export function DrawerDebts({
  title,
  width,
  children,
  onClose,
  visible,
}: DrawerDebtsProps) {
  return (
    <StyledDrawer
      title={
        <Row style={{ alignItems: 'center', justifyContent: 'space-between' }}>
          <Row style={{ alignItems: 'center', gap: '10px' }}>
            <InfoIcon width="30" height="30" />
            <Title>{title}</Title>
          </Row>
          <CloseBottun onClick={onClose}>X</CloseBottun>
        </Row>
      }
      placement="right"
      width={width}
      onClose={onClose}
      visible={visible}
      closable={false}
    >
      {children}
    </StyledDrawer>
  );
}

const StyledDrawer = styled(Drawer)`
  & .ant-drawer-title {
    color: var(--white);
  }

  & .ant-drawer-header {
    background: var(--grey-900);
    border: 1px solid var(--grey-700);
  }

  & .ant-drawer-body {
    background: var(--grey-900);
  }
`;

const Title = styled.span`
  font-size: 1.25rem;
`;

const CloseBottun = styled.span`
  font-size: 1.25rem;
  cursor: pointer;
  transition: all 0.3s;
  :hover {
    filter: brightness(0.8);
  }
`;
