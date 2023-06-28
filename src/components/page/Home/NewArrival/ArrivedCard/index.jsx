import React from "react";
import { Box, Image, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";

export default function ArrivedCard({ imgSrc, name }) {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      style={{
        minWidth: "260px",
        maxWidth: "300px",
        cursor: "pointer",
      }}
    >
      <Image src={imgSrc} width="100%" alt="Newly Arrived Clothes" />
      <Text
        mt="33px"
        color="#3C4242"
        fontSize="20px"
        fontWeight="700"
        letterSpacing="0.2px"
      >
        {name}
      </Text>
    </motion.div>
  );
}
