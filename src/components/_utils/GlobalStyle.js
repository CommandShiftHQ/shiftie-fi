import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Inter', sans-serif;
    background-color: #151515;
    color: #FFFFFF;
  }

  a {
    color: #aff514;

    &:hover {
      text-decoration: none;
    }
  }

  * {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    box-sizing: border-box;
    outline: none;
  }
`;

export default GlobalStyle;
