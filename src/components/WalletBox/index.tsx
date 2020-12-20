import React from 'react';

import CountUp from 'react-countup';

import Dolar from '../../assets/dolar.svg';
import ArrowUp from '../../assets/arrow-up.svg';
import ArrowDown from '../../assets/arrow-down.svg';

import { Container, TopSide, Image } from './styles';

interface IWalletCardProps {
  title: string;
  color: string;
  amount: number;
  footerMessage: string;
  img: string;
}

const WalletCard: React.FC<IWalletCardProps> = ({ title, color, amount, footerMessage, img }) => {
  const src = React.useMemo(() => {
    if (img === 'dolar') return Dolar;
    else if (img === 'arrowUp') return ArrowUp;
    else if (img === 'arrowDown') return ArrowDown;
    else return '';
  }, [img]); 

  return (
    <Container color={color} className="secondary_color">
      <TopSide>
        <h3>{ title }</h3>
        <CountUp 
          end={amount} 
          prefix="R$ " 
          decimal=","
          decimals={2}
        />
      </TopSide>

      <p>{ footerMessage }</p>

      <Image src={ src } alt={ title }/>
    </Container>
  )
}

export default WalletCard;
