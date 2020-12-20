import styled from 'styled-components';

interface IContainerProps {
  labelColor: string;
}

export const Container = styled.div<IContainerProps>`
  position: relative;

  display: flex;
  justify-content: space-between;
  align-items: center;

  width: calc(100% - 20px);
  margin-bottom: 15px;
  padding: 10px 40px 10px 25px;
  border-radius: 10px;

  background-color: ${(props) => props.theme.colors.tertiary};

  @media screen and (max-width: 485px) {
    width: 100%;
    padding: 10px 15px 10px 25px;
  }

  &:before {
    position: absolute;
    left: 0;

    content: "";
    display: block;

    width: 14px;
    height: 31px;
    border-top-right-radius: 7px;
    border-bottom-right-radius: 7px;

    background-color: ${(props) => props.labelColor};
  }
`;

export const Description = styled.div`

`;

export const Title = styled.h3`
  font-size: 1.125rem;
`;

export const Date = styled.span`
  font-size: 0.875rem;
`;

export const Amount = styled.span`
  font-size: 1.375rem;
  font-weight: bold;
`;