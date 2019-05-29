import React, { useRef } from 'react'
import styled from 'styled-components'

import useFishFarm from '../hooks/useFishFarm'
import Fish from './Fish'
import Boat from './Boat'
import Button from './Button'

const SeaBackground = styled.div`
  width: 100vw;
  height: 80vh;
  position: relative;
  background: midnightblue;
`

const Sea = () => {
  const sea = useRef()
  const fishies = useFishFarm(sea)

  return (
    <SeaBackground ref={sea}>
      {fishies.map(f => (
        <Fish
          key={f.id.toString()}
          y={f.y}
          timestamp={f.id}
          variant={f.variant}
          style={{ animationDelay: `${f.delay}ms` }}
          />
      ))}
      <Boat />
      <Button />
    </SeaBackground>
  )
}

export default Sea
