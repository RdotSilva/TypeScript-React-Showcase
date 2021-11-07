import {
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import React from "react";
import code from "../assets/code.jfif";

const Home = () => {
  return (
    <Stack direction={{ base: "column", md: "row" }}>
      <Flex p={8} flex={1} align={"center"} justify={"center"}>
        <Stack spacing={6} w={"full"} maxW={"lg"}>
          <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
            <Text
              as={"span"}
              position={"relative"}
              _after={{
                content: "''",
                width: "full",
                height: useBreakpointValue({ base: "20%", md: "30%" }),
                position: "absolute",
                bottom: 1,
                left: 0,
                bg: "#7552f2",
                zIndex: -1,
              }}
            >
              Hello, I'm Ryan
            </Text>
            <br />{" "}
            <Text color={"#7552f2"} as={"span"}>
              a Software Engineer
            </Text>{" "}
          </Heading>
          <Text fontSize={{ base: "md", lg: "lg" }} color={"gray.500"}>
            Full stack developer with a passion for learning new things
          </Text>
          <Stack direction={{ base: "column", md: "row" }} spacing={4}>
            <Button
              rounded={"full"}
              bg={"purple.500"}
              color={"white"}
              _hover={{
                bg: "#7552f2",
              }}
            >
              Contact Me
            </Button>
            <Button rounded={"full"}>Resume</Button>
          </Stack>
        </Stack>
      </Flex>
      <Flex flex={0.5}>
        <Image alt={"Login Image"} objectFit={"cover"} src={code} />
      </Flex>
    </Stack>
  );
};

export default Home;
