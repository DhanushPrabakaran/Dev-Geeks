import React from 'react'
import Link from 'next/link'
const Navbar = () => {
  return (
    <ul className="menu items-center text-start  p-4 w-44 h-full bg-base-200 text-base-content opacity-80">
          {/* Sidebar content here */}
          <Link
          href={"/"}
          className=" btn  text-left w-full hover:bg-base-100  m-1">🏠 Home</Link>
          <Link
          href={"/Idea"}
          className=" btn text-left w-full hover:bg-base-100 m-1">💭 Idea</Link>
          <Link
          href={"/project"}
          className=" btn text-left w-full hover:bg-base-100 m-1">💻 Projects</Link>
          <Link
          href={"/Groups"}
          className=" btn text-left w-full hover:bg-base-100 m-1">👥 Groups</Link>
          <Link
          href={"/📝Test"}
          className=" btn text-left w-full hover:bg-base-100 m-1">📝Test</Link>
          <Link
          href={"/Vers"}
          className=" btn text-left w-full hover:bg-base-100 m-1">📦β Vers</Link>
          
        </ul>
  )
}

export default Navbar