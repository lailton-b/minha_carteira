import React from 'react';
import { 
  Container,
  Title,
  SelectWrapper
} from './styles';

interface IContentHeaderProps {
  title: string;
  lineColor: string;
}

const ContentHeader: React.FC<IContentHeaderProps> = ({ title, lineColor, children }) => {
  return (
    <Container>
      <Title className="primary_color" lineColor={ lineColor }>
        { title }
      </Title>

      <SelectWrapper>
        { children }
      </SelectWrapper>
    </Container>
  )
}

export default ContentHeader
