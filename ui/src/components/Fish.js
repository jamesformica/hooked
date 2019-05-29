import React from 'react'
import styled, { keyframes, css } from 'styled-components'

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
    transform: translate(calc(0vw - 400%), 0);
  }
`

const funSwim = keyframes`
0% {
  transform: translate(100vw, 0) rotate(0) scale(1);
}

5% {
  transform: translate(90vw, 0) rotate(0) scale(1);
}

10% {
  transform: translate(80vw, -10px) rotate(360deg) scale(1);
}

20% {
  transform: translate(30vw, 0) rotate(360deg) scale(1);
}

30% {
  transform: translate(60vw, 0) rotate(360deg) scale(2);
}

50% {
  transform: translate(60vw, 100px) rotate(360deg) scale(0.4);
}

80% {
  transform: translate(30vw, 0) rotate(360deg) scale(1);
}

100% {
  transform: translate(calc(0vw - 400%), 0) rotate(0) scale(1);
}
`

const swimly = keyframes`
  0% {
    transform: translate(100vw, 0);
  }

  10%,
  90% {
    transform: translate(75vw, -100%);
  }

  15% {
    transform: translate(80vw, 100%);
  }

  30%,
  70% {
    transform: translate(10vw, 500%);
  }

  50% {
    transform: translate(50vw, -500%);
  }

  20%,
  40% {
    transform: translate(80vw, -1000%);
  }

  60% {
    transform: translate(80vw, -500%);
  }

  80% {
    transform: translate(75vw, -10%);
  }

  100% {
    transform: translate(calc(0vw - 1000%), 0);
  }

`

const Fish = styled.div`
  position: absolute;
  top: ${props => props.y}px;
  width: 20px;
  height: 5px;
  background: white;
  transform: translate(100vw, 0);
  animation-duration: ${server.FRESH_FISH - 1000}ms;
  animation-fill-mode: forwards;

  ${props => props.variant === 0 && css`
    animation-name: ${bigSwim};
  `}

  ${props => props.variant === 1 && css`
    animation-name: ${funSwim};
  `}

  ${props => props.variant === 2 && css`
    animation-name: ${swimly};
  `}
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
