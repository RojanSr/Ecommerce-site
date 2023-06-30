import React from "react";
import { Box, Text, Button } from "@chakra-ui/react";

export default function Card({
  imgSrc,
  name,
  slogan,
  discount,
  limited,
  text,
  align,
}) {
  return (
    <Box
      h={["300px", "380px", "480px", "393px"]}
      bgImage={imgSrc}
      bgRepeat="no-repeat"
      bgPos="top"
      borderRadius={{ lg: "16px" }}
      bgSize={{ base: "cover", md: "cover", lg: "cover" }}
      color={text}
      p="70px 20px"
      textAlign={align}
      position="relative"
    >
      {/* Check if item is limited then conditionally render */}
      {limited == "true" && (
        <Box
          pos="absolute"
          right="30px"
          top="30px"
          bgColor="#3C4242"
          color="white"
          padding="8px 12px"
          fontSize="12px"
          borderRadius="4px"
        >
          Limited Stock
        </Box>
      )}

      {/* Text Section */}
      <Text fontSize="28px" fontWeight="800">
        {name}
      </Text>
      <Text fontSize="14px" fontWeight="600">
        {slogan}
      </Text>
      <Text fontSize="18px" fontWeight="700">
        {discount}
      </Text>
    </Box>
  );
}
