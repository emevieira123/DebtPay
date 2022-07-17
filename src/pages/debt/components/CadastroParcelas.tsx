/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';
import { Row } from 'antd';
import styled from 'styled-components';
import useCreateParcelas from '../hooks/useCreateParcelas';
import { toast } from 'react-toastify';

interface CadastroParcelasProps {
  id: string;
  onCloseDrawer: () => void;
}

export function CadastroParcelas({
  id: id_debt,
  onCloseDrawer,
}: CadastroParcelasProps) {
  const [valor_parcela, setValorParcela] = useState(0);
  const [dia_vencimento, setDiaVencimento] = useState(0);
  const [qtde_parcelas, setQtdeParcelas] = useState(0);

  const { mutate: createParcelas } = useCreateParcelas(() => onCloseDrawer());

  async function handleSignIn(e: any) {
    e.preventDefault();
    try {
      if (valor_parcela <= 0 || dia_vencimento <= 0 || qtde_parcelas <= 0) {
        onCloseDrawer();
        toast.error(
          'Erro: Não é possível cadastrar valor menor ou igual a "0"!',
        );
      } else {
        for (let i = 0; i < qtde_parcelas; i++) {
          await createParcelas({
            valor_parcela,
            dia_vencimento,
            qtde_parcelas,
            id_debt,
          });
        }
        toast.success('Parcelas cadastradas com sucesso!!');
      }
    } catch (error) {
      toast.error('Erro: todos os campos devem ser preenchidos!');
    }
  }

  return (
    <>
      <Title>Cadastro de Parcelas</Title>

      <form onSubmit={handleSignIn}>
        <Row justify="space-around">
          <Label>
            Valor da Parcela
            <Input
              name="valor_parcela"
              id="valor_parcela"
              type="number"
              onChange={(e: any) => setValorParcela(Number(e.target.value))}
            />
          </Label>
          <Label>
            Dia de Vencimento
            <Input
              name="dia_vencimento"
              id="dia_vencimento"
              type="number"
              onChange={(e: any) => setDiaVencimento(Number(e.target.value))}
            />
          </Label>
          <Label>
            Quantidade de Parcelas
            <Input
              name="qtde_parcelas"
              id="qtde_parcelas"
              type="number"
              onChange={(e: any) => setQtdeParcelas(Number(e.target.value))}
            />
          </Label>
        </Row>
        <Row justify="center">
          <BtnCadastrar type="submit">Cadastrar</BtnCadastrar>
        </Row>
      </form>
    </>
  );
}

const Title = styled.h2`
  color: var(--green);
  text-align: center;
  margin-top: 2rem;
`;

const Label = styled.label`
  font-size: 1.1rem;
`;

const Input = styled.input`
  display: block;
  padding: 0 0.3rem 0 0.3rem;
  width: 15rem;
  height: 2.5rem;
  font-size: 1.25rem;
  background-color: var(--grey-300);
  border: 0;
  border-radius: 3px;

  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

const BtnCadastrar = styled.button`
  width: 10rem;
  height: 2.5rem;
  background: var(--purple);
  color: var(--white);
  font-size: 1.25rem;
  border: 0;
  border-radius: 5px;
  margin-top: 2rem;
  transition: all 0.3s;
  :hover {
    filter: brightness(0.8);
  }
`;
