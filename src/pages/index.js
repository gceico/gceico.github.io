import { graphql } from 'gatsby'
import get from 'lodash/get'
import React from 'react'

import CV from '../components/CV'
import Layout from '../components/Layout'
import Portfolios from '../components/Portfolios'
import PostsPreview from '../components/PostsPreview'

function Index({ data, location }) {
  const siteTitle = get(data, 'cosmicjsSettings.metadata.site_title')
  const siteHeading = get(data, 'cosmicjsSettings.metadata.site_description')
  const posts = get(data, 'allCosmicjsPosts.edges')
  const portfolios = get(data, 'allCosmicjsPortfolios.edges')
  const experiences = get(data, 'allCosmicjsExperiences.edges')
  const author = get(data, 'cosmicjsSettings.metadata')

  return (
    <Layout
      location={location}
      siteTitle={siteTitle}
      siteHeading={siteHeading}
      author={author}
    >
      <PostsPreview posts={posts} />
      <Portfolios portfolios={portfolios} />
      <CV experiences={experiences} author={author} />
    </Layout>
  )
}

export default Index

export const pageQuery = graphql`
  query IndexQuery {
    allCosmicjsPosts(sort: { fields: [created], order: DESC }, limit: 3) {
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
    allCosmicjsPortfolios(sort: { fields: [created], order: ASC }, limit: 3) {
      edges {
        node {
          metadata {
            hero {
              local {
                childImageSharp {
                  fluid(maxWidth: 1060) {
                    ...GatsbyImageSharpFluid_withWebp_tracedSVG
                  }
                }
              }
            }
          }
          slug
          title
          content
          created(formatString: "DD MMMM, YYYY")
        }
      }
    }
    allCosmicjsExperiences(
      sort: { fields: [created], order: ASC }
      limit: 1000
    ) {
      edges {
        node {
          metadata {
            category
            company
            position
            period
            description
            address
          }
          slug
        }
      }
    }
  }
`
