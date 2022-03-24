import React from 'react'

/* eslint-disable import/no-named-as-default */
/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable import/no-named-as-default-member */
// eslint-disable-next-line import/no-unresolved
import { Route, Routes } from 'react-router-dom'
import Navigation from './components/Navigation'

// eslint-disable-next-line import/no-unresolved

import Home from './pages/Home'
import Actor from './pages/Actor'
import Actors from './pages/Actors'
import Movies from './components/Movies'
import Movie from './components/Movie'
import { getMovie } from './lib/movieService'

export default function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route index element={<Home />} />
        <Route path="Home" element={<Home />} />
        <Route path="actors">
          <Route index element={<Actors />} />
          <Route path=":name" element={<Actor />} />
        </Route>
        <Route path="movies">
          <Route index element={<Movies />} />
          <Route path=":slug" element={<Movie />} />
        </Route>
      </Routes>
      
    </>
  )
}
