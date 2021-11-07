import React from "react";

import {
  Box,
  Flex,
  Button,
  Menu,
  MenuButton,
  useColorModeValue,
  Stack,
  Center,
  Link,
} from "@chakra-ui/react";

const NavBar = () => {
  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-around"}>
          <Box>Ryan Silva</Box>

          <Flex alignItems={"center"}>
            <Stack direction={"row"} spacing={7}>
              <Link style={{ textDecoration: "none" }} href="#">
                Home
              </Link>
              <Link style={{ textDecoration: "none" }} href="#">
                About Me
              </Link>
              <Link style={{ textDecoration: "none" }} href="#">
                Resume
              </Link>
              <Link style={{ textDecoration: "none" }} href="#">
                Conact Me
              </Link>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
};

export default NavBar;
