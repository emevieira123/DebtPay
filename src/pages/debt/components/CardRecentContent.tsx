import { Row } from 'antd';
import styled from 'styled-components';

interface CardContentProps {
  title: string;
  content: string | number;
}

export function CardRecentContent({ title, content }: CardContentProps) {
  return (
    <StyledContent>
      <Title>{title}</Title>
      <Content>{content}</Content>
    </StyledContent>
  );
}

const StyledContent = styled(Row)`
  display: flex;
  align-items: center;
`;

const Title = styled.span`
  font-weight: bold;
  font-size: 1rem;
  margin-right: 0.5rem;
`;

const Content = styled.span`
  font-size: 1rem;
`;
