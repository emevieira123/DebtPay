import React from 'react';
import { CardContainer } from '../styles';
import { MoneyIcon } from '../../../assets/MoneyIcon';
import { StyledDados } from '../styles';
import { CardRecentContent } from './CardRecentContent';

export function CardDebtRecent() {
  return (
    <CardContainer>
      <StyledDados>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
          <CardRecentContent title="Nome:" content="Provi Financiamento" />
          <CardRecentContent title="Produto:" content="Curso Rocketseat" />
        </div>
        <MoneyIcon />
      </StyledDados>
      <StyledDados>
        <CardRecentContent title="Valor da Parcela:" content="R$ 83,33" />
        <CardRecentContent title="Venc:" content="15/07/2022" />
      </StyledDados>
      <StyledDados>
        <CardRecentContent title="Valor Total:" content="R$ 1080,00" />
        <CardRecentContent title="Parcelas Pagas" content="1/12" />
      </StyledDados>
    </CardContainer>
  );
}
