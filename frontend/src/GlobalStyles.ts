import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
:root {
--color-main: #1E5128;
--color-main-med: #123118;
--color-main-med-rgb: 18, 49, 24;
--color-main-dark: #09180c;
--color-main-dark-rgb: 9, 24, 12;

--color-secondary: #281E51;
--color-secondary-rgb: 40, 30, 81;

--color-accent: #D8E9A8;
--color-accent-rgb: 216, 233, 168;

--color-link: #69aae6;


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
