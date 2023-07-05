import React from "react";
import { Box, Text } from "@chakra-ui/react";

export default function OfferCard({ imgSrc, topText, mainText, discountText }) {
  return (
    <Box
      color="#fff"
      bgImage={imgSrc}
      bgRepeat="no-repeat"
      bgSize="cover"
      bgPos={["right", "center", "center"]}
      width={["300px", "450px", "500px"]}
      minH={["250px", "250px", "270px"]}
      p={["20px 12px", "20px 12px", "67px 28px"]}
      m="0px auto 30px auto"
      borderRadius="12px"
      transition="transform 0.1s ease-in"
      _hover={{
        transform: "scale(1.02)",
      }}
    >
      <Text as="h3" fontSize="18px">
        {topText}
      </Text>
      <Text as="h2" fontSize={["30px", "34px"]} fontWeight="700" mt="24px">
        {mainText}
      </Text>
      <Text fontSize="16px" fontWeight="400" mt="9px">
        {discountText}
      </Text>
      <Text
        // borderBottom="1px solid rgba(255,255,255,0.3)"
        display="inline-block"
        textDecorationLine="underline"
        textDecorationColor="rgba(255,255,255,0.3)"
        textUnderlineOffset="5px"
        lineHeight="30px"
        fontSize="20px"
        fontWeight="800"
        mt="42px"
        cursor="pointer"
        _hover={{
          color: "rgba(255,255,255,0.7)",
        }}
      >
        Explore Items
      </Text>
    </Box>
  );
}
