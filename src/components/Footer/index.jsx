import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import FooterInformation from "./FooterInformation";
import FooterSocials from "./FooterSocials";

export default function Footer() {
  return (
    <Box bg="#3C4242" as="footer">
      <Box m="0px 180px 0px 180px">
        <FooterInformation />
        <FooterSocials />
        <Flex justifyContent="center" borderTop="2px solid #BEBCBD" p="60px">
          <Text color="#fff" fontSize="18px" fontWeight="500">
            Copyright © 2023 Euphoria Folks Pvt Ltd. All rights reserved.
          </Text>
        </Flex>
      </Box>
    </Box>
  );
}
