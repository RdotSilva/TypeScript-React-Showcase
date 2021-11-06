import * as React from "react";
import { ChakraProvider, Box, theme } from "@chakra-ui/react";
import Navbar from "./components/ui/Navbar";
import { Logo } from "./Logo";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Navbar />
  </ChakraProvider>
);
