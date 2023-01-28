import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  }

  img {
    display: block;
    max-width: 100%;
  }
 
  input, button, select {
    font: inherit;
  }

  ul {
  margin: 0;
  padding: 0;
}

li {
  list-style: none;
}

`;

export default GlobalStyle;
