import React, { useRef } from 'react'
import styled from 'styled-components'

import useFishFarm from '../hooks/useFishFarm'
import Fish from './Fish'
import Boat from './Boat'
import Button from './Button'
import SeaGraphics from './graphics/SeaGraphics'
import { relative } from 'upath';

const SeaBackground = styled.div`
  position: absolute;
  top: 20vh;
  width: 100vw;
  height: 80vh;
  background: linear-gradient(to bottom, rgba(0,0,0,0), #4bbede 10%);
`

const FishWrapper = styled.div`
  position: relative;
  z-index: 100;
`

const Sea = () => {
  const sea = useRef()
  const fishies = useFishFarm(sea)

  return (
    <SeaBackground ref={sea}>
      <SeaGraphics />
      <FishWrapper>
        {fishies.map(f => (
          <Fish
            key={f.id.toString()}
            y={f.y}
            timestamp={f.id}
            variant={f.variant}
            delay={f.delay}
          />
        ))}
      </FishWrapper>
      <Boat />
      <Button />
    </SeaBackground>
  )
}

export default Sea
