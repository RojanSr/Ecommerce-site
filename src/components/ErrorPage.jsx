import React from "react";
import { useRouteError } from "react-router-dom";
import { VStack, Heading, Text } from "@chakra-ui/react";

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);
  return (
    <VStack gap="40px" justifyContent="center" minH="100vh">
      <Heading>Oops!</Heading>
      <Text>Sorry, an unexpected error has occurred.</Text>
      <Text>
        <Text as="i">{error.statusText || error.message}</Text>
      </Text>
    </VStack>
  );
};

export default ErrorPage;
