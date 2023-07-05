import React from "react";
import { Flex, Heading, Text } from "@chakra-ui/react";

export default function FooterInformation() {
  return (
    <>
      <Flex
        color="#F6F6F6"
        justifyContent="space-between"
        gap={{ base: "10px", lg: "40px" }}
        py="60px"
        wrap="wrap"
      >
        <Flex direction="column" gap={{ base: "5px", lg: "15px" }}>
          <Heading fontSize={{ base: "18px", lg: "28px" }} my="20px">
            Need Help
          </Heading>
          <Text fontSize={{ base: "12px", lg: "14px" }}>Contact Us</Text>
          <Text fontSize={{ base: "12px", lg: "14px" }}>Track Order</Text>
          <Text fontSize={{ base: "12px", lg: "14px" }}>Returns & Refunds</Text>
          <Text fontSize={{ base: "12px", lg: "14px" }}>FAQ's</Text>
          <Text fontSize={{ base: "12px", lg: "14px" }}>Career</Text>
        </Flex>
        <Flex direction="column" gap={{ base: "5px", lg: "15px" }}>
          <Heading fontSize={{ base: "18px", lg: "28px" }} my="20px">
            Company
          </Heading>
          <Text fontSize={{ base: "12px", lg: "14px" }}>About Us</Text>
          <Text fontSize={{ base: "12px", lg: "14px" }}>euphoria Blog</Text>
          <Text fontSize={{ base: "12px", lg: "14px" }}>euphoriastan</Text>
          <Text fontSize={{ base: "12px", lg: "14px" }}>Collaboration</Text>
          <Text fontSize={{ base: "12px", lg: "14px" }}>Media</Text>
        </Flex>
        <Flex direction="column" gap={{ base: "5px", lg: "15px" }}>
          <Heading fontSize={{ base: "18px", lg: "28px" }} my="20px">
            More Info
          </Heading>
          <Text fontSize={{ base: "12px", lg: "14px" }}>
            Term and Conditions
          </Text>
          <Text fontSize={{ base: "12px", lg: "14px" }}>Privacy Policy</Text>
          <Text fontSize={{ base: "12px", lg: "14px" }}>Shipping Policy</Text>
          <Text fontSize={{ base: "12px", lg: "14px" }}>Sitemap</Text>
        </Flex>
        <Flex direction="column" gap={{ base: "5px", lg: "15px" }}>
          <Heading fontSize={{ base: "18px", lg: "28px" }} my="20px">
            Location
          </Heading>
          <Text fontSize={{ base: "12px", lg: "14px" }}>
            support@euphoria.in
          </Text>
          <Text fontSize={{ base: "12px", lg: "14px" }}>
            Eklingpura Chouraha, Ahmedabad Main Road
          </Text>
          <Text fontSize={{ base: "12px", lg: "14px" }}>
            (NH 8- Near Mahadev Hotel) Udaipur, India- 313002
          </Text>
        </Flex>
      </Flex>
    </>
  );
}
