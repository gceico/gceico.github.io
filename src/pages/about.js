import { graphql } from 'gatsby'
import get from 'lodash/get'
import React from 'react'
import Helmet from 'react-helmet'

import Bio from '../components/Bio'
import Layout from '../components/layout'
import { rhythm } from '../utils/typography'

function About({ props, location, data }) {
  const siteTitle = get(data, 'cosmicjsSettings.metadata.site_title')
  const author = get(data, 'cosmicjsSettings.metadata')

  return (
    <Layout location={location}>
      <Helmet title={siteTitle} />
      <div style={{marginTop: rhythm(3)}}>
      <Bio settings={author} />
      </div>
    </Layout>
  )
}

export default About

export const pageQuery = graphql`
  query AboutQuery {
    cosmicjsSettings(slug: { eq: "general" }) {
      metadata {
        site_title
        author_name
        author_bio
        author_avatar {
          imgix_url
        }
      }
    }
  }
`
