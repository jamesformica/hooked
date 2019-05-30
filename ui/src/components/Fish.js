import React from 'react'
import styled, { keyframes, css } from 'styled-components'
import sample from 'lodash/sample'

import { server } from '../../../common/consts'
import fish1 from '../images/fish-1.png'
import fish2 from '../images/fish-2.png'
import fish3 from '../images/fish-3.png'
import fish4 from '../images/fish-4.png'
import shark1 from '../images/shark-1.png'
import shark2 from '../images/shark-2.png'

const FISHY_SPRITES = [
  { url: fish1, small: true },
  { url: fish2, small: true },
  { url: fish3, small: true },
  { url: fish4, small: true },
  { url: shark1, small: false },
  { url: shark2, small: false }
]

const bigSwim = keyframes`
  0% {
    transform: translate(100vw, 0) rotateY(0);
  }

  30%,
  50%,
  70%,
  90% {
    transform: translate(50vw, 10%) rotateY(0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate(40vw, 0%) rotateY(180deg);
  }

  100% {
    transform: translate(calc(0vw - 400%), 0) rotateY(0);
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
  transform: translate(60vw, 0) rotate(360deg) scale(1.5);
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

const Fish = styled.img`
  position: absolute;
  top: ${props => props.y}px;
  background-size: cover;
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
    const sprite = sample(FISHY_SPRITES)
    const style = {
      height: sprite.small ? '4vh' : '10vh',
      animationDelay: `${this.props.delay}ms`,
    }

    return <Fish {...this.props} style={style} src={sprite.url} />
  }
}

export default FishyBoi
