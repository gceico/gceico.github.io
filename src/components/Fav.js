import React from 'react'
import Favicon from 'react-favicon'

import fav1 from '../../static/ico/fav1.png'
import fav2 from '../../static/ico/fav2.png'
import fav3 from '../../static/ico/fav3.png'

export default function Fav() {
  return <Favicon url={[fav1, fav2, fav3, fav1, fav2, fav3]} animated={true} />
}
