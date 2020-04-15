import { graphql, Link } from 'gatsby'
import get from 'lodash/get'
import React from 'react'
import Helmet from 'react-helmet'

import Bio from '../components/Bio'
import Fav from '../components/Fav'
import Layout from '../components/layout'
import { rhythm } from '../utils/typography'

function BlogIndex({ data, location }) {
  const siteTitle = get(data, 'cosmicjsSettings.metadata.site_title')
  const posts = get(data, 'allCosmicjsPosts.edges')
  const author = get(data, 'cosmicjsSettings.metadata')

  return (
    <Layout location={location}>
      <Fav />
      <Helmet title={siteTitle} />
      <Bio settings={author} />
      
      {posts.map(({ node }) => {
        const title = get(node, 'title') || node.slug
        return (
          <div key={node.slug}>
            <h3
              style={{
                marginBottom: rhythm(1 / 4),
              }}
            >
              <Link style={{ boxShadow: 'none' }} to={`posts/${node.slug}`}>
                {title}
              </Link>
            </h3>
            <small>{node.created}</small>
            <p
              dangerouslySetInnerHTML={{ __html: node.metadata.description }}
            />
          </div>
        )
      })}
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query IndexQuery {
    allCosmicjsPosts(sort: { fields: [created], order: DESC }, limit: 1000) {
      edges {
        node {
          metadata {
            description
          }
          slug
          title
          created(formatString: "DD MMMM, YYYY")
        }
      }
    }
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