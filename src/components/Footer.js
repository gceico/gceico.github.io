import React from 'react'
import { Col, Container, Row } from 'react-grid-system'
import styled from 'styled-components'

import logoDark from '../../static/logo-dark.svg'
import logo from '../../static/logo.svg'
import theme from '../styles/theme'

const Root = styled(Container)`
  position: relative;
  max-width: 1640px;
  padding-top: ${theme.spacing(8)};
  padding-bottom: ${theme.spacing(6)};

  @media only screen and (max-width: 768px) {
    padding-top: ${theme.spacing(6)};
  }
`
const SocialMedia = styled.div`
  & ul {
    margin: 0;
    display: flex;
    list-style-type: none;

    & li {
      margin-right: ${theme.spacing(4)};

      & a:hover {
        ${({ postFooter }) => postFooter && `color: ${theme.palette.primary};`}
        transition: color .25s ease-in;
      }
    }

    @media only screen and (max-width: 768px) {
      flex-wrap: wrap;
    }
  }
`

const BackgroundLogo = styled.img`
  top: 50%;
  left: 100%;
  width: 50vw;
  height: 50vw;
  opacity: 0.1;
  position: absolute;
  transform: translate(-50%, -50%);
  z-index: 0;
  & path: {
    fill: red;
  }

  @media only screen and (max-width: 768px) {
    top: 30%;
  }
  @media only screen and (max-width: 576px) {
    top: 15%;
    left: 70%;
  }
`

const Separator = styled.div`
  width: 100%;
  height: ${theme.spacing(4)};
  position: relative;
  z-index: 0;
  border: 2px solid ${theme.palette.lights[50]};
  // margin-top: ${theme.spacing(5)};
  margin-bottom: ${theme.spacing(5)};

  &:before {
    width: 100%;
    content: '';
    z-index: -1;
    height: 100%;
    display: block;
    position: absolute;
    bottom: calc(-1 * ${theme.spacing(2)});
    right: calc(-1 * ${theme.spacing(2)});
    background: ${theme.palette.secondary};
  }
`

const Copyright = styled(Col)`
  padding-top: ${theme.spacing(7)};
  ${({ postFooter }) => postFooter && `color: ${theme.palette.shades[60]}`}
`
const Title = styled.h5`
  ${({ postFooter }) => postFooter && `color: ${theme.palette.shades[90]}`}
`

const Paragraph = styled.p`
  & a:hover {
    ${({ postFooter }) => postFooter && `color: ${theme.palette.primary};`}
    transition: color .25s ease-in;
  }
`
export default function Footer({ author, postFooter = false }) {
  return (
    <Root fluid>
      <BackgroundLogo src={!postFooter ? logo : logoDark} alt="Logo" />
      <Separator> </Separator>
      <Row>
        <Col lg={4} md={6}>
          <Title postFooter={postFooter}>Email</Title>
          <Paragraph postFooter={postFooter}>
            <a href={`mailto: ${author.author_email}`}>{author.author_email}</a>
          </Paragraph>
        </Col>
        <Col lg={4} md={6}>
          <Title postFooter={postFooter}>Connect</Title>
          <SocialMedia
            postFooter={postFooter}
            dangerouslySetInnerHTML={{
              __html: author.socialmedia,
            }}
          />
        </Col>
      </Row>
      <Row>
        <Copyright component="small" postFooter={postFooter}>
          baked with ❤️ 2020 gceico.me
        </Copyright>
      </Row>
    </Root>
  )
}
