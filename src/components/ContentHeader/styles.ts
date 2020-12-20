import styled from 'styled-components';

interface ITitleProps {
  lineColor: string,
}

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  height: 98px;

  @media screen and (max-width: 485px) {
    padding-right: 15px;
  }
`;

export const SelectWrapper = styled.div`
  @media screen and (max-width: 485px) {
    display: flex;
    flex-direction: column;
  }
`;

export const Title = styled.h1<ITitleProps>`
  font-size: 2rem;

  &:after {
    content: '';
    display: block;
    width: 48px;
    height: 6px;
    background-color: ${ (props) => props.lineColor };
  }
`;