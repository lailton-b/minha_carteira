import React from 'react';
import { Container, TopSide, Paragraph } from './styles';

interface IMessageBoxProps {
  title: string,
  emoji: string,
  alt: string,
  description: string,
  footerMessage: string
}

const MessageBox: React.FC<IMessageBoxProps> = ({ title, emoji, alt, description, footerMessage }) => {
  return (
    <Container className="primary_color">
      <TopSide>
        <h3>
          { title } 
          <img src={ emoji } alt={ alt } />
        </h3>
        <p>{ description }</p>
      </TopSide>

      <Paragraph>{ footerMessage }</Paragraph>
    </Container>
  )
}

export default MessageBox
