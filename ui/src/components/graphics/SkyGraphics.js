import React from 'react'
import styled from 'styled-components'

import sky from '../../images/sky.png'
import sun from '../../images/sun.png'

const Skyline = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: url('${sky}');
  background-size: cover;
  background-repeat-y: no-repeat;
`

const Sun = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: url('${sun}');
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
        <Skyline />
        <Sun />
      </>
    )
  }
}

export default SkyGraphics
