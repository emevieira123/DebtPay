import { Divider } from 'antd';
import { DebtPayLogo } from '../../assets/DebtPayLogo';
import { FullContainer } from '../login/styles';
import { FormContainer } from './styles';

import { RegistrationInput } from './components/RegistrationInput';
import { ActionButtonPurple } from '../../shared/ActionButtonPurple';

export default function Registration() {
  return (
    <FullContainer>
      <FormContainer>
        <DebtPayLogo />
        <h1>Cadastro de Usuários</h1>

        <Divider style={{ border: '1px solid #4A4A4A', width: '100%' }} />

        <RegistrationInput labelOne="Nome Completo" labelTwo="E-mail" />
        <RegistrationInput labelOne="Senha" labelTwo="Confirmar Senha " />

        <ActionButtonPurple>Cadastrar</ActionButtonPurple>
      </FormContainer>
    </FullContainer>
  );
}
