import * as React from "react";
import { ChakraProvider, Box, theme } from "@chakra-ui/react";
import NavBar from "./components/ui/NavBar";
import { Logo } from "./Logo";
import Home from "./components/Home";

export const App = () => (
  <ChakraProvider theme={theme}>
    <NavBar />
    <Home />
  </ChakraProvider>
);
