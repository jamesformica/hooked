import { useContext, useState, useEffect } from 'react'
import random from 'lodash/random'

import HookedContext from '../context'

const SPAWN_BUFFER = 100

const makeFishy = height => fishy => ({
  id: fishy.id,
  y: random(SPAWN_BUFFER, height),
  delay: fishy.time % 1000,
  variant: fishy.time % 3,
})

function useFishFarm(sea) {
  const { freshFishes } = useContext(HookedContext)

  const [fishies, setFishies] = useState([])

  useEffect(() => {
    const { height } = sea.current.getBoundingClientRect()
    const newFishies = freshFishes.map(makeFishy(height))

    setFishies(newFishies)
  }, [freshFishes])

  return fishies
}

export default useFishFarm
