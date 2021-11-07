import * as React from "react";
import { ChakraProvider, Box, theme } from "@chakra-ui/react";
import NavBar from "./components/ui/NavBar";
import { Logo } from "./Logo";

export const App = () => (
  <ChakraProvider theme={theme}>
    <NavBar />
  </ChakraProvider>
);
