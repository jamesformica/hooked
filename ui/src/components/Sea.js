import React, { useRef } from 'react'
import styled from 'styled-components'

import useFishFarm from '../hooks/useFishFarm'
import Fish from './Fish'
import Boat from './Boat'
import Button from './Button'
import SeaGraphics from './graphics/SeaGraphics'

const SeaBackground = styled.div`
  position: absolute;
  top: 20vh;
  width: 100vw;
  height: 80vh;
  background: linear-gradient(to bottom, rgba(0,0,0,0), #4bbede 10%);
`

const FishWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 100;
`

const Sea = () => {
  const sea = useRef()
  const fishies = useFishFarm(sea)

  return (
    <SeaBackground>
      <SeaGraphics />
      <FishWrapper ref={sea}>
        {fishies.map(({ id, ...rest }) => (
          <Fish key={id} {...rest} />
        ))}
      </FishWrapper>
      <Boat />
      <Button />
    </SeaBackground>
  )
}

export default Sea
