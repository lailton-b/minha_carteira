import React from 'react';
import { useTheme } from '../../hooks/theme';
import emojis from '../../utils/emojis';
import Toggle from '../Toggle';

import { 
  Container, 
  Welcome, 
  Greetings, 
  UserName, 
  SwitchTheme,
  HamburgerMenu,
  HamburgerMenuWrapper
} from './styles';

interface IMainHeaderProps {
  menuOpen: boolean;
  toggleMenu(): void;
}

const MainHeader: React.FC<IMainHeaderProps> = ({ menuOpen, toggleMenu }) => {
  const { theme, handleToggle } = useTheme();
  const [ darkTheme, setDarkTheme ] = React.useState(() => theme.title === 'dark' ? true : false);

  function handleThemeChange() {
    setDarkTheme(!darkTheme);
    handleToggle();
  }

  /**************
  * Emoji 
  *********/
  const emoji = React.useMemo(() => {
    const index = Math.floor(Math.random() * 5);
    return emojis[index];
  }, []);

  return (
    <Container className="primary_color">
      <HamburgerMenuWrapper>
        <HamburgerMenu className={menuOpen ? 'menuOpen' : ''} onClick={toggleMenu} />
        <h2 className={menuOpen ? 'menuOpen' : ''} onClick={toggleMenu}>Minha Carteira</h2>
      </HamburgerMenuWrapper>

      <SwitchTheme>
        <span>Light</span>
        <Toggle onChange={ handleThemeChange } checked={ darkTheme } />
        <span>Dark</span>
      </SwitchTheme>

      <Welcome>
        <Greetings>Olá, {emoji}</Greetings>
        <UserName>Lailton Batista</UserName>
      </Welcome>
    </Container>
  )
}

export default MainHeader
