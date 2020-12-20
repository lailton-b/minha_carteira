import styled from 'styled-components';

export const Container = styled.div`
  grid-area: nav;

  padding: 0 30px;
  border-right: 1px solid ${(props) => props.theme.colors.grey};
  background-color: ${(props) => props.theme.colors.secondary};

  @media screen and (max-width: 1050px) {
    padding: 0 18px;
  }

  @media screen and (max-width: 1000px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    position: absolute;
    top: 80px;
    left: -240px;
    height: calc(100% - 80px);
    padding-bottom: 40px;

    z-index: 99;
    pointer-events: none;
    transition: left .5s ease-in-out;

    &.menuOpen {
      left: 0;
      pointer-events: all;
    }
  }

  @media screen and (max-width: 1000px) {
    width: 240px;
  }
`;

export const LogoWrapper = styled.div` 
  height: 80px;
  display: flex;
  align-items: center;

  @media screen and (max-width: 1000px) {
    display: none;
  }

  img {
    width: 40px;
    margin-right: 15px;
  }
`;

export const Nav = styled.nav`
  margin-top: 80px;
  padding-left: 20px;

  @media screen and (max-width: 1000px) {
    margin-top: 40px;
  }

  li {
    font-size: 1rem;
    margin-top: 20px;
    color: ${(props) => props.theme.colors.info};
  }

  button {
    font-size: inherit;
    color: inherit;

    margin-left: 1px;
    border: none;
    background-color: transparent;
  }

  a, button {
    display: flex;
    align-items: center;
    transition: .3s;

    &:hover {
      opacity: 0.6;
    }
  }

  .activeRoute {
    opacity: 0.6;
  }

  svg {
    font-size: 1.375rem;
    margin-right: 10px;
  }
`;

export const SwitchTheme = styled.div` 
  display: none;

  label {
    margin: 0 7px;
  }

  @media screen and (max-width: 1000px) {
    display: flex;
    align-items: center;
    padding-left: 17px;
  }
`;