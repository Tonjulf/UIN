/* eslint-disable react/jsx-no-useless-fragment */
import React, { useEffect, useState } from 'react'
import ActorList from '../components/ActorList'
import Title from '../components/Title'
import { getAllActors } from '../lib/movieService'



export default function Actors() {
  const [actors, setActors] = useState([])

  useEffect(() => {
    const getActorsData = async () => {
      const data = await getAllActors()
      setActors(data)
    }
    getActorsData()
  }, [])

  return (
    <>
      <Title title="Actors" />
      <ActorList actors={actors} />
    </>
  )
}