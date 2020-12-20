import styled from 'styled-components';

export const Container = styled.div`
  @media screen and (max-width: 485px) {
    padding-left: 5px;
  }
`;

export const ListContent = styled.div`
  max-height: 68vh;
  padding: 0 20px 0 40px;
  overflow-y: auto;

  @media screen and (max-width: 1400px) {
    padding: 0;
    padding-left: 15px;
  }

  @media screen and (max-width: 485px) {
    padding: 0;
    padding-right: 15px;
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
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
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

export const Filters = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 25px;

  label {
    font-size: 1rem;
    font-weight: bold;
    padding: 10px 15px;
    transition: opacity .3s;
    cursor: pointer;

    &:hover {
      opacity: .7;
    }

    &:after {
      content: "";
      display: block;
      width: 54px;
      height: 6px;
      margin: 3px auto 0 auto;
    }

    &.disabledFilter {
      opacity: 0.5;
    }
  }

  #recorrentes_label {
    &:after {
      background-color: ${(props) => props.theme.colors.success};
    }
  }

  #eventuais_label {
    &:after {
      background-color: ${(props) => props.theme.colors.warning};
    }
  }

  #recorrentes, #eventuais {
    display: none;
  }
`;

export const ListCardWrapper = styled.div``;

export const NothingFound = styled.p`
  font-size: 1.5rem;
  text-align: center;

  width: calc(100% - 20px);
  margin-top: 50px;
  border-radius: 10px;  
  padding: 60px;
  background-color: ${(props) => props.theme.colors.tertiary};

  @media screen and (max-width: 485px) {
    width: 100%;
  }
`;