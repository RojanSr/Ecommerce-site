import React from "react";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function ArrivedCard({ imgSrc, name, id }) {
  return (
    <Box
      // minW={{ base: "100px", md: "150px", lg: "160px" }}
      // maxW={{ base: "110px", lg: "160px" }}
      w={{ base: "110px", lg: "170px" }}
      cursor="pointer"
      transition="0.2s ease-in-out"
      _hover={{
        transform: "scale(1.05)",
      }}
    >
      <Link to={`/ProductView/${id}`}>
        <Flex h={{ base: "150px", lg: "300px" }}>
          <Image
            src={imgSrc}
            width="100%"
            alt="Newly Arrived Clothes"
            objectFit="contain"
          />
        </Flex>
        <Text
          color="#3C4242"
          fontSize={{ base: "14px", lg: "16px" }}
          fontWeight="700"
          letterSpacing="0.2px"
        >
          {name}
        </Text>
      </Link>
    </Box>
  );
}
