import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
:root {
  --color-background: #FFF;
  --color-background-secondary: #FBFBFB;
  --color-background-tertiary: #F8F8F8;
  --color-primary: #00A536;
  --color-text-primary: #0B132A;
  --color-text-secondary: #4F5665;
  --color-text-in-button: #FFF;

}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-size: 16px;
  font-family: 'Rubik', sans-serif;
  font-weight: normal;
  color: var(--color-text-primary);
}

body {
  background: var(--color-background);
}
`;

export default GlobalStyle;
