import React from "react";
import { Outlet } from "react-router-dom";

// components
import Navbar from "./Navbar";

const AppLayout: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto font-dmsans">
      <Navbar></Navbar>
      <Outlet />
    </div>
  );
};

export default AppLayout;
