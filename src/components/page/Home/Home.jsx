import React from "react";
import { Box } from "@chakra-ui/react";
import Carousel from "./Carousel";
import Offers from "./Offers";
import NewArrival from "./NewArrival";

export default function Home() {
  return (
    <Box>
      <Carousel />
      <Offers />
      <NewArrival />
    </Box>
  );
}
