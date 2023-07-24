import { Flex } from "@chakra-ui/react";
import React from "react";
import SkillChooser from "./SkillChooser";

function Dashboard() {
  return (
    <Flex w="100%" justifyContent="center">
      <SkillChooser />
    </Flex>
  );
}

export default Dashboard;
