import sanityClient from '@sanity/client'

const options = {
  projectId: process.env.REACT_APP_SANITY_PROJECT_ID,
  dataset: 'production',
}

const client = sanityClient({
  ...options,
  useCdn: process.env.NODE_ENV === 'production',
})

export default client
