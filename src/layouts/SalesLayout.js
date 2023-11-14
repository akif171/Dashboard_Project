import React from "react";
import { Outlet } from "react-router-dom";

const SalesLayout = ({ children }) => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default SalesLayout;
