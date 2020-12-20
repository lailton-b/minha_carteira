import React from 'react';
import {
  LineChart, 
  Line, 
  XAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer
} from 'recharts';

import { 
  Container,
  TopSide,
  Legends,
  Legend,
  Percentage,
  Name
} from './styles';

interface IHistoryBoxProps {
  data: {
    name: string,
    Entradas: number,
    Saídas: number
  }[]
}

const HistoryBox: React.FC<IHistoryBoxProps> = ({ data }) => {
  return (
    <Container>
      <TopSide className="primary_color">
        <h3>Histórico de saldo</h3>

        <Legends>
          <Legend>
            <Percentage color="#F7931B"></Percentage>
            <Name>Entradas</Name>
          </Legend>

          <Legend>
            <Percentage color="#E44C4E"></Percentage>
            <Name>Saídas</Name>
          </Legend>
        </Legends>
      </TopSide>

      <ResponsiveContainer>
        <LineChart 
          data={data}
          margin={{top: 5, right: 30, left: 20, bottom: 5}}>

          <XAxis dataKey="name" />

          <CartesianGrid strokeDasharray="3 3" horizontal={false} vertical={false}/>

          <Tooltip formatter={(value, name) => ([`R$ ${value}`, name ])} />

          <Line type="monotone" dataKey="Entradas" stroke="#F7931B" strokeWidth="7px" dot={{r: 5}}  />
          <Line type="monotone" dataKey="Saídas" stroke="#E34C77" strokeWidth="7px" dot={{r: 5}} />
        </LineChart>
      </ResponsiveContainer>
    </Container>
  )
}

export default HistoryBox;
