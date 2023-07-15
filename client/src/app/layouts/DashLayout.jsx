import { Grid, GridItem } from "@chakra-ui/react";
import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../common/Navbar";

function DashLayout() {
  return (
    <Grid templateRows="60px 1fr">
      <GridItem>
        <Navbar />
      </GridItem>
      <GridItem>
        <Outlet />
      </GridItem>
    </Grid>
  );
}

export default DashLayout;
