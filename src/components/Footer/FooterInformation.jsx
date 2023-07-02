import React from "react";
import { Flex, Heading, Text } from "@chakra-ui/react";

export default function FooterInformation() {
  const headingStyles = {
    fontSize: "28px",
    marginBottom: "20px",
  };
  return (
    <>
      <Flex color="#F6F6F6" justifyContent="space-between" gap="80px" py="60px">
        <Flex direction="column" gap="15px">
          <Heading style={headingStyles}>Need Help</Heading>
          <Text>Contact Us</Text>
          <Text>Track Order</Text>
          <Text>Returns & Refunds</Text>
          <Text>FAQ's</Text>
          <Text>Career</Text>
        </Flex>
        <Flex direction="column" gap="15px">
          <Heading style={headingStyles}>Company</Heading>
          <Text>About Us</Text>
          <Text>euphoria Blog</Text>
          <Text>euphoriastan</Text>
          <Text>Collaboration</Text>
          <Text>Media</Text>
        </Flex>
        <Flex direction="column" gap="15px">
          <Heading style={headingStyles}>More Info</Heading>
          <Text>Term and Conditions</Text>
          <Text>Privacy Policy</Text>
          <Text>Shipping Policy</Text>
          <Text>Sitemap</Text>
        </Flex>
        <Flex direction="column" gap="15px">
          <Heading style={headingStyles}>Location</Heading>
          <Text>support@euphoria.in</Text>
          <Text>Eklingpura Chouraha, Ahmedabad Main Road</Text>
          <Text>(NH 8- Near Mahadev Hotel) Udaipur, India- 313002</Text>
        </Flex>
      </Flex>
    </>
  );
}
