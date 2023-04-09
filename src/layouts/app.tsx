import React from "react";
import { Outlet } from "react-router-dom";

const AppLayout: React.FC = () => {
  return (
    <>
      App Layout
      <Outlet />
    </>
  );
};

export default AppLayout;
