import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
:root {
--color-main: #FFB6C1;

--color-secondary: #B6C1FF;

--color-accent: #C1FFB6;
--color-accent-rgb: 216, 233, 168;

// Paddings, margins, predefined widths
--border-radius-md: 8px;
--border-radius-sm: 4px;
--border-radius-xs: 2px;
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
