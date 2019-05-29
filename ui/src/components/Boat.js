import styled, { keyframes } from 'styled-components'

const SIZE = {
  w: '100px',
  h: '50px'
}

const float = keyframes`
  0%,
  100% {
    transform: translate(0, 0) rotate(0);
  }

  10% {
    transform: translate(20%, 10%) rotate(10deg);
  }

  40% {
    transform: translate(40%, 0%) rotate(-4deg);
  }

  60% {
    transform: translate(-40%, 0%) rotate(2deg);
  }

  70% {
    transform: translate(-50%, 5%) rotate(-2deg);
  }

  80% {
    transform: translate(-50%, 0%) rotate(4deg);
  }
`

const Boat = styled.div`
  position: absolute;
  top: calc(${SIZE.h} / 2 * -1);
  left: calc(50% - ${SIZE.w} / 2);
  width: 100px;
  height: 50px;
  background: peru;
  animation-name: ${float};
  animation-duration: 10s;
  animation-iteration-count: infinite;
`

export default Boat
