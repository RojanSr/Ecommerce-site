import React, { useContext } from "react";
import Card from "../../../components/Card";
import { Flex, Box } from "@chakra-ui/react";
import { ProductContext } from "../../../App";

export default function NewArrival() {
  const product = useContext(ProductContext);

  return (
    <Box mx={["30px", "40px", "40px", "80px"]}>
      <Flex
        justifyContent="center"
        gap={{ base: "60px", lg: "100px" }}
        flexWrap="wrap"
      >
        {/* Only includes first 5 items */}

        {typeof product &&
          product.map((item, index) => {
            if (index > 3) {
              return;
            }
            return (
              <Card
                name={item.title}
                imgSrc={item.image}
                price={item.price}
                id={item.id}
                key={index}
              />
            );
          })}
      </Flex>
    </Box>
  );
}
