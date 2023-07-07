import React, { useContext } from "react";
import { ProductContext } from "../ProductContext";
import { Box, Flex } from "@chakra-ui/react";
import ContentTitle from "../../components/ContentTitle";
import Card from "../../components/Card";

export default function Combo() {
  // Retrieving through context
  const products = useContext(ProductContext);

  return (
    <Box>
      <ContentTitle text="Combo" />
      <Flex
        wrap="wrap"
        gap="50"
        mx={{ base: "20px", lg: "100px" }}
        justifyContent="center"
      >
        {products.map((el, index) => {
          return (
            <Card
              imgSrc={el.image}
              name={el.title}
              id={el.id}
              key={index}
              price={el.price}
            />
          );
        })}
      </Flex>
    </Box>
  );
}
