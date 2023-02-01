import { createGlobalStyle } from 'styled-components'

const Style = createGlobalStyle`
  :root {
    --text-primary: #111517;
    --input: hsl(0, 0%, 52%);
    --background: #fafafa;
    --elements: #ffffff;
  }
  html {
    font-family: 'Montserrat', sans-serif;
    box-sizing: border-box;
    font-size: 1rem;
    font-weight: 300;
  }
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }
  body {
    background: var(--background);
    height: 100vh;
  }
  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 800;
  }
`

export const GlobalStyle = Style