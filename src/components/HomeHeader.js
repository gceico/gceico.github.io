import { Link } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'
import React from 'react'

import { rhythm, scale } from '../utils/typography'

export default function HomeHeader({ hero, title }) {
  return (
    <BackgroundImage
      Tag="div"
      className="post-hero"
      fluid={hero}
      backgroundColor={`#007ACC`}
      style={{
        height: rhythm(14),
        position: 'relative',
        marginBottom: `${rhythm(1.5)}`,
      }}
    >
      <h1
        style={{
          ...scale(1.3),
          position: 'absolute',
          textAlign: 'center',
          left: 0,
          right: 0,
          top: rhythm(4),
          marginTop: '0',
          height: rhythm(2.5),
        }}
      >
        <Link
          style={{
            boxShadow: 'none',
            textDecoration: 'none',
            color: 'inherit',
          }}
          to={'/'}
        >
          {title}
        </Link>
      </h1>
    </BackgroundImage>
  )
}
