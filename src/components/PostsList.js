import { Link } from 'gatsby'
import Image from 'gatsby-image'
import { truncate } from 'lodash'
import React from 'react'
import { Col, Container, Row } from 'react-grid-system'
import { animated } from 'react-spring'
import styled from 'styled-components'

import theme from '../styles/theme'

const Logo = styled.img`
  margin-top: ${theme.spacing(5)};
  margin-bottom: ${theme.spacing(5)};
`

const Root = styled(Container)`
  max-width: 1640px;
  margin-bottom: ${theme.spacing(8)};
`

const Back = styled(Link)`
  margin-top: ${theme.spacing(4)};
  margin-bottom: ${theme.spacing(5)};
  display: block;
  width: fit-content;
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
export default function PostsList({ posts }) {
  return (
    <Root fluid>
      <Row justify="center">
        <Col lg={6} md={10} sm={12}>
          <Back to="/">← Back Home</Back>
          {/* <Logo src={logo} alt="gceico logo" /> */}
        </Col>
      </Row>
      <Row justify="center">
        <Col lg={6} md={10} sm={12}>
          <SmallTitle>posts.</SmallTitle>
        </Col>
      </Row>
      <Row justify="center">
        <Col lg={6} md={10} sm={12}>
          {posts.map(({ node }, key) => {
            return (
              <Post key={node.slug}>
                <Thumbnail>
                  <Image
                    fixed={node.metadata.hero.local.childImageSharp.fixed}
                    objectFit="cover"
                    objectPosition="center"
                    alt={node.title}
                  />
                </Thumbnail>
                <Text>
                  <h5>
                    <Link to={`/posts/${node.slug}`}>{node.title || node.slug}</Link>
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
        </Col>
      </Row>
    </Root>
  )
}
