import React from 'react';
import { ResponsiveContainer, BarChart, Bar, Cell, Tooltip } from 'recharts';
import formattedCurrency from '../../utils/formattedCurrency';
import { 
  Container, 
  RelationsWrapper, 
  Relations, 
  Relation, 
  Percentage, 
  Name,
  GraphWrapper
} 
from './styles';

interface IBarChartProps {
  title: string,
  data: { 
    name: string, 
    percentage: number, 
    color: string 
    Total: number
  }[]
}

const BarChartBox: React.FC<IBarChartProps> = ({ title, data }) => {
  return (
    <Container>
      <RelationsWrapper>
        <h3 className="primary_color">{ title }</h3>

        <Relations>
          {
            data.map(({ name, percentage, color }) => (
              <Relation key={ name }>
                <Percentage color={ color } className="secondary_color">{ percentage }%</Percentage>
                <Name className="primary_color">{ name }</Name>
              </Relation>
            ))
          }
        </Relations>
      </RelationsWrapper>

      <GraphWrapper>
        <ResponsiveContainer>
          <BarChart data={data}>
            <Tooltip 
              cursor={false} 
              formatter={(value, name) => ( [formattedCurrency(Number(value)), name] )} 
            />
            <Bar dataKey="Total">
              {
                data.map(({ color }, index) => (
                  <Cell  key={`cell-${index}`} fill={color} />
                ))
              }
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </GraphWrapper>
    </Container>
  )
}

export default BarChartBox
