import styled from 'styled-components';

interface IPercentage {
  color: string;
}

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  width: 45%;
  padding: 0 20px;
  margin-bottom: 20px;
  border-radius: 10px;
  background-color: ${(props) => props.theme.colors.tertiary};

  transform: translateY(-25px);
  opacity: 0;
  animation: PieChartAnimation .5s 1.7s ease-in-out forwards;
  
  @keyframes PieChartAnimation {
    from {
      opacity: 0;
      transform: translateY(-25px);
    }
    to {
      opacity: 1;
      transform: translateY(0px);
    }
  }

  @media screen and (max-width: 720px) {
    width: 100%;
  }
`;

export const RelationsWrapper = styled.div` 
  padding: 37px 0 25px 0;

  h3 {
    font-size: 1.5rem;
    margin-bottom: 50px;
  }
`;

export const Relations = styled.div` 
  height: 120px;
  padding-right: 15px;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 20px;
    border-radius: 10px;
  }
  
  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: ${(props) => props.theme.colors.primary};
    border-radius: 6px;
  }
  
  &::-webkit-scrollbar-thumb {
    border-radius: 15px;
    background-color: ${(props) => props.theme.colors.tertiary};

    border: 6px solid ${(props) => props.theme.colors.primary};
  }
`;

export const Relation = styled.div` 
  display: flex;
  align-items: center;
  
  + div {
    margin-top: 20px;
  }
`;

export const Percentage = styled.div<IPercentage>` 
  font-size: 0.875rem;
  font-weight: bold;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 50px;
  height: 50px;

  border-radius: 7px;
  background-color: ${(props) => props.color};
`;

export const Name = styled.div` 
  font-size: 1rem;
  margin-left: 7px;
`;

export const GraphWrapper = styled.div`
  display: flex;
  height: 140px;
  width: 140px;

  margin-bottom: 25px;

  .recharts-layer.recharts-bar-rectangle {
    margin-right: 20px !important;
  }
`;