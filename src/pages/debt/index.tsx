import { HeaderPage } from '../../shared/HeaderPage';
import { CardDebtPrevious } from './components/CardDebtPrevious';
import { CardDebtRecent } from './components/CardDebtRecent';
import { FooterDebt } from './components/FooterDebt';
import { AddButton, ContainerCardDebtRecent, Container } from './styles';

export default function Debt() {
  return (
    <>
      <HeaderPage />
      <Container>
        <h1>Dividas Recentes</h1>
        <AddButton>+</AddButton>

        <ContainerCardDebtRecent>
          <CardDebtRecent />
          <CardDebtRecent />
          <CardDebtRecent />
        </ContainerCardDebtRecent>
      </Container>

      <Container>
        <h1>Dividas Anteriores</h1>
        <CardDebtPrevious color="#8B21DF" />
        <CardDebtPrevious color="#22BF1F" />
        <CardDebtPrevious color="#22BF1F" />
        <CardDebtPrevious color="#8B21DF" />
        <CardDebtPrevious color="#22BF1F" />
        <CardDebtPrevious color="#8B21DF" />
        <CardDebtPrevious color="#22BF1F" />
        <CardDebtPrevious color="#22BF1F" />
        <CardDebtPrevious color="#8B21DF" />
        <CardDebtPrevious color="#22BF1F" />
      </Container>
      <Container>
        <FooterDebt />
      </Container>
    </>
  );
}
