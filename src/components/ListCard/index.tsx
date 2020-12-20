import React from 'react';
import { 
  Container,
  Description,
  Title,
  Date,
  Amount
} from './styles';

interface IListCardProps {
  name: string;
  labelColor: string;
  formattedDate: string;
  formattedAmount: string;
}

const ListCard: React.FC<IListCardProps> = ({ name, labelColor, formattedDate, formattedAmount }) => {
  return (
    <Container className="primary_color" labelColor={labelColor}>
      <Description>
        <Title>{ name }</Title>
        <Date>{ formattedDate }</Date>
      </Description>

      <Amount>{ formattedAmount }</Amount>
    </Container>
  )
}

export default ListCard;
