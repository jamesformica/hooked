import React, { useRef } from 'react'
import styled from 'styled-components'

import useFishFarm from '../hooks/useFishFarm'
import Fish from './Fish'
import Boat from './Boat'
import Button from './Button'

const SeaBackground = styled.div`
  flex-grow: 1;
  position: relative;
  background: midnightblue;
`

const Sea = () => {
  const sea = useRef()
  const fishies = useFishFarm(sea)

  return (
    <SeaBackground ref={sea}>
      {fishies.map(f => <Fish key={f.id} x={f.x} y={f.y} /> )}
      <Boat />
      <Button />
    </SeaBackground>
  )
}

export default Sea
