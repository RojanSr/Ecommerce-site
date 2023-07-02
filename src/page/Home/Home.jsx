import React from "react";
import { Box } from "@chakra-ui/react";
import Carousel from "./Carousel";
import Offers from "./Offers";
import NewArrival from "./NewArrival";
import BigSavingZone from "./BigSavingZone";
import ContentTitle from "../../components/ContentTitle";
import Brands from "./Brands";

export default function Home() {
  return (
    <Box>
      <Carousel />
      <Offers />
      <ContentTitle text="New Arrival" />
      <NewArrival />
      <ContentTitle text="Big Saving Zone" />
      <BigSavingZone />
      <Brands />
    </Box>
  );
}
