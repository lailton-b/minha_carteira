import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle` 
  * {
    font-family: 'Roboto', sans-serif;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  } 

  html {
    overflow: hidden;
  }

  html, body, #root {
    height: 100%;
  }

  button {
    cursor: pointer;
  }

  ul {
    list-style: none;
  }

  a {
    color: currentColor;
    text-decoration: none;
  }

  h1 {
    font-size: 32px;
  }

  h2 {
    font-size: 22px;
  }

  .primary_color {
    color: ${(props) => props.theme.colors.black};
  }

  .secondary_color {
    color: ${(props) => props.theme.colors.secondary_color};
  }
`;

export default GlobalStyle;