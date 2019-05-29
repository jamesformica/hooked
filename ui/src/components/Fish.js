import React from 'react'
import styled, { keyframes } from 'styled-components'

import { server } from '../../../common/consts'

const bigSwim = keyframes`
  0% {
    transform: translate(100vw, 0);
  }

  30%,
  50%,
  70%,
  90% {
    transform: translate(50vw, 10%);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate(40vw, 0%);
  }

  100% {
    transform: translate(calc(0vw - 100%), 0);
  }
`

const Fish = styled.div`
  position: absolute;
  top: ${props => props.y}px;
  width: 20px;
  height: 5px;
  background: black;
  animation-name: ${bigSwim};
  animation-duration: ${server.FRESH_FISH - 1000}ms;
  animation-fill-mode: forwards;
  transform: translate(100vw, 0);
`

class FishyBoi extends React.Component {
  shouldComponentUpdate() {
    return false
  }

  render() {
    return <Fish {...this.props} />
  }
}

export default FishyBoi
