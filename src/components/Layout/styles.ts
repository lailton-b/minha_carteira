import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-areas: 
    "nav header"
    "nav main"
  ;
  grid-template-rows: 80px 1fr;
  grid-template-columns: 270px 1fr;

  height: 100%;

  @media screen and (max-width: 1050px) {
    grid-template-columns: 240px 1fr;
  }

  @media screen and (max-width: 1000px) {
    grid-template-areas: 
      "header header"
      "main main"
    ;

    grid-template-columns: 1fr;
  }
`;
