import { capitalize, groupBy, map } from 'lodash'
import React from 'react'
import { Col, Container, Hidden, Row } from 'react-grid-system'
import styled from 'styled-components'

import theme from '../styles/theme'

const Root = styled(Container)`
  max-width: 1640px;
`
const Group = styled(Row)``

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
  font-family: 'Tinos', 'Georgia', 'Cambria', 'Times New Roman', 'Times', serif !IMPORTANT;
  @media only screen and (max-width: 768px) {
    font-size: ${theme.fontSize(2.5)} !important;
  }

  @media only screen and (max-width: 576px) {
    font-size: ${theme.fontSize(1.5)} !important;
  }
`

const Separator = styled.div`
  width: 100%;
  height: ${theme.spacing(4)};
  position: relative;
  z-index: 0;
  border: 2px solid ${theme.palette.lights[50]};
  margin-top: ${theme.spacing(5)};
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

const Summary = styled(Row)`
  display: flex;
  justify-content: space-between;
  margin-bottom: ${theme.spacing(5)};
`

const Content = styled.div`
  max-width: 800px;
`
const Experience = styled.div`
  margin-bottom: ${theme.spacing(6)};

  @media only screen and (max-width: 576px) {
    margin-bottom: ${theme.spacing(5.5)};
  }
`

export default function CV({ experiences, author }) {
  const groupedByCategory = groupBy(
    experiences,
    ({ node }) => node.metadata.category
  )

  return (
    <Root fluid>
      <SmallTitle>cv.</SmallTitle>
      <BigTitle>@{author.author_slug}</BigTitle>
      <Separator> </Separator>
      <Summary>
        <Col lg={3} md={4} sm={6}>
          <h5>
            <strong>{author.author_name}</strong>
          </h5>
        </Col>
        <Hidden sm xs>
          <Col lg={3} md={4} sm={6}>
            <h5>
              <strong>{author.author_email}</strong>
            </h5>
          </Col>
        </Hidden>
        <Col lg={6} md={4} sm={6}>
          <h5>
            <strong>{author.author_address}</strong>
          </h5>
        </Col>
      </Summary>
      {map(groupedByCategory, (group, key) => (
        <Group key={key}>
          <Col lg={3} md={4}>
            <h5>
              <strong>{capitalize(key)}</strong>
            </h5>
          </Col>
          <Col lg={6} md={8}>
            <Content>
              {map(group, ({ node }) => (
                <Experience key={node.slug}>
                  {(node.metadata.company || node.metadata.position) && (
                    <h5>
                      {node.metadata.company}
                      {node.metadata.position && ` - ${node.metadata.position}`}
                    </h5>
                  )}
                  <div
                    dangerouslySetInnerHTML={{
                      __html: node.metadata.description,
                    }}
                  />
                  <small>{node.metadata.period}</small>
                </Experience>
              ))}
            </Content>
          </Col>
        </Group>
      ))}
    </Root>
  )
}
