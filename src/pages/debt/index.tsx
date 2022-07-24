import { GetServerSideProps } from 'next';
import { parseCookies } from 'nookies';
import { useState } from 'react';
import { URLS } from '../../services/URLS';
import { HeaderPage } from '../../shared/HeaderPage';
import { CardDebtPrevious } from '../../components/CardDebtPrevious';
import { CardDebtRecent } from '../../components/CardDebtRecent';
import { DrawerDebts } from '../../components/drawer/DrawerDebts';
import { InfoDebtDrawer } from '../../components/drawer/InfoDebtDrawer';
import { FooterDebt } from '../../components/FooterDebt';
import { ModalRegisterDebt } from '../../components/modal/ModalRegisterDebt';
import {
  AddButton,
  ContainerCardDebtRecent,
  Container,
} from '../../styles/debtStyles';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { LoadingPage } from '../../components/LoadingPage';

export default function Debt() {
  const [drawerVisible, setDrawerVisible] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [debtId, setDebtId] = useState('');
  const [isLoading, setIsLoading] = useState(false);

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
    <LoadingPage loading={isLoading}>
      <HeaderPage />
      <Container>
        <h1>Dividas Recentes</h1>
        <AddButton onClick={handleIsOpenModalRegisterDebt}>+</AddButton>

        <ContainerCardDebtRecent>
          <CardDebtRecent
            setDebtId={(id) => {
              setDebtId(id);
              setDrawerVisible(true);
            }}
            setIsLoading={setIsLoading}
          />
        </ContainerCardDebtRecent>
      </Container>

      <Container>
        <h1>Dividas Anteriores</h1>
        <CardDebtPrevious
          setDebtId={(id) => {
            setDebtId(id);
            setDrawerVisible(true);
          }}
        />
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
        <InfoDebtDrawer id={debtId} onCloseDrawer={handleCloseDrawerDebt} />
      </DrawerDebts>

      <ModalRegisterDebt
        title="Cadastrar Dívida"
        visible={modalVisible}
        close={handleCloseModalRegisterDebt}
      />

      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </LoadingPage>
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
