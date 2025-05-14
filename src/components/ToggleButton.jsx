import React from 'react'

const ToggleButton = ({toggleDark, darkMode}) => {
  return (
    <button
        onClick={toggleDark}
        className="px-4 py-2 rounded bg-gray-800 text-white dark:bg-gray-200 dark:text-black"
    >
        {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
    </button>
  )
}

export default ToggleButton
  