import React, { useContext } from "react";
import ContentTitle from "../../components/ContentTitle";
import Card from "../../components/Card";
import { Box, Flex } from "@chakra-ui/react";
import { ProductContext } from "../ProductContext";

export default function Men() {
  const products = useContext(ProductContext);

  const menProducts = products.filter((el) => el.category == "men's clothing");

  return (
    <Box>
      <ContentTitle text="Men" />
      <Flex wrap="wrap" gap="50" justifyContent="center" mx={10}>
        {menProducts.map((el, index) => {
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
