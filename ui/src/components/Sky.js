import React from 'react'
import styled from 'styled-components'

import SkyGraphics from './graphics/SkyGraphics'

const Sky = styled.div`
  position: absolute;
  width: 100%;
  height: 50vh;
`

class SkyBoi extends React.Component {
  shouldComponentUpdate() {
    return false
  }

  render() {
    return (
      <Sky>
        <SkyGraphics />
      </Sky>
    )
  }
}

export default SkyBoi
