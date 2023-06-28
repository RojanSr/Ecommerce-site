import React from "react";
import { Box, Text } from "@chakra-ui/react";

export default function OfferCard({ imgSrc }) {
  return (
    <Box
      color="#fff"
      bgImage={imgSrc}
      bgRepeat="no-repeat"
      bgSize="cover"
      width={["300px", "450px", "604.934px"]}
      height={["180px", "230px", "280px", "355.844px"]}
      p="67px 28px"
      m="0px auto 30px auto"
      borderRadius="12px"
    >
      <Text as="h3" fontSize="18px">
        Low Price
      </Text>
      <Text as="h2" fontSize="34px" fontWeight="700" mt="24px">
        High Coziness
      </Text>
      <Text fontSize="16px" fontWeight="400" mt="9px">
        UPTO 50% OFF
      </Text>
      <Text
        display="inline-block"
        borderBottom="1px solid rgba(255,255,255,0.3)"
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
