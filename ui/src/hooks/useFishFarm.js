import { useContext, useState, useEffect } from 'react'

import HookedContext from '../context'

const SPAWN_BUFFER = 100

const makeFishy = height => fishy => ({
  id: fishy.id,
  y: Math.max(SPAWN_BUFFER, Math.round(fishy.time % height)),
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
