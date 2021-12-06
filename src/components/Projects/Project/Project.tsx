import React from "react";
import { Box, Image, Badge } from "@chakra-ui/react";
import "./Project.css";

type ProjectProps = {
  description: string;
  title: string;
  skills: string;
  imageUrl: string;
  imageAlt: string;
};

const Project = ({
  imageUrl,
  imageAlt,
  description,
  title,
  skills,
}: ProjectProps) => {
  // TODO: Expand this and move to constants file
  const project = {
    imageUrl:
      "https://i.picsum.photos/id/1/5616/3744.jpg?hmac=kKHwwU8s46oNettHKwJ24qOlIAsWN9d2TtsXDoCWWsQ",
    imageAlt: "App image alt placeholder",
    title: "Developer Social Network",
    description: "React App",
    skills: "React, JavaScript",
  };
  return (
    <div className="col-lg-12">
      <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
        <Image src={imageUrl} alt={imageAlt} />

        <Box p="6">
          <Box display="flex" alignItems="baseline">
            <Badge borderRadius="full" px="2" colorScheme="teal">
              TECH:
            </Badge>
            <Box
              color="gray.500"
              fontWeight="semibold"
              letterSpacing="wide"
              fontSize="xs"
              textTransform="uppercase"
              ml="2"
            >
              {skills}
            </Box>
          </Box>

          <Box
            mt="1"
            fontWeight="semibold"
            as="h4"
            lineHeight="tight"
            isTruncated
          >
            {title}
          </Box>

          <Box>
            {description}
            <Box as="span" color="gray.600" fontSize="sm"></Box>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default Project;
