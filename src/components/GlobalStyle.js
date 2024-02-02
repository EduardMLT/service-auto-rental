import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`

  :root {
  --pr-background-color: #ffffff;
  --pr-text-color: #8a8a89;
  --pr-text-color: #121417;
  --pr-input-background-color: #f7f7fb;
  --pr-button-background-color: #3470ff;
  --hovered-button-background-color: #0b44cd;
}

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', "Manrope"
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

     box-sizing: border-box;
     padding: 0;
     padding-bottom: 60px;
     margin: 0;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  h1,
h2,
h3,
h4,
h5,
h6,
p,
ul,
li {
  padding: 0;
  margin: 0;
}

a,
button {
  border: none;
  cursor: pointer;
  text-decoration: none;
  font-family: inherit;
  color: inherit;
}

  img {
    display: block;
    max-width: 100%;
    object-fit: cover;
  }
`;
