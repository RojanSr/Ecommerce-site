import React, { useContext } from "react";
import { ProductContext } from "../ProductContext";
import { Box, Flex, Heading } from "@chakra-ui/react";
import ContentTitle from "../../components/ContentTitle";
import Card from "../../components/Card";

export default function Combo() {
  // Retrieving through context
  const products = useContext(ProductContext);

  return (
    <Box>
      <ContentTitle text="Combo" />
      <Flex wrap="wrap" gap="50" justifyContent="center" mx={10}>
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
