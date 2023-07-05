import React from "react";
import { VStack, Heading, Text } from "@chakra-ui/react";

const ErrorPage = () => {
  return (
    <VStack gap="40px" justifyContent="center" h="500px">
      <Heading>Oops!</Heading>
      <Text>Looks like the page you are trying to look for doesn't exist</Text>
      <Text></Text>
    </VStack>
  );
};

export default ErrorPage;
