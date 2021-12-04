import React from "react";
import { Box, Image, Badge } from "@chakra-ui/react";

type ProjectProps = {
  description: string;
  title: string;
  skills: string;
};

const Project = ({ description, title, skills }: ProjectProps) => {
  // TODO: Expand this and move to constants file
  const project = {
    imageUrl: "https://bit.ly/2Z4KKcF",
    imageAlt: "App image alt laceholder",
    title: "Developer Social Network",
    description: "React App",
  };

  return (
    <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Image src={project.imageUrl} alt={project.imageAlt} />

      <Box p="6">
        <Box display="flex" alignItems="baseline">
          <Badge borderRadius="full" px="2" colorScheme="teal">
            React
          </Badge>
          <Box
            color="gray.500"
            fontWeight="semibold"
            letterSpacing="wide"
            fontSize="xs"
            textTransform="uppercase"
            ml="2"
          >
            Full stack &bull; Web app
          </Box>
        </Box>

        <Box
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          isTruncated
        >
          {project.title}
        </Box>

        <Box>
          {project.description}
          <Box as="span" color="gray.600" fontSize="sm"></Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Project;
