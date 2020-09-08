import Typography from 'typography'
import altonTheme from 'typography-theme-alton'

import theme from '../styles/theme'

const gceicoTheme = {
  ...altonTheme,
  title: 'gceico',
  baseFontSize: '16px',
  baseLineHeight: 1.5,
  // bodyColor: '#1A1E36',
  // headerColor: '#1A1E36',
  bodyColor: '#FAFBFC',
  headerColor: '#FAFBFC',
  headerWeight: 400,

  headerFontFamily: [
    'Tinos',
    'Georgia',
    'Cambria',
    'Times New Roman',
    'Times',
    'serif',
  ],
  bodyFontFamily: [
    'Varela Round',
    '-apple-system',
    'BlinkMacSystemFont',
    'Segoe UI',
    'Roboto, Oxygen',
    'Open Sans',
    'Helvetica Neue',
    'sans-serif',
  ],
  googleFonts: [
    {
      name: 'Tinos',
      styles: ['400', '700'],
    },
    {
      name: 'Varela Round',
      styles: ['400'],
    },
  ],
}

gceicoTheme.overrideThemeStyles = ({ rhythm }, options) => ({
  a: {
    color: theme.palette.secondary,
    textDecoration: 'none',
    transition: 'opacity .25s ease-in',
  },
  'a:hover,a:active': {
    color: theme.palette.secondary,
    opacity: 0.8,
  },
  p: {
    color: theme.palette.lights[70],
  },
  small: {
    color: theme.palette.lights[50],
  },
  h1: {
    fontSize: theme.fontSize(4),
    fontWeight: 700,
  },
  h2: {
    fontSize: theme.fontSize(3.5),
  },
  h3: {
    fontSize: theme.fontSize(3),
    color: theme.palette.lights[90],
  },
  h4: {
    fontSize: theme.fontSize(2),
  },
  h5: {
    fontSize: theme.fontSize(1),
  },
})
const typography = new Typography(gceicoTheme)

if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
