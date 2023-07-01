import React from "react";
import { Box, Image, Text } from "@chakra-ui/react";

export default function ArrivedCard({ imgSrc, name }) {
  return (
    <Box
      minW={{ base: "100px", md: "150px", lg: "200px" }}
      maxW={{ base: "110px", lg: "220px" }}
      cursor="pointer"
      transition="0.2s ease-in-out"
      _hover={{
        transform: "scale(1.1)",
      }}
    >
      <Image src={imgSrc} width="100%" alt="Newly Arrived Clothes" />
      <Text
        mt={{ base: "10px", lg: "33px" }}
        color="#3C4242"
        fontSize={{ base: "14px", lg: "20px" }}
        fontWeight="700"
        letterSpacing="0.2px"
      >
        {name}
      </Text>
    </Box>
  );
}
