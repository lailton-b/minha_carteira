import React from 'react';
import { ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

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

interface PieChartBoxProps {
  relations: {
    name: string,
    amount: number,
    percentage: number,
    color: string,
  }[]
}

const PieChartBox: React.FC<PieChartBoxProps> = ({ relations }) => {
  React.useEffect(() => {
    relations.forEach((relation, index) => {
      if (relation.percentage === 0 ) relations[index].percentage = 50;
    })
  }, [relations]);

  return (
    <Container>
      <RelationsWrapper>
        <h3 className="primary_color">Relação</h3>

        <Relations>
          {
            relations.map(({ name, percentage, color }) => (
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
          <PieChart>
            <Pie data={ relations } dataKey="percentage">
              {
                relations.map(({ name, color }) => (
                  <Cell key={ name } fill={ color } />
                ))
              }
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </GraphWrapper>
    </Container>
  )
}

export default PieChartBox
