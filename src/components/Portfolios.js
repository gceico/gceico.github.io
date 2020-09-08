import Image from 'gatsby-image'
import React, { useState } from 'react'
import { Col, Container, Hidden, Row, Visible } from 'react-grid-system'
import { animated } from 'react-spring'
import styled from 'styled-components'

import theme from '../styles/theme'
import { useMouseSpring } from '../utils/hooks'

const Root = styled(Container)`
  max-width: 1640px;
`

const Portfolio = styled(Row)`
  margin-bottom: ${theme.spacing(8)};
  ${({ reverse }) => reverse && 'flex-direction: row-reverse'};

  @media only screen and (max-width: 768px) {
    margin-bottom: ${theme.spacing(6)};
  }

`

const Content = styled(Col)`
  @media only screen and (max-width: 768px) {
    margin-top: ${theme.spacing(4)};
  }
  
`

const Hero = styled(Col)`
  z-index: 0;
  position: relative;
  width: 100%;
  margin-top: ${theme.spacing(7)};

  &:before {
    width: calc(100% - 30px);
    content: '';
    z-index: -1;
    height: calc(100% - 30px);
    display: block;
    position: absolute;

    border: 2px solid ${theme.palette.lights[50]};
    transform: translate(
      calc(-1 * ${theme.spacing(6)}),
      calc(-1 * ${theme.spacing(6)})
    );

    ${({ reverse }) =>
      reverse &&
      `transform: translate(calc(${theme.spacing(6)}),
       calc(-1 * ${theme.spacing(6)}));`}
  }

  @media only screen and (max-width: 768px) {
    margin-top: ${theme.spacing(4)};

    &:before {
      display: none;
    }
  }
`
const BigTitle = styled.h1`
  @media only screen and (max-width: 1024px) {
    font-size: ${theme.fontSize(2.5)} !important;
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

export default function Portfolios({ portfolios }) {
  const [xy, onMouseMove, translate] = useMouseSpring()
  return (
    <Root fluid onMouseMove={onMouseMove}>
      {portfolios.map(({ node }, key) => (
        <Portfolio reverse={key === 1} key={key} align="flex-start">
          <Visible md sm xs>
            <Col>
              <SmallTitle>work.</SmallTitle>
              <BigTitle>{node.title}</BigTitle>
            </Col>
          </Visible>
          <Hero
            component={animated.div}
            lg={7}
            md={12}
            reverse={key === 1}
            style={{
              transform: xy.interpolate(translate(32)),
            }}
          >
            <Image
              alt={node.title}
              fluid={node.metadata.hero.local.childImageSharp.fluid}
            />
          </Hero>
          <Content lg={5} md={12}>
            <Hidden md sm xs>
              <SmallTitle>work.</SmallTitle>
              <BigTitle>{node.title}</BigTitle>
            </Hidden>
            <div
              dangerouslySetInnerHTML={{
                __html: node.content,
              }}
            />
          </Content>
        </Portfolio>
      ))}
    </Root>
  )
}
