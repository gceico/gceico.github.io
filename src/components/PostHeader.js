import React from 'react'
import { Col, Container, Row } from 'react-grid-system'
import styled from 'styled-components'

import logo from '../../static/logo-dark.svg'
import theme from '../styles/theme'

const Logo = styled.img`
  margin-top: ${theme.spacing(6)};
  height: ${theme.spacing(7)};
  width: ${theme.spacing(7)};
  margin-bottom: ${theme.spacing(5)};
`

const Root = styled(Container)`
  max-width: 1640px;
  margin-bottom: ${theme.spacing(6)};
  text-align: center;
`
const Title = styled.h2`
  color: ${theme.palette.shades[90]};

  @media only screen and (max-width: 768px) {
    font-size: ${theme.fontSize(3)} !important;
  }

  @media only screen and (max-width: 576px) {
    font-size: ${theme.fontSize(2)} !important;
  }
`
const Date = styled.small`
  color: ${theme.palette.shades[50]};
`

const Separator = styled.div`
  width: 100%;
  height: ${theme.spacing(4)};
  position: relative;
  z-index: 0;
  border: 2px solid ${theme.palette.lights[50]};
  margin-top: ${theme.spacing(5)};
  margin-bottom: ${theme.spacing(5)};

  @media only screen and (max-width: 576px) {
    margin-bottom: 0;
  }

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

export default function PostHeader({ title, created }) {
  return (
    <Root fluid>
      <Row justify="center">
        <Col lg={6}>
          <Logo src={logo} alt="gceico logo" />
          <Title>{title}</Title>
          <Date>{created}</Date>
        </Col>
        <Col sm={8}>
          <Separator> </Separator>
        </Col>
      </Row>
    </Root>
  )
}
