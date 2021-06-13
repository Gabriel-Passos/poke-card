import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --color-bug: #3b994e;
    --color-dark: #5a5979;
    --color-dragon: #60cbd7;
    --color-eletric: #fbfa74;
    --color-fairy: #ea1369;
    --color-fighting: #ef6138;
    --color-fire: #fc4c5c;
    --color-flying: #93b2c7;
    --color-ghost: #906790;
    --color-grass: #27cb4f;
    --color-ground: #a9702c;
    --color-ice: #d8f0fa;
    --color-normal: #ca98a7;
    --color-poison: #9b69d9;
    --color-psychic: #f81c91;
    --color-rock: #8b3e21;
    --color-steel: #42be92;
    --color-water: #86a8fc;

    --color-card-background: #E5383B;
    --color-card-white: #EDF2F4;
    --color-border: #1F1F1F;
    --color-text: #1F1F1F;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    -webkit-font-smoothing: antialiased;
  }

  body {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    font-size: 16px;
  }

  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }
`;