import React from "react";
import ArrivedCard from "./ArrivedCard";
import { Flex, Box } from "@chakra-ui/react";
import imgHolder1 from "../../../../../assets/NewArrival/Knitted_Joggers.jpg";
import imgHolder2 from "../../../../../assets/NewArrival/Active_TShirt.jpg";
import imgHolder3 from "../../../../../assets/NewArrival/Urban_Shirts.jpg";
import imgHolder4 from "../../../../../assets/NewArrival/Full_Sleeve.jpg";
import HeaderTitle from "../../../HeaderTitle/HeaderTitle";

export default function NewArrival() {
  return (
    <Box mx={["30px", "40px", "40px", "80px"]}>
      <HeaderTitle text="New Arrival" />

      <Flex justifyContent="center" gap="70px" my="70px">
        <ArrivedCard imgSrc={imgHolder1} name="Knitted Joggers" />
        <ArrivedCard imgSrc={imgHolder2} name="Active T-Shirts" />
        <ArrivedCard imgSrc={imgHolder3} name="Urban Shirts" />
        <ArrivedCard imgSrc={imgHolder4} name="Full Sleeves" />
      </Flex>
    </Box>
  );
}
