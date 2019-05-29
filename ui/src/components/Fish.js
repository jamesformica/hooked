import styled, { keyframes } from 'styled-components'

import { SWIM_DURATION } from '../../../common/consts'


const swim = x => keyframes`
  0% {
    transform: translateX(calc(100vw + ${x}px));
  }

  100% {
    transform: translateX(-100%);
  }
`

const Fish = styled.div`
  position: absolute;
  top: ${props => props.y}px;
  width: 20px;
  height: 5px;
  background: black;
  animation-name: ${props => swim(props.x)};
  animation-duration: ${SWIM_DURATION}ms;
  animation-fill-mode: forwards;
  animation-timing-function: linear;
`

export default Fish
