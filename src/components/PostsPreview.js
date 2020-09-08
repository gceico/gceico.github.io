import { Link } from 'gatsby'
import Image from 'gatsby-image'
import { truncate } from 'lodash'
import React from 'react'
import { Col, Container, Hidden, Row } from 'react-grid-system'
import { animated } from 'react-spring'
import styled from 'styled-components'

import theme from '../styles/theme'
import { useMouseSpring } from '../utils/hooks'

const Root = styled(Container)`
  max-width: 1640px;
  margin-bottom: ${theme.spacing(8)};

  @media only screen and (max-width: 768px) {
    margin-bottom: ${theme.spacing(6)};
  }

`

const Title = styled(Col)`
  margin-right: ${theme.spacing(6)};
  @media only screen and (max-width: 768px) {
    margin-bottom: ${theme.spacing(4)};
  }
`
const BigTitle = styled.h1`
  @media only screen and (max-width: 1024px) {
    font-size: ${theme.fontSize(4)} !important;
  }

  @media only screen and (max-width: 768px) {
    font-size: ${theme.fontSize(3.5)} !important;
  }

  @media only screen and (max-width: 576px) {
    font-size: ${theme.fontSize(2.5)} !important;
  }
`
const SmallTitle = styled.p`
  font-size: ${theme.fontSize(3)};
  color: ${theme.palette.lights[90]};
  font-family: 'Tinos', 'Georgia', 'Cambria', 'Times New Roman', 'Times', serif !important;
  @media only screen and (max-width: 768px) {
    font-size: ${theme.fontSize(2.5)} !important;
  }

  @media only screen and (max-width: 576px) {
    font-size: ${theme.fontSize(1.5)} !important;
  }
`

const Post = styled.div`
  display: flex;
  max-width: 720px;
  margin-bottom: ${theme.spacing(6)};

  &:last-child {
    margin-bottom: 0;
  }

  @media only screen and (max-width: 768px) {
    padding-left: ${theme.spacing(4)};
  }
  // @media only screen and (max-width: 576px) {
  //   flex-direction: column;
  // }
`

const Thumbnail = styled(animated.div)`
  z-index: 0;
  position: relative;
  width: ${theme.spacing(7)};
  height: ${theme.spacing(7)};
  min-width: ${theme.spacing(7)};
  margin-top: ${theme.spacing(4)};

  &:before {
    width: 100%;
    content: '';
    z-index: -1;
    height: 100%;
    display: block;
    position: absolute;
    transform: translate(
      calc(-1 * ${theme.spacing(4)}),
      calc(-1 * ${theme.spacing(4)})
    );
    border: 2px solid ${theme.palette.lights[50]};
  }

  @media only screen and (max-width: 576px) {
    width: ${theme.spacing(6.5)};
    height: ${theme.spacing(6.5)};

    &:before {
      width: ${theme.spacing(6.5)};
      height: ${theme.spacing(6.5)};
      transform: translate(
        calc(-1 * ${theme.spacing(4)}),
        calc(-1 * ${theme.spacing(4)})
      );
    }

    & > div {
      width: ${theme.spacing(6.5)} !important;
      height: ${theme.spacing(6.5)} !important;
    }
  }
`

const PostsList = styled(Col)`
  margin-left: auto;
  margin-right: auto;
`
const Text = styled.div`
  margin-left: ${theme.spacing(5)};
  display: flex;
  flex-direction: column;

  & > * {
    margin-bottom: ${theme.spacing(3)};
  }

  & > *:last-child {
    margin-top: auto;
    margin-bottom: 0;
  }

  @media only screen and (max-width: 576px) {
    margin-left: 0;
  }
`

export default function PostsPreview({ posts }) {
  const [xy, onMouseMove, translate] = useMouseSpring()

  return (
    <Root fluid onMouseMove={onMouseMove}>
      <Row>
        <Title lg={5} md={12}>
          <SmallTitle>posts.</SmallTitle>
          <BigTitle>
            Find
            <Hidden md sm xs>
              <br />
            </Hidden>{' '}
            latest stories
          </BigTitle>
        </Title>
        <PostsList lg={6} md={12}>
          {posts.map(({ node }, key) => {
            return (
              <Post key={node.slug}>
                <Thumbnail
                  style={{
                    transform: xy.interpolate(translate(32)),
                  }}
                >
                  <Image
                    fixed={node.metadata.hero.local.childImageSharp.fixed}
                    objectFit="cover"
                    objectPosition="center"
                    alt={node.title}
                  />
                </Thumbnail>
                <Text>
                  <h5>
                    <Link to={`/posts/${node.slug}`}>
                      {node.title || node.slug}
                    </Link>
                  </h5>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: truncate(node.metadata.description, {
                        length: 90,
                        separator: /,? +/,
                      }),
                    }}
                  />
                  <small>{node.created}</small>
                </Text>
              </Post>
            )
          })}
        </PostsList>
      </Row>
    </Root>
  )
}
