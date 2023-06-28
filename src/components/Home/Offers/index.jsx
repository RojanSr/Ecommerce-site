import React from "react";
import OfferCard from "./OfferCard";
import { Flex } from "@chakra-ui/react";
import offer1Img from "../../../../assets/Offer/offer_card1.jpg";
import offer2Img from "../../../../assets/Offer/offer_card2.jpg";

export default function Offers() {
  return (
    <Flex
      display={["block", "block", "flex", "flex"]}
      justifyContent="center"
      gap="30px"
      m="80px 12px"
    >
      <OfferCard imgSrc={offer1Img} />
      <OfferCard imgSrc={offer2Img} />
    </Flex>
  );
}
