import React from 'react';

interface IAutchContext {
  logged: boolean;
  error: boolean;
  signIn(email: string, password: string): void;
  logout(): void;
}

const AuthContext = React.createContext({} as IAutchContext);

const AuthProvider: React.FC = ({ children }) => {
  const [logged, setLogged] = React.useState(() => {
    const loggedStorage = localStorage.getItem('@minha-carteira:logged');

    return loggedStorage ? JSON.parse(loggedStorage) : false;
  });
  const [error, setError] = React.useState(false);

  function signIn(email: string, password: string) {
    if (email === 'user@mail.com' && password === 'user') {
      setError(false);
      setLogged(true);

      localStorage.setItem('@minha-carteira:logged', 'true');
    } else {
      setError(true);
    }
  }

  function logout() {
    setLogged(false);
    localStorage.setItem('@minha-carteira:logged', 'false');
  }

  return (
    <AuthContext.Provider value={{ logged, error, signIn, logout }}>
      { children }
    </AuthContext.Provider>
  )
}

const useAuth = () => {
  const context = React.useContext(AuthContext);

  return context;
}

export { useAuth, AuthProvider };
