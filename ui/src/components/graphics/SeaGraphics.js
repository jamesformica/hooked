import React from 'react'
import styled, { keyframes } from 'styled-components'

import bgStyle from '../../helpers/bg'
import ocean from '../../images/ocean.png'
import oceanbg from '../../images/bg_ocean.png'
import oceanbg2 from '../../images/bg_ocean_2.png'

const wave = keyframes`
  0%,
  100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-5vh);
  }
`

const GraphicTop = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-size: auto 70vh;
  background-repeat: repeat-x;
`

const Ocean = styled(GraphicTop)`
  top: -25%;
  animation: ${wave} 5s infinite;
`

const OceanBg = styled(GraphicTop)`
  top: -20%;
`

const OceanBg2 = styled(GraphicTop)``

class SeaGraphics extends React.Component {
  shouldComponentUpdate() {
    return false
  }

  render() {
    return (
      <>
        <Ocean style={bgStyle(ocean)} />
        <OceanBg style={bgStyle(oceanbg)} />
        <OceanBg2 style={bgStyle(oceanbg2)} />
      </>
    )
  }
}

export default SeaGraphics
