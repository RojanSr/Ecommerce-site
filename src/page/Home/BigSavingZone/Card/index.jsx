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
      h={["300px", "360px", "380px", "400px"]}
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
      <Text fontSize="30px" fontWeight="800" mb="10px">
        {name}
      </Text>
      <Text fontSize="16px" fontWeight="600" mb="10px">
        {slogan}
      </Text>
      <Text fontSize="20px" fontWeight="700" mb="40px">
        {discount}
      </Text>
      <Button
        bg="none"
        border={`1px solid ${text}`}
        borderRadius="4px"
        p="16px 16px"
        fontSize="14px"
        fontWeight="500"
        color={`${text}`}
        _hover={{
          color: `${text == "#3C4242" ? "white" : "black"}`,
          bgColor: `${text}`,
        }}
      >
        SHOP NOW
      </Button>
    </Box>
  );
}
