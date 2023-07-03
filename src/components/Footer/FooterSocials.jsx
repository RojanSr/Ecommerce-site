import React from "react";
import { Flex, Box, Heading, Image, Text } from "@chakra-ui/react";
import {
  BiLogoFacebook,
  BiLogoInstagram,
  BiLogoTwitter,
  BiLogoLinkedin,
} from "react-icons/bi";
import googleStore from "../../../assets/AppStore/googleplaystore.png";
import appStore from "../../../assets/AppStore/appstore.png";

export default function FooterSocials() {
  const logoStyle = {
    backgroundColor: "#F6F6F6",
    color: "#2A2F2F",
    padding: "8px",
    borderRadius: "12px",
  };
  return (
    <Flex
      justifyContent="space-between"
      alignItems="center"
      color="#F6F6F6"
      fontSize="28px"
      display={{ base: "block", lg: "flex" }}
    >
      <Flex gap="6px" mb="30px">
        <Box>
          <BiLogoFacebook fontSize="2.4rem" style={logoStyle} />
        </Box>
        <Box>
          <BiLogoInstagram fontSize="2.4rem" style={logoStyle} />
        </Box>
        <Box>
          <BiLogoTwitter fontSize="2.4rem" style={logoStyle} />
        </Box>
        <Box>
          <BiLogoLinkedin fontSize="2.4rem" style={logoStyle} />
        </Box>
      </Flex>
      <Flex direction="column">
        <Heading fontSize={{ base: "18px", lg: "28px" }}>
          Download the App
        </Heading>
        <Flex my="19px">
          <Image
            src={googleStore}
            w={{ base: "120px", lg: "200px" }}
            cursor="pointer"
            transition="transform 0.2s ease-in-out"
            _hover={{ transform: "scale(1.025)" }}
          />
          <Image
            src={appStore}
            w={{ base: "120px", lg: "200px" }}
            cursor="pointer"
            transition="transform 0.2s ease-in-out"
            _hover={{ transform: "scale(1.025)" }}
          />
        </Flex>
      </Flex>
    </Flex>
  );
}
