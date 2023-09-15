import React from "react";
import Navbar from "@/components/Navbar";
const Drawer = () => {
  return (
    <div className="drawer h-full lg:hidden min-md:visible">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Page content here */}
        {/* <label htmlFor="my-drawer" className="btn btn-primary drawer-button">Open drawer</label> */}
      </div>
      <div className="drawer-side">
        <Navbar/>
      </div>
    </div>
  );
};

export default Drawer;
