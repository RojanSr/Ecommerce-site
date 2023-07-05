import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";
import SizeSelect from "./SizeSelect";

export default function ProductDetails(props) {
  return (
    <Box color="#3C4242">
      <Heading fontSize={{ base: "22px", lg: "34px" }} fontWeight="600">
        {props.title}
      </Heading>
      <SizeSelect />
      <Text my="20px">
        Price:{" "}
        <Text as="span" color="red.500">
          {props.price}$
        </Text>
      </Text>
    </Box>
  );
}
