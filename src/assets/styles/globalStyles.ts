import { createGlobalStyle } from 'styled-components'
import { COLORS, FONT_FAMILIES, FONT_SIZES } from '@FE/theme'

export const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
  }

  body {
    font-family: ${FONT_FAMILIES.regular};
    font-size: ${FONT_SIZES.regular};
    color: ${COLORS.primary.black};
    margin: 0;
    padding: 0;
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
  }
`
