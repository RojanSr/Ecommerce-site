import React from "react";
import { Box, Heading } from "@chakra-ui/react";

export default function HeaderTitle({ text }) {
  return (
    <Box
      pos="relative"
      _before={{
        content: "''",
        pos: "absolute",
        height: "100%",
        width: "6px",
        borderRadius: "10px",
        bgColor: "#8A33FD",
      }}
    >
      <Heading
        as="h2"
        fontSize="34px"
        fontWeight="600"
        letterSpacing="0.68px"
        ml="20px"
      >
        {text}
      </Heading>
    </Box>
  );
}
