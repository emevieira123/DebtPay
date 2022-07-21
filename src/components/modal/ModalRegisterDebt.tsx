import { Modal, Row } from 'antd';
import { useState } from 'react';
import styled from 'styled-components';
import { FormAddIcon } from '../../assets/FormAddIcon';
import useCreateDebt from '../../hooks/useCreateDebt';

interface ModalRegisterDebtProps {
  title: string;
  close: () => void;
  visible: boolean;
}

export function ModalRegisterDebt({
  title,
  visible,
  close,
}: ModalRegisterDebtProps) {
  const [name_debt, setName_debt] = useState('');
  const [produto, setProduto] = useState('');

  const { mutate: salvarDebt } = useCreateDebt(() => close());

  function onSubmit() {
    console.log({ name_debt, produto });
    salvarDebt({ name_debt, produto });
    setName_debt('');
    setProduto('');
  }

  return (
    <>
      <ModalStyled
        title={
          <Row justify="space-between">
            <Label style={{ display: 'flex', alignItems: 'center' }}>
              <FormAddIcon style={{ marginRight: '10px' }} /> {title}
            </Label>
            <CloseButton onClick={close}>X</CloseButton>
          </Row>
        }
        footer={
          <Row justify="space-between" style={{ marginBottom: '20px' }}>
            <CancelButton onClick={close}>Cancelar</CancelButton>
            <SaveButton onClick={onSubmit}>Salvar</SaveButton>
          </Row>
        }
        closable={false}
        visible={visible}
        onCancel={close}
      >
        <Label>
          Cobrador
          <Input
            type="text"
            name="cobrador"
            onChange={(e) => setName_debt(e.target.value)}
            value={name_debt}
          />
        </Label>
        <Label>
          Produto
          <Input
            type="text"
            name="produto"
            onChange={(e) => setProduto(e.target.value)}
            value={produto}
          />
        </Label>
      </ModalStyled>
    </>
  );
}

const ModalStyled = styled(Modal)`
  .ant-modal-content {
    background: transparent !important;
  }
  .ant-modal-footer {
    border-radius: 0 0 0.5rem 0.5rem;
  }
  .ant-modal-header {
    border-radius: 0.5rem 0.5rem 0 0;
  }
  .ant-modal-header,
  .ant-modal-body,
  .ant-modal-footer {
    background: var(--grey-900);
    border: 0;
  }

  .ant-modal-title {
    color: var(--white);
  }
`;

const CloseButton = styled.label`
  color: var(--white);
  font-size: 1.25rem;
  cursor: pointer;
  :hover {
    filter: brightness(0.8);
  }
`;

const Label = styled.label`
  color: var(--white);
  font-size: 1.25rem;
`;

const Input = styled.input`
  width: 100%;
  border: 0;
  background: var(--grey-500);
  display: block;
  margin-bottom: 1rem;
  margin-right: 10rem;
  padding: 0 0.3rem 0 0.3rem;
`;

const CancelButton = styled.button`
  width: 10rem;
  height: 2rem;
  border: 1px solid var(--grey-300);
  border-radius: 3px;
  font-size: 1.25rem;
  margin-left: 10rem;
  background: transparent;
  color: var(--grey-300);
  :hover {
    filter: brightness(0.8);
  }
`;

const SaveButton = styled.button`
  width: 10rem;
  height: 2rem;
  border: 0;
  border-radius: 3px;
  font-size: 1.25rem;
  background: var(--purple);
  color: var(--white);
  :hover {
    filter: brightness(0.8);
  }
`;
