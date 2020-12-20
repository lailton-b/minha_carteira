import React, { FormEvent } from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../../hooks/auth';
import { useTheme } from '../../hooks/theme';

import Logo from '../../assets/logo.svg';
import Toggle from '../Toggle';
import { MdDashboard, MdArrowUpward, MdArrowDownward, MdExitToApp } from 'react-icons/md';

import { Container, LogoWrapper, Nav, SwitchTheme } from './styles';

interface INavBarProps {
  menuOpen: boolean;
  toggleMenu(): void;
}

const NavBar: React.FC<INavBarProps> = ({ menuOpen, toggleMenu }) => {
  const { logout } = useAuth();
  const { theme, handleToggle } = useTheme();
  const [ darkTheme, setDarkTheme ] = React.useState(() => theme.title === 'dark' ? true : false);

  function handleThemeChange() {
    setDarkTheme(!darkTheme);
    toggleMenu();
    handleToggle();
  }

  function handleLogout(e: FormEvent) {
    e.preventDefault();
    logout();
  }

  return (
    <Container className={ menuOpen ? 'menuOpen' : '' }>
      <LogoWrapper>
        <img src={ Logo } alt="Minha Carteira" />
        <h2 className="primary_color">Minha Carteira</h2>
      </LogoWrapper>

      <Nav>
        <ul>
          <li>
            <NavLink to="/" exact activeClassName="activeRoute" onClick={ toggleMenu }>
              <MdDashboard /> Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink to="/list/entradas" exact activeClassName="activeRoute" onClick={ toggleMenu }>
              <MdArrowUpward /> Entradas
            </NavLink>
          </li>
          <li>
            <NavLink to="/list/saidas" exact activeClassName="activeRoute" onClick={ toggleMenu }>
              <MdArrowDownward /> Saídas
            </NavLink>
          </li>
          <li>
            <NavLink to="/" exact onClick={ handleLogout }>
              <MdExitToApp /> Sair
            </NavLink>
          </li>
        </ul>
      </Nav>

      <SwitchTheme className="primary_color">
          <span>Light</span>
          <Toggle onChange={ handleThemeChange } checked={ darkTheme } />
          <span>Dark</span>
        </SwitchTheme>
    </Container>
  )
}

export default NavBar
