import Typography from 'typography'
import kirkhamTheme from 'typography-theme-kirkham'

// Wordpress2016.overrideThemeStyles = () => ({
//   'a.gatsby-resp-image-link': {
//     boxShadow: 'none',
//   },
// })

const typography = new Typography(kirkhamTheme)
console.log(typography)
// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
