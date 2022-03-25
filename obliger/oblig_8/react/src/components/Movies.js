import React from 'react';
/* eslint-disable spaced-comment */
//Lage en Movies komponent

import { useState } from 'react'
import { getMovie } from '../lib/movieService'
import Movie from './Movie';

// Lage en Movie komponent som kan ta i mot to props (title, actor).
// Du skal seinere bruke disse propsa når du skal vise dataen (se nest siste punkt)
// disse legges inn under her
export default function Movies() {
  const [data, setData] = useState([])

  // Lage state i Movies som skal holde på data fra Sanity
  const handleClick = async () => {
    const movie = await getMovie()
    setData(movie)
    console.log(movie)
  }
  /* Lage en knapp i Movies som skal håndtere det å hente data 
  eller optimalt sett bruk useEffect til å laste inn innhold umiddelbart */
  
  return (
    <>
      <h2>Skriver ut fra sanity</h2>
       {data?.length > 0 ? data.map((movie) => <Movie title={movie.title} actor={movie.actor}/>) :null}
       
      <button type="button" onClick={handleClick}>
        get content
      </button>
      
    </>
  )
}
