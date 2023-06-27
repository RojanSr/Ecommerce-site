import React from "react";
import { Box } from "@chakra-ui/react";
import Navbar from "./components/Header/Navbar";
import Home from "./components/Home/Home.jsx";

export default function App() {
  return (
    <Box minW="100vw" maxW="100vw" overflow="hidden">
      <Navbar />
      <Home />
    </Box>
  );
}
