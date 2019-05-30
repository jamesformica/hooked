import React from 'react'
import styled, { keyframes, css } from 'styled-components'
import sample from 'lodash/sample'

import { server } from '../../../common/consts'
import fish1 from '../images/fish-1.png'
import fish2 from '../images/fish-2.png'
import fish3 from '../images/fish-3.png'
import fish4 from '../images/fish-4.png'
import shark1 from '../images/shark-1.png'

const FISHY_SPRITES = [
  { url: fish1, small: true, chance: 0.5 },
  { url: fish2, small: true, chance: 0.5 },
  { url: fish3, small: true, chance: 0.5 },
  { url: fish4, small: true, chance: 0.5 },
  { url: shark1, small: false, chance: 0.05 },
]

const bigSwim = keyframes`
  0% {
    transform: translate(100vw, 0) rotateY(0);
  }

  30%,
  50%,
  70%,
  90% {
    transform: translate(55vw, 10%) rotateY(0);
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
  transform: translate(100vw, 0) rotateZ(0) scale(1) rotateY(0);
}

5% {
  transform: translate(90vw, 0) rotateZ(0) scale(1) rotateY(0);
}

10% {
  transform: translate(80vw, -10px) rotateZ(360deg) scale(1) rotateY(0);
}

20% {
  transform: translate(30vw, 0) rotateZ(360deg) scale(1) rotateY(180deg);
}

30% {
  transform: translate(64vw, 0) rotateZ(360deg) scale(1.5) rotateY(0);
}

50% {
  transform: translate(60vw, 100px) rotateZ(270deg) scale(0.4) rotateY(0);
}

80% {
  transform: translate(38vw, 0) rotateZ(360deg) scale(1) rotateY(360deg);
}

100% {
  transform: translate(calc(0vw - 400%), 0) rotateZ(0) scale(1) rotateY(360deg);
}
`

const swimly = keyframes`
  0% {
    transform: translate(100vw, 0);
  }

  10%,
  90% {
    transform: translate(75vw, -5vh);
  }

  15% {
    transform: translate(78vw, 10vh);
  }

  30%,
  70% {
    transform: translate(12vw, 5vh);
  }

  50% {
    transform: translate(52vw, -5vh);
  }

  20%,
  40% {
    transform: translate(83vw, 7vh);
  }

  60% {
    transform: translate(81vw, -10vh);
  }

  80% {
    transform: translate(73vw, -10vh);
  }

  100% {
    transform: translate(calc(0vw - 1000%), 0);
  }

`

const Fish = styled.img`
  position: absolute;
  width: auto;
  background-size: cover;
  transform: translate(100vw, 0);
  animation-duration: ${server.FRESH_FISH - 1000}ms;
  animation-fill-mode: forwards;
  z-index: 10;

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

const getFishy = () => {
  let sprite

    do {
      const currentSprite = sample(FISHY_SPRITES)
      if (Math.random() < currentSprite.chance) {
        sprite = currentSprite
      }
    } while (!sprite)

    return sprite
}

class FishyBoi extends React.Component {
  shouldComponentUpdate() {
    return false
  }

  render() {
    const sprite = getFishy()
    const style = {
      top: `${this.props.y}px`,
      height: sprite.small ? '4vh' : '10vh',
      animationDelay: `${this.props.delay}ms`,
      filter: `hue-rotate(${this.props.delay}deg)`,
      mixBlendMode: 'multiply',
    }

    return <Fish {...this.props} style={style} src={sprite.url} />
  }
}

export default FishyBoi
