import styled from 'styled-components';

export const Container = styled.main`
  grid-area: main;
  overflow-y: hidden;

  padding: 20px 80px 20px 70px;
  background-color: ${(props) => props.theme.colors.primary};

  @media screen and (max-width: 1150px) {
    padding: 20px 30px 20px 40px;
  }

  @media screen and (max-width: 1050px) {
    padding: 20px 15px 20px 20px;
  }

  @media screen and (max-width: 485px) {
    padding: 20px 0px 0px 10px;
  }
`;
