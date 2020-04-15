import 'typeface-merriweather'
import 'typeface-montserrat'

import { graphql, StaticQuery } from 'gatsby'
import React from 'react'

import cosmicjsLogo from '../../static/cosmicjs.svg'
import gatsbyLogo from '../../static/gatsby.png'
import { rhythm } from '../utils/typography'
import Fav from './Fav'
import HomeHeader from './HomeHeader'
import PostHeader from './PostHeader'

function Layout({ data, children }) {
  const siteTitle = data.cosmicjsSettings.metadata.site_heading
  const homgePageHero =
    data.cosmicjsSettings.metadata.homepage_hero.local.childImageSharp.fluid
  let header

  let rootPath = `/`
  let postsPath = `/posts`
  if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
    rootPath = __PATH_PREFIX__ + `/`
    postsPath = __PATH_PREFIX__ + `/posts`
  }

  if (location.pathname === rootPath || location.pathname === postsPath) {
    header = <HomeHeader hero={homgePageHero} title={siteTitle} />
  } else {
    header = <PostHeader title={siteTitle}/>
  }
  return (
    <div>
      <Fav />
      {header}
      <div
        style={{
          marginLeft: 'auto',
          marginRight: 'auto',
          maxWidth: rhythm(24),
          padding: `0 ${rhythm(3 / 4)} ${rhythm(1.5)} ${rhythm(3 / 4)}`,
          minHeight: 'calc(100vh - 42px)',
        }}
      >
        {children}
      </div>
      <footer
        style={{
          textAlign: 'center',
          padding: `0 20px 80px 0`,
        }}
      >
        powered by&nbsp;
        <a
          target="_blank"
          href="https://gatsbyjs.org"
          style={{
            color: '#191919',
            boxShadow: 'none',
          }}
        >
          <img
            src={gatsbyLogo}
            alt="Gatsby JS"
            style={{
              width: '20px',
              margin: '0 4px -3px 2px',
            }}
          />
          <strong>Gatsby</strong>
        </a>
        &nbsp;and&nbsp;
        <a
          target="_blank"
          href="https://cosmicjs.com"
          style={{
            color: '#191919',
            boxShadow: 'none',
          }}
        >
          <img
            src={cosmicjsLogo}
            alt="Cosmic JS"
            style={{
              width: '18px',
              margin: '0 4px -2px 5px',
            }}
          />
          <strong>Cosmic JS</strong>
        </a>
      </footer>
    </div>
  )
}

export default ({ children, location }) => (
  <StaticQuery
    query={graphql`
      query LayoutQuery {
        cosmicjsSettings(slug: { eq: "general" }) {
          metadata {
            site_heading
            homepage_hero {
              local {
                childImageSharp {
                  fluid(quality: 90, maxWidth: 1920) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={data => <Layout data={data}>{children}</Layout>}
  />
)
