import styled from 'styled-components';

export const Container = styled.div`
  overflow-y: auto;
  overflow-x: hidden;
  padding-right: 20px;
  height: 100%;

  @media screen and (max-width: 485px) {
    padding-right: 10px;  
    padding: 0 0 0 5px;
  }


  &::-webkit-scrollbar {
    width: 20px;
    border-radius: 10px;

    @media only screen and (max-width: 485px) {
      width: 0px;
      border-radius: initial;
    }
  }
  
  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 0px rgba(0, 0, 0, 0.3);
    background-color: ${(props) => props.theme.colors.tertiary};
    border-radius: 6px;

    @media only screen and (max-width: 485px) {
      box-shadow: initial;
      background-color: initial;
      border-radius: initial;
    }
  }
  
  &::-webkit-scrollbar-thumb {
    border-radius: 15px;
    background-color: ${(props) => props.theme.colors.primary};

    border: 6px solid ${(props) => props.theme.colors.tertiary};

    @media only screen and (max-width: 485px) {
      border-radius: initial;
      background-color: initial;
      border: initial;
    }
  }
`;

export const DashboardContent = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  padding: 0 40px;
  margin-top: 17px;

  @media screen and (max-width: 1400px) {
    padding: 0;
  }

  @media screen and (max-width: 720px) {
    flex-direction: column;
  }

  @media screen and (max-width: 485px) {
    padding-right: 15px;
  }
`;