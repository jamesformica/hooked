import React from 'react'
import styled, { keyframes } from 'styled-components'

import boat from '../images/sailboat.png'

const SIZE = {
  w: '100px',
  h: '100px'
}

const float = keyframes`
  0%,
  100% {
    transform: translate(0, 0) rotate(-2deg);
  }

  50% {
    transform: translate(2.5vh, -3vh) rotate(7deg);
  }
`

const StyledBoat = styled.img`
  position: absolute;
  top: calc(${SIZE.h} / 2 * -1);
  left: calc(50% - ${SIZE.w} / 2);
  width: 100px;
  animation-name: ${float};
  animation-duration: 5s;
  animation-iteration-count: infinite;
`

const Boat = () => (
  <StyledBoat src={boat} />
)

export default Boat
