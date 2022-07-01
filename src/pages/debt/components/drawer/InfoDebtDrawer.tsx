import { Col, Row } from 'antd';
import styled from 'styled-components';
import 'antd/dist/antd.css';

interface InfoDebtDrawerProps {
  cobrador: string;
  produto: string;
  valorTotal: number;
  valorParcela: number;
  diaVencimento: number;
  parcelasPagas: number;
  totalParcelas: number;
}

export function InfoDebtDrawer({
  cobrador,
  produto,
  valorTotal,
  valorParcela,
  diaVencimento,
  parcelasPagas,
  totalParcelas,
}: InfoDebtDrawerProps) {
  return (
    <FullContainerInfoDebt>
      <Row>
        <Col span={6}>
          <TitleInfo>Cobrador:</TitleInfo>
          <ContentInfo>{cobrador}</ContentInfo>
        </Col>
        <Col span={6} push={1}>
          <TitleInfo>Produto:</TitleInfo>
          <ContentInfo>{produto}</ContentInfo>
        </Col>
      </Row>
      <Row style={{ marginTop: '1.25rem' }}>
        <Col span={6}>
          <TitleInfo>Valor Total:</TitleInfo>
          <ContentInfo>R$ {valorTotal}</ContentInfo>
        </Col>
        <Col span={6} push={1}>
          <TitleInfo>Valor da Parcela:</TitleInfo>
          <ContentInfo>R$ {valorParcela}</ContentInfo>
        </Col>
        <Col span={6} push={2}>
          <TitleInfo>Dia Venc:</TitleInfo>
          <ContentInfo>{diaVencimento}</ContentInfo>
        </Col>
        <Col push={1}>
          <TitleInfo>Parcelas Pagas:</TitleInfo>
          <ContentInfo>
            {parcelasPagas}/{totalParcelas}
          </ContentInfo>
        </Col>
      </Row>
    </FullContainerInfoDebt>
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
