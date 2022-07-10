import { GetServerSideProps } from 'next';
import { parseCookies } from 'nookies';
import { useState } from 'react';
import { URLS } from '../../services/URLS';
import { HeaderPage } from '../../shared/HeaderPage';
import { CardDebtPrevious } from './components/CardDebtPrevious';
import { CardDebtRecent } from './components/CardDebtRecent';
import { CardInfoParcelasDrawer } from './components/drawer/CardInfoParcelasDrawer';
import { DrawerDebts } from './components/drawer/DrawerDebts';
import { InfoDebtDrawer } from './components/drawer/InfoDebtDrawer';
import { InfoParcelasDrawer } from './components/drawer/InfoParcelasDrawer';
import { FooterDebt } from './components/FooterDebt';
import { ModalRegisterDebt } from './components/modal/ModalRegisterDebt';
import { AddButton, ContainerCardDebtRecent, Container } from './styles';
import { DebtMock } from './__mocks__/Debt.mock';

const onChange = (checked) => {
  console.log(`switch to ${checked}`);
};

export default function Debt() {
  const [drawerVisible, setDrawerVisible] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  function handleCloseDrawerDebt() {
    setDrawerVisible(false);
  }

  function handleIsOpenModalRegisterDebt() {
    setModalVisible(true);
  }

  function handleCloseModalRegisterDebt() {
    setModalVisible(false);
  }

  return (
    <>
      <HeaderPage />
      <Container>
        <h1>Dividas Recentes</h1>
        <AddButton onClick={handleIsOpenModalRegisterDebt}>+</AddButton>

        <ContainerCardDebtRecent>
          <CardDebtRecent onClick={() => setDrawerVisible(true)} />
        </ContainerCardDebtRecent>
      </Container>

      <Container>
        <h1>Dividas Anteriores</h1>
        <CardDebtPrevious onClick={() => setDrawerVisible(true)} />
      </Container>
      <Container>
        <FooterDebt />
      </Container>

      <DrawerDebts
        visible={drawerVisible}
        onClose={handleCloseDrawerDebt}
        title="Informações da divida"
        width="60vw"
      >
        <InfoDebtDrawer
          cobrador={DebtMock.debtName}
          produto={DebtMock.product}
          valorTotal={DebtMock.valorTotal}
          valorParcela={DebtMock.valorParcela}
          diaVencimento={DebtMock.diaVencimento}
          parcelasPagas={DebtMock.parcelasPagas}
          totalParcelas={DebtMock.parcelasTotais}
        />
        <InfoParcelasDrawer />
        {DebtMock.parcelas.map((item) => {
          return (
            <CardInfoParcelasDrawer
              key={item.numberParcela}
              numeroParcela={item.numberParcela}
              valorParcela={item.valorParcela}
              diaVencimento={item.diaVencimento}
              status={item.status}
              onClick={onChange}
            />
          );
        })}
      </DrawerDebts>

      <ModalRegisterDebt
        title="Register Debt"
        visible={modalVisible}
        onSave={() => {
          false;
        }}
        close={handleCloseModalRegisterDebt}
      />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { ['debtpay.token']: token } = parseCookies(ctx);

  if (!token) {
    return {
      redirect: {
        destination: URLS.LOGIN,
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};
