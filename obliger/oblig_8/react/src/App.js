import React from 'react'

import { Route, Routes } from 'react-router-dom'
import Navigation from './components/Navigation'


import Home from './pages/Home'
import Actor from './pages/Actor'
import Actors from './pages/Actors'
import Movies from './components/Movies'
import Movie from './components/Movie'


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
