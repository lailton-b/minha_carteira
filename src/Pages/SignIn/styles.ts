import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100%;
  background-color: ${(props) => props.theme.colors.primary};
`;

export const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;

  h2 {
    font-size: 1.25rem;
  }

  img {
    margin-right: 15px;
  }
`;

export const Content = styled.main``;

export const LoginWrapper = styled.div` 
  margin-top: 40px;
  border-radius: 10px;
  padding: 34px 50px;
  background-color: ${(props) => props.theme.colors.tertiary};

  @media screen and (max-width: 485px) {
    padding: 34px 23px;
  }

  h1 {
    font-size: 1.75rem;
    margin-bottom: 40px;
  }
  
  h1:after {
    content: "";
    display: block;
    
    width: 45px;
    height: 6px;
    background-color: ${(props) => props.theme.colors.warning};
  }

  #submit {
    font-size: 1rem;
    font-weight: bold;

    width: 264px;
    height: 40px;

    margin-top: 40px;
    border-radius: 5px;
    border: none;
    background-color: ${(props) => props.theme.colors.warning};

    transition: opacity .3s;
    cursor: pointer;

    &:hover {
      opacity: 0.7;
    }
  } 
`;

export const InputWrapper = styled.div` 
  display: flex;
  flex-direction: row-reverse;
  margin-top: 20px;

  label {
    font-size: 0px;

    position: relative;
    display: block;

    width: 48px;
    height: 40px;

    border-radius: 5px 0px 0px 5px;
    border: 2px solid transparent;
    border-right: 0px;  
    background-color: ${(props) => props.theme.colors.black};

    svg {
      font-size: 1.5rem;
      
      position: absolute;
      top: 50%;
      left: 50%;

      transform: translate(-50%, -50%);
      fill: ${(props) => props.theme.colors.tertiary};
    }
  }

  input {
    font-size: 1rem;

    height: 40px;
    padding: 0 13px 0 0;

    color: ${(props) => props.theme.colors.white};
    background-color: ${(props) => props.theme.colors.black};

    border-radius: 0px 5px 5px 0px;
    border: 2px solid transparent;
    border-left: 0px;

    &:-internal-autofill-selected {
      appearance: initial;
      background-color: ${(props) => props.theme.colors.black} !important;
      background-image: none !important;
      color: ${(props) => props.theme.colors.white} !important;
    }

    &:focus {
      outline: none;
      border-color: ${(props) => props.theme.colors.primary};

      ~ label {
        border-color: ${(props) => props.theme.colors.primary};
      }
    }
  }
`;

export const Error = styled.p`
  color: ${(props) => props.theme.colors.warning};
  margin-top: 10px;
`;