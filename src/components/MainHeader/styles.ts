import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  grid-area: header;

  padding: 0 60px;
  border-bottom: 1px solid ${(props) => props.theme.colors.grey};
  background-color: ${(props) => props.theme.colors.secondary};

  @media screen and (max-width: 1050px) {
    padding: 0 20px;
  }

  @media screen and (max-width: 485px) {
    padding: 0 10px;
  }
`;

export const HamburgerMenuWrapper = styled.div` 
  display: none;
  align-items: center;

  @media screen and (max-width: 1000px) {
    display: flex;
  }

  h2 {
    opacity: 0;
    margin-left: 8px;

    transform: translateX(20px);
    transition: .5s ease-in-out;

    @media screen and (max-width: 370px) {
      max-width: 90px;
    }

    &.menuOpen {
      opacity: 1;
      transform: translateX(0px);
    }
  }
`;

export const HamburgerMenu = styled.button` 
  position: relative;
  display: none;
  
  height: 45px;
  width: 45px;
  border-radius: 5px;
  border: none;

  background-color: ${(props) => props.theme.colors.warning};

  @media screen and (max-width: 1000px) {
    display: block;
  }

  /* Hamburger Menu */
  &:after {
    content: '';
    position: absolute;
    display: block;

    top: 68%;
    left: 50%;
    transform: translate(-50%, -50%);

    width: 25px;
    height: 3.5px;
    background-color: #9d0e10;

    box-shadow: 0px -8px 0px #9d0e10;

    animation: openBottomLine .5s ease-in-out forwards;
  }

  &:before {
    content: '';
    position: absolute;
    display: block;

    top: 33%;
    left: 50%;
    transform: translate(-50%, -50%);

    width: 25px;
    height: 3.5px;
    background-color: #9d0e10;

    animation: openTopLine .5s ease-in-out forwards;
  }

  /* Menu Open */
  &.menuOpen {
    &:before {
      animation: closeTopLine .5s ease-in-out forwards;
    }

    &:after {
      animation: closeBottomLine .5s ease-in-out forwards;
    }
  }

  /* Animations */
  @keyframes closeTopLine {
    0% {
      top: 33%;
    }
    30% {
      top: 50%;
    }
    100% {
      top: 50%;
      transform: translate(-50%, -50%) rotate(45deg);
    }
  }

  @keyframes closeBottomLine {
    0% {
      top: 68%;
    }
    30% {
      top: 50%;
    }
    31% {
      top: 50%;
      box-shadow: none;
    }
    100% {
      top: 50%;
      transform: translate(-50%, -50%) rotate(-45deg);
      box-shadow: none;
    }
  }

  @keyframes openBottomLine {
    0% {
      top: 50%;
      transform: translate(-50%, -50%) rotate(-45deg);
      box-shadow: none;
    }
    30% {
      top: 50%;
      transform: translate(-50%, -50%) rotate(0deg);
      box-shadow: none;
    }
    100% {
      top: 68%;
      transform: translate(-50%, -50%) rotate(0deg);
      box-shadow: 0px -8px 0px #9d0e10;
    }
  }

  @keyframes openTopLine {
    0% {
      top: 50%;
      transform: translate(-50%, -50%) rotate(45deg);
    }
    30% {
      top: 50%;
      transform: translate(-50%, -50%) rotate(0deg);
    }
    100% {
      top: 33%;
      transform: translate(-50%, -50%) rotate(0deg);
    }
  }
`;

export const SwitchTheme = styled.div` 
  display: flex;
  align-items: center;

  label {
    margin: 0 7px;
  }

  @media screen and (max-width: 1000px) {
    display: none;
  }
`;

export const Welcome = styled.div` 
  display: flex;
  flex-direction: column;
`;

export const Greetings = styled.span` 
  font-size: 1.5rem;
  font-weight: bold;
`;

export const UserName = styled.span` 

`;