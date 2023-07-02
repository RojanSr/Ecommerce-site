import React from "react";
import { Box } from "@chakra-ui/react";
import Navbar from "./page/Header/Navbar.jsx";
import Home from "./page/Home/Home.jsx";
import Footer from "./components/Footer";

export default function App() {
  return (
    <Box minW="100vw" maxW="100vw" overflow="hidden">
      <Navbar />
      <Home />
      <Footer />
    </Box>
  );
}
