import React, { useState } from 'react'
import { animated } from 'react-spring'
import styled from 'styled-components'

import logo from '../../static/logo.svg'
import theme from '../styles/theme'
import { useInterval, useZoomSpring } from '../utils/hooks'

const Root = styled.div`
  top: 0;
  left: 0;
  z-index: 10;
  width: 100vw;
  height: 100vh;
  position: fixed;
  background-color: ${theme.palette.fill};
`

const Logo = styled(animated.img)`
  top: 50%;
  left: 50%;
  position: absolute;
  width: ${theme.spacing(7)};
  height: ${theme.spacing(7)};
  transform: translate(-50%, -50%);
`

function Loader() {
  const zoom = useZoomSpring()
  let [show, setShow] = useState(true)

  useInterval(() => {
    setShow(false)
  }, 1000)

  if (!show) return null

  return (
    <Root>
      <Logo src={logo} style={zoom} alt="gceico logo" />
    </Root>
  )
}
export default Loader
