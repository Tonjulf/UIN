import client from './client'

const movieFields = `
  title,
  "actor": actor->name,
  
`
const actorFields = `
  _id,
	name,
	'slug': slug.current,
  
`
// Henter ut alt innhold
export const getMovie = async () => {
  const data = await client.fetch(`*[_type == "movie"]{${movieFields}}`)
  return data
}

export const getAllActors = async () => {
	const data = await client.fetch(`*[_type == "actor"]{${actorFields}}`)
	console.log(data);
  return data
}

export const getActor = async (name) => {
  const data = await client.fetch(`*[_type == "actor" && slug.current == $slug]{${actorFields}}`,
   { name }
  )
  return data?.[0]
}









/* Henter ut alle actors */
/*
 export const getAllActors = async () => {
  // eslint-disable-next-line no-undef
  const allActors = await client.fetch('*[_type=="movie"]'{
  'actor': actor->name
})
  return allActors
} 
// henter alle filmer fra en bestemt actor
 export const getReferenceToActor = async () => {
  
  const referenceToActor = await client.fetch(['*_type=="movie' && references("91b90b3b-a032-47ae-b836-3e87e9823795")]{
     title,
    'actor': actor->name})

  return referenceToActor
} 
*/
