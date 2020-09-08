import get from 'lodash/get'
import React from 'react'
import { setConfiguration } from 'react-grid-system'
import Helmet from 'react-helmet'
import styled from 'styled-components'

import theme from '../styles/theme'
import Fav from './Fav'
import Footer from './Footer'
import HomeHeader from './HomeHeader'

setConfiguration({
  defaultScreenClass: 'md',
  gutterWidth: 32,
})

const Root = styled.div`
  overflow: hidden;
  background: ${({ postLayout }) =>
    !postLayout ? theme.palette.fill : theme.palette.lights[100]};
`

export default function Layout({
  data,
  location,
  siteTitle,
  siteHeading,
  author,
  postLayout = false,
  children,
}) {
  const { pathname } = location
  const authorName = get(author, 'author_name')
  const authorBio = get(author, 'author_bio')
  const authorAvatar = get(author, 'author_avatar')

  return (
    <Root postLayout={postLayout}>
      <Fav />
      <Helmet>
        <html lang="en" />
        <title>{siteTitle}</title>
        <meta charset="UTF-8" />
        <meta name="author" content={authorName} />
        <meta property="og:url" content={location} />
        <meta property="og:title" content={siteTitle} />
        <meta name="og:description" content={siteHeading} />
        <meta property="og:image" content={authorAvatar.imgix_url} />
        <meta name="theme-color" content={theme.palette.secondary} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>
      {pathname === '/' && (
        <header>
          <HomeHeader
            title={siteTitle}
            avatar={authorAvatar}
            authorBio={authorBio}
          />
        </header>
      )}
      <main>{children}</main>
      <footer>
        <Footer author={author} postFooter={postLayout} />
      </footer>
    </Root>
  )
}
