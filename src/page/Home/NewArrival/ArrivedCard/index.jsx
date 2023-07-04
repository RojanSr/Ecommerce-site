import React from "react";
import { Box, Image, Text } from "@chakra-ui/react";

export default function ArrivedCard({ imgSrc, name, id }) {
  return (
    <Box
      minW={{ base: "100px", md: "150px", lg: "200px" }}
      maxW={{ base: "110px", lg: "220px" }}
      cursor="pointer"
      transition="0.2s ease-in-out"
      _hover={{
        transform: "scale(1.05)",
      }}
    >
      <Box h={{ base: "150px", lg: "300px" }}>
        <Image
          src={imgSrc}
          width="100%"
          alt="Newly Arrived Clothes"
          objectFit="contain"
        />
      </Box>
      <Text
        mt={{ base: "10px", lg: "33px" }}
        color="#3C4242"
        fontSize={{ base: "14px", lg: "18px" }}
        fontWeight="700"
        letterSpacing="0.2px"
      >
        {name}
      </Text>
    </Box>
  );
}
