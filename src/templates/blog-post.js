import { graphql, Link } from 'gatsby'
import get from 'lodash/get'
import React from 'react'
import { Col, Container, Row } from 'react-grid-system'
import Helmet from 'react-helmet'
import styled from 'styled-components'

import Layout from '../components/layout'
import PostHeader from '../components/PostHeader'
import theme from '../styles/theme'

const Back = styled(Link)`
  margin-top: ${theme.spacing(4)};
  display: block;
  width: fit-content;
`

const Root = styled(Container)`
  max-width: 1640px;
`

const Prev = styled(Link)``
const Next = styled(Link)`
  margin-left: auto;
  display: block;
  width: fit-content;

  &:hover {
    color: ${theme.palette.primary};
    transition: color 0.25s ease-in;
  }
`

const Content = styled.div`
  & > * {
    color: ${theme.palette.shades[80]};
  }
  h1,
  h2,
  h3,
  h4,
  h5 {
    color: ${theme.palette.shades[90]};
  }
`

function BlogPostTemplate({ data, location, pageContext }) {
  const post = data.cosmicjsPosts
  const siteTitle = get(data, 'cosmicjsSettings.metadata.site_title')
  const author = get(data, 'cosmicjsSettings.metadata')
  const { previous, next } = pageContext

  return (
    <Layout location={location} author={author} postLayout>
      <Root fluid id="head-root">
        <Helmet>
          <meta property="og:title" content={`${post.title} | ${siteTitle}`} />
          <meta name="og:description" content={post.metadata.description} />
          <meta
            property="og:image"
            content={post.metadata.description.imgix_url}
          />
        </Helmet>
        <Row justify="center">
          <Col lg={6} md={10}>
            <Back to="/posts">← Back to Posts</Back>
          </Col>
        </Row>
        <PostHeader title={post.title} created={post.created} />
        <Row justify="center">
          <Col lg={6} md={10}>
            <Content dangerouslySetInnerHTML={{ __html: post.content }} />
          </Col>
        </Row>

        <Row justify="center">
          <Col lg={3} md={5} sm={6}>
            {previous && (
              <Prev to={`/posts/${previous.slug}`} rel="prev">
                ← {previous.title}
              </Prev>
            )}
          </Col>

          <Col lg={3} md={5} sm={6}>
            {next && (
              <Next to={`/posts/${next.slug}`} rel="next">
                {next.title} →
              </Next>
            )}
          </Col>
        </Row>
      </Root>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    cosmicjsPosts(slug: { eq: $slug }) {
      id
      content
      title
      created(formatString: "MMMM DD, YYYY")
      metadata {
        description
        hero {
          imgix_url
        }
      }
    }
    cosmicjsSettings(slug: { eq: "general" }) {
      metadata {
        site_title
        author_name
        author_bio
        author_email
        socialmedia
        author_avatar {
          imgix_url
        }
      }
    }
  }
`
