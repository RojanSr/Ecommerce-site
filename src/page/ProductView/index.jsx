import React, { useContext } from "react";
import { Box, Flex, Image } from "@chakra-ui/react";
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
    <Flex m="0px 250px" gap="150px" mb="100px">
      <Box
        maxH="500px"
        minH="300px"
        maxW="400px"
        p="50px"
        boxShadow="0px 0px 6px 4px rgba(0,0,0,0.4)"
        borderRadius="12px"
      >
        <Image src={`${selected.image}`} objectFit="contain"></Image>
      </Box>
      <ProductDetails title={selected.title} price={selected.price} />
    </Flex>
  );
}
