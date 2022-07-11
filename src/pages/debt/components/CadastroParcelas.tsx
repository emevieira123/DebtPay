import { Row } from 'antd';
import styled from 'styled-components';

export function CadastroParcelas() {
  return (
    <>
      <Title>Cadastro de Parcelas</Title>

      <Row justify="space-around">
        <Label>
          Valor da Parcela
          <Input name="valor_parcela" id="valor_parcela" type="number" />
        </Label>
        <Label>
          Dia de Vencimento
          <Input name="dia_vencimento" id="dia_vencimento" type="number" />
        </Label>
        <Label>
          Quantidade de Parcelas
          <Input name="dia_vencimento" id="dia_vencimento" type="number" />
        </Label>
      </Row>
      <Row justify="center">
        <BtnCadastrar>Cadastrar</BtnCadastrar>
      </Row>
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
