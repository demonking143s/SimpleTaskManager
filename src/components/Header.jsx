import React from 'react'
import ToggleButton from './ToggleButton'
import { Link } from 'react-router-dom'

const Header = ({darkMode, toggleDark}) => {
  return (
    <header className="p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">To Do List</h1>
      <div>
        <Link to="/"><button className="px-4 py-2 rounded text-white">🏠</button></Link>
        <ToggleButton darkMode={darkMode} toggleDark={toggleDark} />
      </div>
    </header>
  )
}

export default Header