import React from 'react';
import dark from '../styles/themes/dark';
import light from '../styles/themes/light';

interface IThemeContext {
  handleToggle(): void;
  theme: ITheme;
}

interface ITheme {
  title: string,
  
  colors: {
    primary: string,
    secondary: string,
    tertiary: string,

    grey: string,
    white: string,
    black: string,
    secondary_color: string,

    success: string,
    info: string,
    warning: string
  }
}

const ThemeContext = React.createContext<IThemeContext>({} as IThemeContext);

const ThemeProvider: React.FC = ({ children }) => {
  const [ theme, setTheme ] = React.useState(() => {
    const themeStorage = localStorage.getItem('@minha-carteira:theme');

    return themeStorage && JSON.parse(themeStorage).title === 'light' 
      ? JSON.parse(themeStorage) 
      : dark;
  });

  function handleToggle() {
    if (theme === dark) {
      setTheme(light);
      localStorage.setItem('@minha-carteira:theme', JSON.stringify(light));
    } else {
      setTheme(dark);
      localStorage.setItem('@minha-carteira:theme', JSON.stringify(dark));
    }
  }

  return (
    <ThemeContext.Provider value={{ handleToggle, theme }}>
      { children }
    </ThemeContext.Provider>
  )
}

const useTheme = () => {
  const context = React.useContext(ThemeContext);

  return context;
}

export { ThemeProvider,  useTheme }
