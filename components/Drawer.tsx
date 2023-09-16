import React from "react";
import Link from "next/link";
const Drawer = () => {
  return (
    <div className="drawer h-full lg:hidden min-md:visible ">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Page content here */}
        {/* <label htmlFor="my-drawer" className="btn btn-primary drawer-button">Open drawer</label> */}
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer" className="drawer-overlay"></label>
        <ul className="menu items-center text-start  p-4 w-44 h-full bg-base-200 text-base-content opacity-80">
          {/* Sidebar content here */}
          <Link
          href={"/"}
          className=" btn btn-secondary  text-left w-full hover:bg-base-100 hover:text-secondary-focus  m-1">🏠 Home</Link>
          <Link
          href={"/Idea"}
          className=" btn btn-secondary text-left w-full hover:bg-base-100 hover:text-secondary-focus m-1">💭 Idea</Link>
          <Link
          href={"/project"}
          className=" btn btn-secondary text-left w-full hover:bg-base-100 hover:text-secondary-focus m-1">💻 Projects</Link>
          <Link
          href={"/Groups"}
          className=" btn btn-secondary text-left w-full hover:bg-base-100 hover:text-secondary-focus m-1">👥 Groups</Link>
          <Link
          href={"/📝Test"}
          className=" btn btn-secondary text-left w-full hover:bg-base-100 hover:text-secondary-focus m-1">📝Test</Link>
          <Link
          href={"/Vers"}
          className=" btn btn-secondary text-left w-full hover:bg-base-100 hover:text-secondary-focus m-1">📦β Vers</Link>
          
        </ul>
      </div>
    </div>
  );
};

export default Drawer;
