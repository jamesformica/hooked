import { useContext, useState, useEffect } from 'react'
import range from 'lodash/range'
import random from 'lodash/random'
import uuid from 'uuid/v1'

import { SWIM_DURATION } from '../../../common/consts'
import HookedContext from '../context'

function useFishFarm(sea) {
  const { numberOfFishies } = useContext(HookedContext)
  const [fishies, setFishies] = useState([])

  useEffect(() => {
    const { width, height } = sea.current.getBoundingClientRect()

    const aliveFishies = fishies.filter(f => Date.now() - f.born < SWIM_DURATION)

    range(numberOfFishies - aliveFishies.length).map(() => {
      aliveFishies.push({
        id: uuid(),
        x: random(width / 2),
        y: random(height),
        born: Date.now(),
      })
  })

  setFishies(aliveFishies)
}, [numberOfFishies])

return fishies
}

export default useFishFarm
