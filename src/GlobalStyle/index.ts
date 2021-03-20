import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
    font-family: 'Noto Sans', sans-serif;
    scroll-behavior: smooth;
  }

  @media(max-width: 1500px) {
  html {
      font-size: 95.75%;
    }
  }

  @media(max-width: 1080px) {
  html {
      font-size: 93.75%;
    }
  }

  @media(max-width: 980px) {
    html {
      font-size: 87.5%;
    }
  }
  body {
    -webkit-font-smoothing: antialiased;
    background: #F2F5F8;
  }
  button, select {
    outline: none;
    border: none;
    cursor: pointer;
  }
  a {
    text-decoration: none;
    cursor: pointer;
  }
`;
