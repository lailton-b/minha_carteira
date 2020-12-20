import React, { FormEvent } from 'react';
import Logo from '../../assets/logo.svg';
import { useAuth } from '../../hooks/auth';
import { MdEmail, MdLock } from 'react-icons/md';

import { 
  Container, 
  Header, 
  Content, 
  LoginWrapper, 
  InputWrapper,
  Error
} from './styles';

const SignIn: React.FC = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const { error, signIn } = useAuth();

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    signIn(email, password);
  }

  return (
    <Container>
      <Content>
        <Header className="primary_color">
          <img src={ Logo } alt="Minha Carteira" />
          <h2>Minha Carteira</h2>
        </Header>

        <LoginWrapper>
          <h1 className="primary_color">Entrar</h1>

          <form onSubmit={(e) => handleSubmit(e)}>
            <InputWrapper>
              <input 
                type="text" 
                id="email" 
                autoFocus 
                onChange={(e) => setEmail(e.target.value)} 
                value={ email }
                autoComplete="off"
              />
              <label htmlFor="email">Email <MdEmail /></label>
            </InputWrapper>

            <InputWrapper>
              <input 
                type="password" 
                id="password" 
                onChange={(e) => setPassword(e.target.value)} 
                value={ password }
              />
              <label htmlFor="password">Senha <MdLock /></label>
            </InputWrapper>

            <Error>{error && 'Usuário ou senha incorreta.'}</Error>

            <input type="submit" id="submit" className="primary_color" value="Acessar" />
          </form>
        </LoginWrapper>
      </Content>
    </Container>
  )
}

export default SignIn
