import { Avatar, Flex, Grid, Heading, Show } from "@chakra-ui/react";
import { Menu } from "iconsax-react";
import { Link } from "react-router-dom";

import "../../styles/navbar.scss";

function Logo() {
  return (
    <Grid>
      <Heading fontSize={18}>Scholar@GPT</Heading>
    </Grid>
  );
}

function Links() {
  return (
    <Flex gap={16} fontSize={16} fontWeight={500} color="nord13">
      <Link>Dashboard</Link>
      <Link>Learn</Link>
      <Link>Interact</Link>
    </Flex>
  );
}
function Profile() {
  return (
    <Flex
      justify="center"
      alignItems="center"
      gap="4"
      borderRadius="200vmax"
      bg="whiteAlpha.200"
      px={2}
      py={1}
    >
      <Avatar size="xs" />
      <Menu size={18} />
    </Flex>
  );
}

export default function Navbar() {
  return (
    <Flex
      color="nord8"
      h="60px"
      justify="space-between"
      alignItems="center"
      px={16}
      className="navbar"
      flexWrap="wrap"
    >
      <Logo />
      <Show above="md">
        <Links />
      </Show>
      <Profile />
    </Flex>
  );
}
