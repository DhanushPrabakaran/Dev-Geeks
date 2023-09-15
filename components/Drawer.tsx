import React from "react";

const Drawer = () => {
  return (
    <div className="drawer h-full lg:hidden min-md:visible">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Page content here */}
        {/* <label htmlFor="my-drawer" className="btn btn-primary drawer-button">Open drawer</label> */}
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer" className="drawer-overlay"></label>
        <ul className="menu items-center text-start  p-4 w-44 h-full bg-base-200 text-base-content opacity-80">
          {/* Sidebar content here */}
          <li
          className=" btn  text-left w-full  m-1">🏠 Home</li>
          <li
          className=" btn text-left w-full m-1">💭 Idea</li>
          <li
          className=" btn text-left w-full m-1">💻 Projects</li>
          <li
          className=" btn text-left w-full m-1">👥 Groups</li>
          <li
          className=" btn text-left w-full m-1">📝Test</li>
          <li
          className=" btn text-left w-full m-1">📦β Vers</li>
          
        </ul>
      </div>
    </div>
  );
};

export default Drawer;
