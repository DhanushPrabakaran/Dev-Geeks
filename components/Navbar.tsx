import React from 'react'

const Navbar = () => {
  return (
    <ul className="menu items-center text-start  p-4 w-44 h-full bg-base-200 text-base-content opacity-80">
          {/* Sidebar content here */}
          <li
          className=" btn  text-left w-full hover:bg-base-100  m-1">🏠 Home</li>
          <li
          className=" btn text-left w-full hover:bg-base-100 m-1">💭 Idea</li>
          <li
          className=" btn text-left w-full hover:bg-base-100 m-1">💻 Projects</li>
          <li
          className=" btn text-left w-full hover:bg-base-100 m-1">👥 Groups</li>
          <li
          className=" btn text-left w-full hover:bg-base-100 m-1">📝Test</li>
          <li
          className=" btn text-left w-full hover:bg-base-100 m-1">📦β Vers</li>
          
        </ul>
  )
}

export default Navbar