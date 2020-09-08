import React, { useEffect, useRef, useState } from 'react'
import { Col, Container, Hidden, Row } from 'react-grid-system'
import { animated } from 'react-spring'
import styled from 'styled-components'

import logo from '../../static/logo.svg'
import designer from '../../static/svg/designer.svg'
import dev from '../../static/svg/dev.svg'
import esc from '../../static/svg/esc.svg'
import palette from '../../static/svg/palette.svg'
import theme from '../styles/theme'
import { useMouseSpring } from '../utils/hooks'

const Root = styled(Container)`
  position: relative;
  max-width: 1640px;
  padding-bottom: ${theme.spacing(8)};

  @media only screen and (max-width: 768px) {
    padding-bottom: ${theme.spacing(6)};
  }
`

const About = styled.div`
  font-size: ${theme.fontSize(1)} !important;
  margin-top: ${theme.spacing(4)};

  display: ${({ hidden }) => hidden && 'none'};

  @media only screen and (max-width: 768px) {
    font-size: ${theme.fontSize(2 / 3)} !important;
  }
  @media only screen and (max-width: 576px) {
    font-size: 1rem !important;
  }
`

const CardDeck = styled(Col)`
  z-index: 0;
  display: flex;
  position: relative;
  margin-top: ${theme.spacing(5)};
  padding-top: ${theme.spacing(5)};
  padding-bottom: ${theme.spacing(5)};

  div:first-child {
    z-index: -2;
    margin-top: calc(-1 * ${theme.spacing(5)});
    margin-right: calc(-1 * ${theme.spacing(6)});
  }

  div:last-child {
    z-index: -2;
    margin-top: calc(-1 * ${theme.spacing(5)});
    margin-left: calc(-1 * ${theme.spacing(6)});
  }

  @media only screen and (max-width: 576px) {
    padding-bottom: 0;
    margin-top: ${theme.spacing(2)};
    padding-top: ${theme.spacing(2)};
    justify-content: center;

    div:first-child {
      z-index: -2;
      margin-top: 0;
      margin-right: ${theme.spacing(4)};
    }

    div:last-child {
      z-index: -2;
      margin-top: 0;
      margin-left: ${theme.spacing(4)};
    }
  }
`

const Card = styled(animated.div)`
  width: calc(0.66 * ${theme.spacing(9)});
  height: calc(0.66 * 1.5 * ${theme.spacing(9)});
  position: relative;
  margin-top: ${theme.spacing(5)};
  margin-left: ${theme.spacing(5)};
  text-align: ${({ textAlignRight }) => textAlignRight && 'right'};

  &:before {
    content: '';
    z-index: -1;
    width: 100%;
    height: 100%;
    display: block;
    position: absolute;
    transform: translate(
      calc(-1 * ${theme.spacing(4)}),
      calc(-1 * ${theme.spacing(4)})
    );
    // animation: 0.5s ${theme.goDeep(5)} ease-in;
    background: ${({ secondary }) =>
      secondary ? theme.palette.secondary : theme.palette.primary};
  }

  @media only screen and (max-width: 768px) {
    &:before {
      transform: translate(
        calc(-1 * ${theme.spacing(4)}),
        calc(-1 * ${theme.spacing(4)})
      );
    }
  }
  @media only screen and (max-width: 576px) {
    margin: 0;

    &:before {
      transform: translate(
        calc(-1 * ${theme.spacing(3)}),
        calc(-1 * ${theme.spacing(3)})
      );
    }
  }
`
const Square = styled(animated.div)`
  width: ${theme.spacing(7)};
  height: ${theme.spacing(7)};
  z-index: 2;
  position: absolute;
  top: ${({ secondary }) => (secondary ? '10%' : '40%')};
  right: ${({ secondary }) => (secondary ? '10%' : '25%')};
  border: 2px solid ${theme.palette.lights[50]};


  &:before {
    content: '';
    height: 100%;
    width: 100%;
    display: block;
    position: absolute;
    transform: translate(
      calc(-1 * ${theme.spacing(4)}),
      calc(-1 * ${theme.spacing(4)})
    );
    // animation: 0.5s ${theme.goDeep(4)} ease-in;
    background: ${({ secondary }) =>
      secondary ? theme.palette.secondary : theme.palette.primary};
  }

  @media only screen and (max-width: 992px) {
    top: ${({ secondary }) => (secondary ? '10%' : '30%')};
  }



  }
`

const Logo = styled.img`
  margin-top: ${theme.spacing(5)};
  margin-bottom: ${theme.spacing(5)};

  @media only screen and (max-width: 576px) {
    height: 64px;
    margin-bottom: ${theme.spacing(4)};
    margin-top: ${theme.spacing(4)};
  }
`
const BackgroundLogo = styled.img`
  top: 90%;
  left: 90%;
  width: 66vw;
  height: 66vw;
  opacity: 0.1;
  position: absolute;
  transform: translate(-50%, -50%);

  @media only screen and (max-width: 992px) {
    top: 60%;
  }
  @media only screen and (max-width: 768px) {
    top: 80%;
  }

  @media only screen and (max-width: 576px) {
    top: 100%;
  }
`

const FaceMask = styled.img`
  position: absolute;
  width: ${({ dev }) => (dev ? '55%' : '40%')};
  left: ${({ dev }) => (dev ? '19%' : '25%')};
  top: ${({ dev }) => (dev ? '14%' : '13%')};
  margin-bottom: 0;
`
const Icon = styled.img`
  width: 15%;
  left: 50%;
  margin-bottom: 0;
  position: absolute;
  bottom: ${theme.spacing(4)};
  transform: translateX(-50%);
`
const Before = styled.span`
  color: ${theme.palette.lights[50]};
`

const Avatar = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
  filter: ${({ secondary }) =>
    secondary
      ? 'sepia(25%) hue-rotate(275deg) saturate(200%)'
      : 'sepia(50%) hue-rotate(200deg) saturate(250%)'};
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

export default function HomeHeader({ hero, title, authorBio, avatar }) {
  const [xy, onMouseMove, translate] = useMouseSpring()
  const headRoot = useRef(null)
  const squares = ['primary', 'secondary']
  const [card, setCard] = useState({
    cardWidth: `calc(0.66 * ${theme.spacing(9)})`,
    cardHeight: `calc(0.66 * 1.5 * ${theme.spacing(9)})`,
  })

  useEffect(() => {
    const rootWidth =
      headRoot && headRoot.current && headRoot.current.clientWidth
    if (rootWidth) {
      let growth = 2
      if (rootWidth <= 992) {
        growth = 3
      }
      if (rootWidth <= 768) {
        growth = 4
      }

      if (rootWidth <= 576) {
        growth = 3
      }

      const cardWidth = (rootWidth / 12) * growth
      const cardHeight = cardWidth * 1.5
      setCard({ cardWidth, cardHeight })
    }
  }, [headRoot])

  return (
    <div ref={headRoot}>
      <Root fluid id="head-root" onMouseMove={onMouseMove}>
        <Row>
          <Col lg={8} md={12} sm={12}>
            <Logo src={logo} alt="gceico logo" />
            <SmallTitle>who.</SmallTitle>
            <About dangerouslySetInnerHTML={{ __html: authorBio }} />
          </Col>
        </Row>
        <Row>
          <CardDeck>
            <Card
              style={{
                width: card.cardWidth,
                height: card.cardHeight,
                transform: xy.interpolate(translate(32)),
              }}
            >
              <Avatar
                alt="Author avatar"
                style={{ zIndex: 1 }}
                src={avatar.imgix_url}
              />
              <Hidden xs>
                <Before>me:designer</Before>
              </Hidden>
              <FaceMask src={designer} alt="A face mask of a designer" />
              <Icon src={palette} alt="A icon of a palette" />
            </Card>
            <Card
              style={{
                width: card.cardWidth,
                height: card.cardHeight,
                transform: xy.interpolate(translate(32)),
              }}
              secondary
            >
              <Avatar
                secondary
                alt="Author avatar"
                style={{ zIndex: 1 }}
                src={avatar.imgix_url}
              />
            </Card>

            <Card
              style={{
                width: card.cardWidth,
                height: card.cardHeight,
                transform: xy.interpolate(translate(32)),
              }}
              textAlignRight={true}
            >
              <Avatar
                alt="Author avatar"
                style={{ zIndex: 1 }}
                src={avatar.imgix_url}
              />
              <Hidden xs>
                <Before>me:developer</Before>
              </Hidden>
              <FaceMask dev src={dev} alt="A face mask of a developer" />
              <Icon src={esc} alt="An icon for a escape key" />
            </Card>
          </CardDeck>
        </Row>
        {/* <Row>
          <Col lg={8} md={12} sm={12}>
            <About dangerouslySetInnerHTML={{ __html: authorBio }} />
          </Col>
        </Row> */}
        <Hidden xs sm md>
          <Square
            style={{
              width: 0.4 * card.cardWidth,
              height: 0.4 * card.cardWidth,
              transform: xy.interpolate(translate(32)),
            }}
          />
          <Square
            style={{
              width: 0.4 * card.cardWidth,
              height: 0.4 * card.cardWidth,
              transform: xy.interpolate(translate(32)),
            }}
            secondary
          />
        </Hidden>

        <BackgroundLogo
          style={{ width: 3 * card.cardWidth, height: 3 * card.cardWidth }}
          src={logo}
          alt="Logo"
        />
      </Root>
    </div>
  )
}
