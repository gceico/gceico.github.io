import styled, { keyframes } from 'styled-components'

const spacingBase = 2
const lineHeight = 1.5
const fontSizeRatio = 1.5

const theme = {
  palette: {
    primary: '#3748A8',
    secondary: '#e25b4a',
    fill: '#1A1E36',
    shades: {
      100: '#1A1E36',
      90: '#303449',
      80: '#474B5E',
      70: '#5E6171',
      60: '#757886',
      50: '#8C8E9A',
    },
    lights: {
      100: '#FAFBFC',
      90: '#F3F4F8',
      80: '#E8E9F0',
      70: '#DDDFEA',
      60: '#D2D4E2',
      50: '#C6C9DB',
    },
  },
  typography: {
    title: 'Tinos, Georgia, Cambria, "Times New Roman", Times, serif',
    content:
      '"Varela Round", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, "Open Sans", "Helvetica Neue", sans-serif',
  },
  goDeep: (n, reverse) => keyframes`
  0% {
    transform: translate( 0, 0);
  }
  100% {
    transform: translate(
      calc(${!reverse ? -1 : 1} * ${theme.spacing(n)}),  
      calc(${!reverse ? -1 : -1} * ${theme.spacing(n)})
    );
  }
`,
  spacing: n => `${Math.pow(spacingBase, n) / 16}rem`,
  fontSize: n => `${Math.pow(fontSizeRatio, n)}rem`,
}

export default theme
