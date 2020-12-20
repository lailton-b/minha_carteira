import React from 'react';
import { ThemeProvider } from 'styled-components';
import { useTheme } from './hooks/theme';
import Routes from './Routes';
import GlobalStyle from './styles/GlobalStyle';

const App: React.FC = () => {
  const { theme } = useTheme();

  return (
    <ThemeProvider theme={ theme }>
      <GlobalStyle />
      <Routes />
    </ThemeProvider>
  );
}

export default App;
