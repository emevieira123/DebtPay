import { Col, Row } from 'antd';
import styled from 'styled-components';
import 'antd/dist/antd.css';
import { InfoParcelasDrawer } from './InfoParcelasDrawer';
import { CardInfoParcelasDrawer } from './CardInfoParcelasDrawer';
import { CadastroParcelas } from '../CadastroParcelas';
import useGetDebtAndParcelas from '../../hooks/useGetDebtAndParcelas';
import { LoadingPage } from '../LoadingPage';

interface InfoDebtDrawerProps {
  id: string;
  onCloseDrawer: () => void;
}

export function MoneyFormat(value) {
  return Number(value).toFixed(2).replace('.', ',');
}

export function InfoDebtDrawer({
  id: debtId,
  onCloseDrawer,
}: InfoDebtDrawerProps) {
  const { data: debt, isLoading } = useGetDebtAndParcelas(debtId);

  console.log(debtId);
  console.log('data', debt);

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

  const Total = valorParcela * totalParcelas;

  if (isLoading) {
    return (
      <Row
        justify="center"
        align="middle"
        style={{ width: '100%', minHeight: '100%' }}
      >
        <LoadingPage loading={isLoading} />
      </Row>
    );
  }

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
              R$ {valorParcela <= 0 ? '-' : MoneyFormat(Total)}
            </ContentInfo>
          </Col>
          <Col span={6} push={1}>
            <TitleInfo>Valor da Parcela:</TitleInfo>
            <ContentInfo>
              R$ {valorParcela <= 0 ? '-' : MoneyFormat(valorParcela)}
            </ContentInfo>
          </Col>
          <Col span={6} push={2}>
            <TitleInfo>Dia Venc:</TitleInfo>
            <ContentInfo>
              {diaVencimento <= 0
                ? '-'
                : String(diaVencimento).padStart(2, '0')}
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
        <CadastroParcelas id={debtId} onCloseDrawer={onCloseDrawer} />
      ) : (
        debt?.parcelas?.map((item, index) => {
          return (
            <CardInfoParcelasDrawer
              key={index}
              numeroParcela={index + 1}
              valorParcela={MoneyFormat(item.valor_parcela)}
              diaVencimento={String(item.dia_vencimento).padStart(2, '0')}
              status={item.status}
              parcelaId={item.id}
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
