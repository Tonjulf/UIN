/* eslint-disable import/no-named-as-default-member */
import React from 'react'
// eslint-disable-next-line import/no-named-as-default
import Movies from './Movies'

export default function Movie({ actor, title }) {
  return <Movies title={title} actor={actor} />
}
