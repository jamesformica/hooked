import React from 'react'
import styled, { keyframes } from 'styled-components'

import bgStyle from '../../helpers/bg'
import ocean from '../../images/ocean.png'
import oceanbg from '../../images/bg_ocean.png'
import oceanbg2 from '../../images/bg_ocean_2.png'
import ground from '../../images/ground.png'
import coral from '../../images/dec_ground.png'
import fish from '../../images/dec_ocean.png'

const sway = keyframes`
  0%,
  100% {
    transform: translateX(0px);
  }

  50% {
    transform: translateX(-20px);
  }
`

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

const GraphicBottom = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 100%;
  background-size: auto 70vh;
  background-repeat: repeat-x;
  background-position: bottom;
`

const Ocean = styled(GraphicTop)`
  top: -25%;
  animation: ${wave} 5s infinite;
`

const OceanBg = styled(GraphicTop)`
  top: -20%;
`

const OceanBg2 = styled(GraphicTop)``

const Ground = styled(GraphicBottom)``

const Coral = styled(GraphicBottom)`
  animation: ${sway} 10s infinite;
`

const Sealife = styled(GraphicBottom)``

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
        <Sealife style={bgStyle(fish)} />
        <Coral style={bgStyle(coral)} />
        <Ground style={bgStyle(ground)} />
      </>
    )
  }
}

export default SeaGraphics
