import React from 'react'
import Content from '../Content';
import MainHeader from '../MainHeader';
import NavBar from '../NavBar';
import { Container } from './styles';

const Layout: React.FC = ({ children }) => {
  const [menuOpen, setMenuOpen] = React.useState(false);

  function toggleMenu() {
    setMenuOpen(!menuOpen);
  }

  return (
    <Container className={ menuOpen ? 'menuOpen' : '' }>
      <MainHeader menuOpen={ menuOpen } toggleMenu={ toggleMenu } />

      <NavBar menuOpen={ menuOpen } toggleMenu={ toggleMenu } />

      <Content>
        { children }
      </Content>
    </Container>
  )
}

export default Layout;
