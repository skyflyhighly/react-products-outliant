import React from "react";
import { Outlet } from "react-router-dom";

// components
import Navbar from "./Navbar";
import Footer from "./Footer";

const AppLayout: React.FC = () => {
  return (
    <div className=" font-dmsans">
      <div className="max-w-5xl mx-auto">
        <Navbar />
        <Outlet />
      </div>

      <Footer />
    </div>
  );
};

export default AppLayout;
