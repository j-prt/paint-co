import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
:root {
--color-main: #FFB6C1;
--color-main-light: #ffe2e6;

--color-secondary: #B6C1FF;
--color-secondary-light: #e2e6ff;

--color-accent: #C1FFB6;
--color-accent-rgb: 216, 233, 168;

// Paddings, margins, predefined widths
--border-radius-md: 8px;
--border-radius-sm: 4px;
--border-radius-xs: 2px;
}

h1 {
  font-family: "Oleo Script Swash Caps", system-ui;
}

* {
font-family: "Inter", sans-serif;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

*:link,
*:visited {
    text-decoration: none;
    color: inherit;
}`
