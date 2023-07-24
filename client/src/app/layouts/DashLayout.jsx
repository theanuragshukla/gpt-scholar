import { Grid, GridItem } from "@chakra-ui/react";
import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../common/Navbar";

function DashLayout() {
  return (
    <Grid templateRows={{ base: "60px calc(100vh - 60px)" }}>
      <GridItem>
        <Navbar />
      </GridItem>
      <GridItem py={8} overflow="auto">
        <Outlet />
      </GridItem>
    </Grid>
  );
}

export default DashLayout;
