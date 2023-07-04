import React, { useContext } from "react";
import ArrivedCard from "./ArrivedCard";
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
        {/* {data.map((product, index) => (
          <ArrivedCard
            imgSrc={product.imgSrc}
            name={product.name}
            id={product.id}
            key={index}
          />
        ))} */}

        {/* Only includes first 5 items */}
        {product.data.map((item, index) => {
          if (index > 3) {
            return;
          }
          return (
            <ArrivedCard
              name={item.title}
              imgSrc={item.image}
              id={item.id}
              key={index}
            />
          );
        })}
      </Flex>
    </Box>
  );
}
