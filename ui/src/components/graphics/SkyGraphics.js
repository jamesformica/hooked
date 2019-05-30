import React from 'react'
import styled from 'styled-components'

import bgStyle from '../../helpers/bg'
import sky from '../../images/sky.png'
import sun from '../../images/sun.png'

const Skyline = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-repeat-y: no-repeat;
`

const Sun = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-size: cover;
`

class SkyGraphics extends React.Component {
  shouldComponentUpdate() {
    return false
  }

  render() {
    return (
      <>
        <Skyline style={bgStyle(sky)} />
        <Sun style={bgStyle(sun)} />
      </>
    )
  }
}

export default SkyGraphics
