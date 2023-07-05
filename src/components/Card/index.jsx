import React from "react";
import { Box, Text, Image, Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function Card({ imgSrc, name, id, price }) {
  return (
    <Box
      w={{ base: "110px", lg: "170px" }}
      cursor="pointer"
      transition="0.2s ease-in-out"
      _hover={{
        transform: "scale(1.05)",
      }}
    >
      <Link to={`/ProductView/${id}`}>
        <Flex
          h={{ base: "120px", lg: "180px" }}
          bg="blackAlpha.300"
          p="20px"
          borderRadius={12}
          mb="10px"
        >
          <Image
            src={imgSrc}
            width="100%"
            alt="Newly Arrived Clothes"
            objectFit="contain"
            mixBlendMode="multiply"
          />
        </Flex>
        <Text
          fontWeight="600"
          fontSize="17px"
          as="span"
          borderBottom="3px solid #5df5e2"
        >
          $ {price}
        </Text>
        <Text
          color="#3C4242"
          fontSize="14px"
          letterSpacing="0.2px"
          fontWeight="500"
          noOfLines={2}
        >
          {name}
        </Text>
      </Link>
    </Box>
  );
}
