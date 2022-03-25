import React from 'react'

import { NavLink } from 'react-router-dom'

function Navigation() {
  const defaultStyle = 'block text-gray-700 text-base font-bold py-1 list-none'
  const link = ({ isActive }) =>
    isActive ? `${defaultStyle} text-green-500` : `${defaultStyle}`

  return (
    <header className="mb-16 w-full border bg-white px-6">
      <nav className="w-full">
        <ul className="flex gap-2">
          <li>
            <NavLink className={link} to="/Home">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className={link} to="/Actors">
              Actors
            </NavLink>
          </li>
          <li>
            <NavLink className={link} to="/Movies">
              Movies
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Navigation
