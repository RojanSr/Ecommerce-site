import React from "react";
import { Flex, Heading, Text } from "@chakra-ui/react";

export default function FooterInformation() {
  return (
    <>
      <Flex
        color="#F6F6F6"
        justifyContent="space-between"
        gap={{ base: "10px", lg: "80px" }}
        py="60px"
        wrap="wrap"
      >
        <Flex direction="column" gap={{ base: "5px", lg: "15px" }}>
          <Heading fontSize={{ base: "18px", lg: "28px" }} my="20px">
            Need Help
          </Heading>
          <Text fontSize={{ base: "12px", lg: "18px" }}>Contact Us</Text>
          <Text fontSize={{ base: "12px", lg: "18px" }}>Track Order</Text>
          <Text fontSize={{ base: "12px", lg: "18px" }}>Returns & Refunds</Text>
          <Text fontSize={{ base: "12px", lg: "18px" }}>FAQ's</Text>
          <Text fontSize={{ base: "12px", lg: "18px" }}>Career</Text>
        </Flex>
        <Flex direction="column" gap={{ base: "5px", lg: "15px" }}>
          <Heading fontSize={{ base: "18px", lg: "28px" }} my="20px">
            Company
          </Heading>
          <Text fontSize={{ base: "12px", lg: "18px" }}>About Us</Text>
          <Text fontSize={{ base: "12px", lg: "18px" }}>euphoria Blog</Text>
          <Text fontSize={{ base: "12px", lg: "18px" }}>euphoriastan</Text>
          <Text fontSize={{ base: "12px", lg: "18px" }}>Collaboration</Text>
          <Text fontSize={{ base: "12px", lg: "18px" }}>Media</Text>
        </Flex>
        <Flex direction="column" gap={{ base: "5px", lg: "15px" }}>
          <Heading fontSize={{ base: "18px", lg: "28px" }} my="20px">
            More Info
          </Heading>
          <Text fontSize={{ base: "12px", lg: "18px" }}>
            Term and Conditions
          </Text>
          <Text fontSize={{ base: "12px", lg: "18px" }}>Privacy Policy</Text>
          <Text fontSize={{ base: "12px", lg: "18px" }}>Shipping Policy</Text>
          <Text fontSize={{ base: "12px", lg: "18px" }}>Sitemap</Text>
        </Flex>
        <Flex direction="column" gap={{ base: "5px", lg: "15px" }}>
          <Heading fontSize={{ base: "18px", lg: "28px" }} my="20px">
            Location
          </Heading>
          <Text fontSize={{ base: "12px", lg: "18px" }}>
            support@euphoria.in
          </Text>
          <Text fontSize={{ base: "12px", lg: "18px" }}>
            Eklingpura Chouraha, Ahmedabad Main Road
          </Text>
          <Text fontSize={{ base: "12px", lg: "18px" }}>
            (NH 8- Near Mahadev Hotel) Udaipur, India- 313002
          </Text>
        </Flex>
      </Flex>
    </>
  );
}
