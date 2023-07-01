import React from "react";
import { VStack, Text, Button, Flex } from "@chakra-ui/react";

export default function CarouselCard(props) {
  return (
    <Flex
      h="550px"
      color={{
        base: props.allTextColor ? props.allTextColor : "white",
        lg: "white",
      }}
      bgImg={props.imgSrc}
      bgPosition={props.position}
      bgSize="cover"
      bgRepeat="no-repeat"
      alignItems="center"
    >
      <VStack alignItems="initial" maxW="439px" ml={["50px", "100px"]}>
        <Text as="h3" color="black">
          {props.category}
        </Text>
        <Text as="h2" fontSize="50px" fontWeight="700" lineHeight="1" my="20px">
          {props.mainText}
        </Text>
        <Text>{props.description}</Text>
        <Button size="md" p="16px 72px" w="250px" bgColor="white" my="10px">
          Shop now
        </Button>
      </VStack>
    </Flex>
  );
}
