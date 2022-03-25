import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getActor } from '../lib/movieService';

export default function Actor() {
  const {actor, setActor} = useState(null)
  

  // Henter ut name fra url
  const { name } = useParams()
  console.log(name);

  useEffect(() => {
    const fetchDataAsync = async () => {
      const actorData = await getActor(name)
      setActor(actorData)
    }
    fetchDataAsync()
  }, [name])

 if(!actor) return <div>shiiit noe funker ikke som det skal ...</div>
  
  return (
    <>
      {/* <p>{actor?.name}</p>*/}
       <p>{name}</p>
      
    </>
  )
}