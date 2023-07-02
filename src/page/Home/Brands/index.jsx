import React from "react";
import { VStack, Heading, Text, Flex, Image, Box } from "@chakra-ui/react";
import brandData from "./BrandsData";

export default function Brands() {
  return (
    <VStack
      bg="#3C4242"
      my="100px"
      mx={["30px", "40px", "40px", "80px"]}
      borderRadius="12px"
      color="#fff"
      py="50px"
    >
      <Heading>Top Brands Deal</Heading>
      <Text>
        Up To
        <Text as="span" color="#FBD103" fontWeight="600">
          {" "}
          60%{" "}
        </Text>
        off on brands
      </Text>
      <Flex justifyContent="center" gap="25px" p="12px" wrap="wrap">
        {brandData.map((image, index) => {
          return (
            <Box p="12px" bg="#fff" borderRadius="12px" key={index}>
              <Image
                w={{ base: "60px", lg: "149.085px" }}
                h={{ base: "30px", lg: "53.469px" }}
                src={image}
                objectFit="contain"
              />
            </Box>
          );
        })}
      </Flex>
    </VStack>
  );
}
