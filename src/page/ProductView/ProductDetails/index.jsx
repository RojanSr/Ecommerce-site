import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";
import SizeSelect from "./SizeSelect";

export default function ProductDetails(props) {
  return (
    <Box color="#3C4242">
      <Heading fontSize="34px" fontWeight="600">
        {props.title}
      </Heading>
      <SizeSelect />
      <Text>Price: {props.price}</Text>
    </Box>
  );
}
