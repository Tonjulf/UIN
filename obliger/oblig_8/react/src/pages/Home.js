/* eslint-disable react/jsx-no-useless-fragment */
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { getActor, getMovie } from '../lib/movieService';



const actor = [
  {
 id: '1',
 title: 'Skuespillere',
 preAmble: 'Ingen skuespillere er listet her',
 category: 'Skuespiller',
 slug: 'Liste-skuespillere'
}
]

const categories = ['Actor', 'Movies']

export default function Home() {

   
 const [content, setContent] = useState()

    const handleFilter = async (event) => {
      const category = event.target.value.toLowerCase()
      let data;
      const slug = "TinaURL"
      if(category === 'actor') {
        data = await getActor(slug)
       } else if(category === 'movies'){
         data = await getMovie()
    }
  
  setContent(data)
  }
  
  
	return (
		<>
			<h1 className="m-12 text-6xl font-bold">Actors</h1>
     
      <label htmlFor='category'
      >
        Velg en kategori
      </label>
      <select
        id="category"
        defaultValue='Alle'
        onChange={handleFilter}
        >
          <option value="Alle">Alle</option>
          {categories.map((category) =>(<option key={category} value={category}>
          {category}</option>))}
      </select>
      <ul>
        {JSON.stringify(content)}
        {content?.map((actor) => (
          <li key={actor.slug}>
              <Link to={`/actor/${actor.slug}`} >{actor.title}</Link>
          </li>
        ))}
      </ul>
      
      </>
	)
}

