import React, { useState } from "react";
import { Text, Flex } from "@chakra-ui/react";

export default function SizeSelect() {
  const sizeArr = ["XS", "S", "M", "L", "XL"];

  // Initialize state with default value as "M"
  const [size, setSize] = useState("M");

  // Toggle between sizes
  function toggleSize(index) {
    setSize(sizeArr[index]);
  }
  return (
    <>
      <Text fontSize="16px" m="30px 0px 10px 0px" color="blackAlpha.600">
        Select Size:
      </Text>
      <Flex gap="20px">
        {sizeArr.map((el, index) => (
          <Flex
            key={index}
            justifyContent="center"
            alignItems="center"
            h="38px"
            w="38px"
            border="1.5px solid #BEBCBD"
            borderRadius="12px"
            cursor="pointer"
            onClick={() => toggleSize(index)}
            // Check if the element value is same as the state variable value
            bgColor={el == size ? "#3C4242" : "inherit"}
            color={el == size ? "#fff" : "inherit"}
          >
            {el}
          </Flex>
        ))}
      </Flex>
    </>
  );
}
