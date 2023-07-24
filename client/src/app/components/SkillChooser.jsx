import React, { useEffect, useState } from "react";

import {
  Badge,
  Button,
  Flex,
  Grid,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import { SKILLS } from "../../constants";
import { Search2Icon } from "@chakra-ui/icons";
import { Record } from "iconsax-react";

function SkillChooser() {
  const [selected, setSelected] = useState({});
  const [filtered, setFiltered] = useState([]);
  const [search, setSearch] = useState("");
  const handleClick = (e, i) => {
    setSelected((prev) => {
      const ret = { ...prev };
      prev[i] === e ? delete ret[i] : (ret[i] = e);
      return ret;
    });
    setSearch("");
  };
  const handleChange = (e) => {
    setSearch(() => e.target.value);
  };

  const handleKeyDown = (e) => {
    const { key } = e;
    if (key === "Enter") {
      setSelected((prev) => ({ ...prev, [search.toLowerCase()]: search }));
      setSearch("");
    }
  };

  useEffect(() => {
    let ret = SKILLS.filter(
      (e) => selected[e.toLowerCase()] !== e && e.toLowerCase().includes(search)
    ).sort();
    setFiltered(() => [...Object.values(selected).sort(), ...ret]);
  }, [search, selected]);
  return (
    <Grid templateRows={{ base: "repeat(2, auto)" }} gap={6}>
      <Flex justifyContent="center">
        <Heading color="nord9" fontSize={24}>
          What skills describe you best?
        </Heading>
      </Flex>
      <Flex flexDir="column" color="nord13" alignItems="center" w="100%">
        <InputGroup w="min(95%, 350px)">
          <Input
            bg="nord1"
            variant="filled"
            fontSize={16}
            placeholder="Start Typing..."
            borderRadius="200vmax"
            value={search}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            _hover={{ backgroundColor: "transparent" }}
          />
          borderRadius="200vmax"
          <InputLeftElement>
            <Search2Icon />
          </InputLeftElement>
          <InputRightElement>
            <Record />
          </InputRightElement>
        </InputGroup>
      </Flex>

      <Flex flexWrap="wrap" gap={2} justifyContent="center" alignItems="center">
        {filtered.length !== 0 ? (
          filtered.map((e, i) => (
            <Badge
              key={`skill${i}`}
              px={2}
              py={1}
              className={
                selected[e.toLowerCase()] === e ? "badge selected" : "badge"
              }
              onClick={() => handleClick(e, e.toLowerCase())}
            >
              {e}
            </Badge>
          ))
        ) : (
          <center>
            <Text color="nord14">
              <Record /> Press enter to add
            </Text>
          </center>
        )}
      </Flex>
      {Object.keys(selected).length !== 0 && (
        <Flex justifyContent="center">
          <Button
            borderRadius="md"
            fontSize={14}
            px={4}
            py={0}
            fontWeight={700}
            bg="nord3"
            color="nord6"
            variant="outline"
            _hover={{ backgroundColor: "transparent" }}
          >
            Next
          </Button>
        </Flex>
      )}
    </Grid>
  );
}

export default SkillChooser;
