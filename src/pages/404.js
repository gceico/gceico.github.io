import { Link } from 'gatsby'
import React from 'react'
import { Col, Container, Row } from 'react-grid-system'
import { Helmet } from 'react-helmet'
import styled from 'styled-components'

import Fav from '../components/Fav'
import theme from '../styles/theme'

const Root = styled.div`
  height 100vh;
  text-align: center;
  background: ${theme.palette.fill};
  display: flex;
  align-items: center;

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

const NotFoundPage = ({ location }) => (
  <Root>
    <Fav />
    <Helmet>
      <html lang="en" />
      <meta charset="UTF-8" />
      <title>404 Not found</title>
      <meta property="og:url" content={location} />
      <meta property="og:title" content="404 Not found" />
      <meta name="theme-color" content={theme.palette.secondary} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta
        name="description"
        content={"You just hit a route that doesn't exist."}
      />
    </Helmet>
    <Container style={{ flex: 1 }}>
      <Row justify="center">
        <Col lg={8}>
          <BigTitle>404 Not Found</BigTitle>
          <p>
            You just hit a route that doesn&#39;t exist.{' '}
            <Link to="/">Go Home</Link> instead.
          </p>
        </Col>
      </Row>
    </Container>
  </Root>
)

export default NotFoundPage
