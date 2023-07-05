import React, { useState } from "react";
import { Box, Flex, Image, List, ListItem, Input } from "@chakra-ui/react";
import Logo from "../../../assets/Logo/Logo.png";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [hamToggle, setHamToggle] = useState(false);

  const personaliseStyle = {
    padding: "12px",
    borderRadius: "8px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "#F6F6F6",
    cursor: "pointer",
  };

  const hoverStyle = {
    color: "black",
    cursor: "pointer",
  };
  return (
    <Flex
      as="nav"
      minH="108px"
      alignItems="center"
      justifyContent="space-between"
      mx={["30px", "40px", "40px", "80px"]}
      color="#807D7E"
      gap="20px"
    >
      <Link to="/">
        <Image src={Logo} h="40px"></Image>
      </Link>

      <Flex gap={["12px", "30px"]} display={["none", "none", "flex"]}>
        <List
          display="flex"
          justifyContent="center"
          alignItems="center"
          gap={["15px", "15px", "20px", "40px"]}
        >
          <ListItem _hover={hoverStyle}>Shop</ListItem>
          <ListItem _hover={hoverStyle}>Men</ListItem>
          <ListItem _hover={hoverStyle}>Women</ListItem>
          <ListItem _hover={hoverStyle}>Combo</ListItem>
        </List>

        <Input
          type="text"
          size="md"
          w={["80px", "100px", "150px", "300px"]}
          placeholder="Search"
        ></Input>

        <Flex gap={["10px", "12px", "20px"]}>
          <Box style={personaliseStyle}>
            <i className="fa-regular fa-heart"></i>
          </Box>

          <Box style={personaliseStyle}>
            <i className="fa-regular fa-user"></i>
          </Box>
          <Box style={personaliseStyle}>
            <i className="fa-solid fa-cart-shopping"></i>
          </Box>
        </Flex>
      </Flex>
      <Flex display={["flex", "flex", "none"]}>
        <Input
          type="text"
          size="md"
          w={["130px", "200px"]}
          placeholder="Search"
          mr="30px"
        ></Input>
        <Box style={personaliseStyle} onClick={() => setHamToggle(true)}>
          <HamburgerIcon />
        </Box>

        {hamToggle && (
          <Box
            position="absolute"
            bgColor="blue.600"
            color="whiteAlpha.800"
            right="0"
            top="0"
            minH="100vh"
            p="30px 100px 30px 30px"
            zIndex={100}
          >
            <List
              display="flex"
              flexDirection="column"
              gap={["15px", "15px", "15px", "40px"]}
            >
              <Box
                transform="translateX(110px)"
                w="20px"
                cursor="pointer"
                onClick={() => setHamToggle(false)}
              >
                <CloseIcon />
              </Box>
              <ListItem cursor="pointer">Shop</ListItem>
              <ListItem cursor="pointer">Men</ListItem>
              <ListItem cursor="pointer">Women</ListItem>
              <ListItem cursor="pointer">Combo</ListItem>
            </List>
          </Box>
        )}
      </Flex>
    </Flex>
  );
}
