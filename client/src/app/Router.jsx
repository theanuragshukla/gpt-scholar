import React from "react";
import { Route, Routes } from "react-router-dom";
import DashLayout from "./layouts/DashLayout";
import DashboardContainer from "./containers/Dashboard.Container";

function Router() {
  return (
    <Routes>
      <Route element={<DashLayout />}>
        <Route path="/" element={<DashboardContainer />} />
      </Route>
    </Routes>
  );
}

export default Router;
