import { graphql } from 'gatsby'
import get from 'lodash/get'
import React from 'react'

import Layout from '../components/Layout'
import PostsList from '../components/PostsList'

function Posts({ data, location = '/posts' }) {
  const siteTitle = get(data, 'cosmicjsSettings.metadata.site_title')
  const siteHeading = get(data, 'cosmicjsSettings.metadata.site_description')
  const posts = get(data, 'allCosmicjsPosts.edges')
  const author = get(data, 'cosmicjsSettings.metadata')

  return (
    <Layout
      author={author}
      location={location}
      siteTitle={siteTitle}
      siteHeading={siteHeading}
    >
      <PostsList posts={posts} />
    </Layout>
  )
}

export default Posts

export const pageQuery = graphql`
  query PostsQuery {
    allCosmicjsPosts(sort: { fields: [created], order: DESC }, limit: 999) {
      edges {
        node {
          metadata {
            description
            hero {
              local {
                childImageSharp {
                  fixed(width: 128, height: 128) {
                    ...GatsbyImageSharpFixed_withWebp_tracedSVG
                  }
                }
              }
            }
          }
          slug
          title
          created(formatString: "DD MMMM, YYYY")
        }
      }
    }
    cosmicjsSettings(slug: { eq: "general" }) {
      metadata {
        site_heading
        site_description
        site_title
        author_name
        author_slug
        author_email
        author_address
        socialmedia
        author_bio
        author_avatar {
          imgix_url
        }
      }
    }
  }
`
