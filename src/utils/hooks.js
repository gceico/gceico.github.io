import { useEffect, useRef } from 'react'
import { useSpring } from 'react-spring'

const useMouseSpring = ({
  xy = [0, 0],
  mass = 10,
  tension = 550,
  friction = 140,
} = {}) => {
  const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2]
  const [props, set] = useSpring(() => ({
    xy,
    config: { mass, tension, friction },
  }))
  const onMouseMove = ({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })
  const translate = size => (x, y) =>
    `translate3d(${x / size}px,${y / size}px,0)`

  return [props.xy, onMouseMove, translate]
}

const useZoomSpring = () => {
  const props = useSpring({
    transform: 'scale(2)',
    from: { transform: 'scale(1)' },
    config: { mass: 12, tension: 32, friction: 0 },
  })
  return props
}

const useOpacitySpring = () => {
  const props = useSpring({
    opacity: 0,
    from: { opacity: 1 },
  })
  return props
}

const useInterval = (callback, delay) => {
  const savedCallback = useRef()

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback
  }, [callback])

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current()
    }
    if (delay !== null) {
      let id = setInterval(tick, delay)
      return () => clearInterval(id)
    }
  }, [delay])
}

export { useMouseSpring, useOpacitySpring, useZoomSpring, useInterval }
