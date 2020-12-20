import styled from 'styled-components';

interface IPercentage {
  color: string
}

export const Container = styled.div`
  width: 100%;
  height: 285px;
  padding: 27px 20px 40px 20px;
  margin: 20px 0;
  border-radius: 10px;
  background-color: ${(props) => props.theme.colors.tertiary};
  
  transform: translateX(20px);
  opacity: 0;
  animation: HistoryBoxAnimation .5s 1.1s ease-in-out forwards;
  
  @keyframes HistoryBoxAnimation {
    from {
      opacity: 0;
      transform: translateX(20px);
    }
    to {
      opacity: 1;
      transform: translateX(0px);
    }
  }

  h3 {
    font-size: 1.5rem;
  }

  .recharts-responsive-container {
    height: calc(100% - 20px) !important;
    padding-top: 20px;
  }

  .recharts-text {
    fill: ${(props) => props.theme.colors.black};
  }

  .recharts-text > tspan {
    font-size: 1.25rem;

    @media screen and (max-width: 720px) {
      font-size: 0.75rem;
    }
  }

  .recharts-default-tooltip {
    background-color: ${(props) => props.theme.colors.primary} !important;

    > .recharts-tooltip-label {
      font-size: 1.125rem;
      font-weight: bold;
      margin-bottom: 5px !important;
      color: ${(props) => props.theme.colors.black} !important;
    }
  }
`;

export const TopSide = styled.div` 
  display: flex;
  justify-content: space-between;
`;

export const Legends = styled.div` 
  display: flex;
  align-items: center;  
  padding-right: 15px;
  overflow-y: auto;

  @media screen and (max-width: 600px) {
    display: none;
  }
`;

export const Legend = styled.div` 
  display: flex;
  align-items: center;

  margin-left: 30px;
`;

export const Percentage = styled.div<IPercentage>` 
  display: flex;
  justify-content: center;
  align-items: center;

  width: 30px;
  height: 30px;

  border-radius: 7px;
  background-color: ${(props) => props.color};
`;

export const Name = styled.div` 
  font-size: 1rem;
  margin-left: 7px;
`;