import React from "react";
import SubTabs from "../components/SubTabs";
import { Outlet } from "react-router-dom";

const CandidPersonalLayout = () => {
  return (
    <div>
      <SubTabs />
      <Outlet />
    </div>
  );
};

export default CandidPersonalLayout;
