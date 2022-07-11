import { Col, Row } from 'antd';
import styled from 'styled-components';
import 'antd/dist/antd.css';
import { InfoParcelasDrawer } from './InfoParcelasDrawer';
import useGetDebtAndParcelas from '../../hooks/useGetDebtAndParcelas';
import { CardInfoParcelasDrawer } from './CardInfoParcelasDrawer';
import { CadastroParcelas } from '../CadastroParcelas';

const onChange = (checked) => {
  console.log(`switch to ${checked}`);
};

interface InfoDebtDrawerProps {
  id: string;
}

export function InfoDebtDrawer({ id: debtId }: InfoDebtDrawerProps) {
  const { data: debt } = useGetDebtAndParcelas(debtId);

  const valorParcela = debt?.parcelas
    ?.slice(0, 1)
    .map((parce) => parce.valor_parcela);

  const totalParcelas = debt?.parcelas?.map(
    (parce) => parce.valor_parcela,
  ).length;

  const parcelasPagas = debt?.parcelas?.filter(
    (parce) => parce.status === true,
  ).length;

  const diaVencimento = debt?.parcelas
    ?.slice(0, 1)
    .map((parce) => parce.dia_vencimento);

  return (
    <>
      <FullContainerInfoDebt>
        <Row>
          <Col span={6}>
            <TitleInfo>Cobrador:</TitleInfo>
            <ContentInfo>{debt?.name_debt}</ContentInfo>
          </Col>
          <Col span={6} push={1}>
            <TitleInfo>Produto:</TitleInfo>
            <ContentInfo>{debt?.produto}</ContentInfo>
          </Col>
        </Row>
        <Row style={{ marginTop: '1.25rem' }}>
          <Col span={6}>
            <TitleInfo>Valor Total:</TitleInfo>
            <ContentInfo>
              R$ {valorParcela <= 0 ? '-' : valorParcela * totalParcelas}
            </ContentInfo>
          </Col>
          <Col span={6} push={1}>
            <TitleInfo>Valor da Parcela:</TitleInfo>
            <ContentInfo>
              R$ {valorParcela <= 0 ? '-' : valorParcela}
            </ContentInfo>
          </Col>
          <Col span={6} push={2}>
            <TitleInfo>Dia Venc:</TitleInfo>
            <ContentInfo>
              {diaVencimento <= 0 ? '-' : diaVencimento}
            </ContentInfo>
          </Col>
          <Col push={1}>
            <TitleInfo>Parcelas Pagas:</TitleInfo>
            <ContentInfo>
              {totalParcelas <= 0 ? '-' : `${parcelasPagas}/${totalParcelas}`}
            </ContentInfo>
          </Col>
        </Row>
      </FullContainerInfoDebt>

      <InfoParcelasDrawer />

      {debt?.parcelas <= 0 ? (
        <CadastroParcelas />
      ) : (
        debt?.parcelas?.map((item, index) => {
          return (
            <CardInfoParcelasDrawer
              key={index}
              numeroParcela={index + 1}
              valorParcela={item.valor_parcela}
              diaVencimento={item.dia_vencimento}
              status={item.status}
              onClick={onChange}
            />
          );
        })
      )}
    </>
  );
}

const FullContainerInfoDebt = styled.div`
  width: 100%;
  border-bottom: 1px solid var(--grey-500);
  padding-bottom: 1.5rem;
`;

const TitleInfo = styled.span`
  font-weight: bold;
  font-size: 1rem;
  margin-right: 0.5rem;
`;

const ContentInfo = styled.span`
  font-size: 1rem;
`;
