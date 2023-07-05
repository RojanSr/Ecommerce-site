import React, { useContext } from "react";
import { Box, Button, Flex, Image } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { ProductContext } from "../../App";
import ProductDetails from "./ProductDetails";

export default function ProductView() {
  const data = useContext(ProductContext);

  // Access id value through useParams hook. Learn here: https://reactrouter.com/en/main/hooks/use-params
  const { id } = useParams();

  // Find the product with given id and store it in variable 'selected'
  const selected = data.find((product) => product.id == id);

  return (
    <Flex
      mx={{ base: "30px", md: "150px", lg: "200px" }}
      gap="150px"
      display={{ base: "block", lg: "flex" }}
    >
      <Box
        h="350px"
        w="300px"
        minW="280px"
        p="50px"
        boxShadow="0px 0px 6px 4px rgba(0,0,0,0.4)"
        borderRadius="12px"
      >
        <Image
          src={`${selected.image}`}
          objectFit="contain"
          h="100%"
          w="100%"
        ></Image>
      </Box>
      <Box mt="50px">
        <ProductDetails title={selected.title} price={selected.price} />
        <Flex gap="40px">
          <Button>Add to cart</Button>
          <Button>Add to Favourite</Button>
        </Flex>
      </Box>
    </Flex>
  );
}
