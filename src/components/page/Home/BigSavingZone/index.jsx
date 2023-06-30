import React, { useEffect, useState } from "react";
import { Box, Grid, GridItem, Flex } from "@chakra-ui/react";
import HeaderTitle from "../../../ContentTitle";
import Card from "./Card";
import { Sliderify } from "react-sliderify";
import {
  BsArrowLeft as LeftArrow,
  BsArrowRight as RightArrow,
} from "react-icons/bs";
import img1 from "../../../../../assets/BigSavingZone/Hawaiian_Shirts.jpg";
import img2 from "../../../../../assets/BigSavingZone/Printed_Tshirt.jpg";
import img3 from "../../../../../assets/BigSavingZone/Cargo_Joggers.jpg";
import img4 from "../../../../../assets/BigSavingZone/Urban_Shirts.jpg";
import img5 from "../../../../../assets/BigSavingZone/Oversized_Tshirts.jpg";

export default function BigSavingZone() {
  const [scrWidth, setScrWidth] = useState(0);
  useEffect(() => {
    function handleResize() {
      setScrWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
  }, []);

  return (
    <Box mx={["30px", "40px", "40px", "80px"]}>
      {scrWidth > 700 && console.log("Worked?")}
      <HeaderTitle text="Big Saving Zone" />

      {/* Use Grid only if screen size is bigger that 1120 */}
      {scrWidth > 1110 ? (
        // Shows grid if screen size is more than 1110
        <Grid
          gridTemplateColumns="repeat(6, 1fr)"
          // gridTemplateColumns="repeat(4, 1fr)"
          // gridTemplateRows={["repeat(3, 1fr)", "repeat(2, 1fr)"]}
          gridTemplateRows="repeat(2, 1fr)"
          gap="20px"
          justifyContent="center"
        >
          <GridItem colSpan={2}>
            <Card
              imgSrc={img1}
              name="Hawaiian Shirts"
              slogan="Dress up in summer vibe"
              discount="UPTO 50% OFF"
              limited="false"
              text="white"
            />
          </GridItem>

          <GridItem colSpan={2}>
            <Card
              imgSrc={img2}
              name="Printed T-Shirt"
              slogan="New Designs Every Week"
              discount="UPTO 40% OFF"
              limited="true"
              text="white"
              align="right"
            />
          </GridItem>

          <GridItem colSpan={2}>
            <Card
              imgSrc={img3}
              name="Cargo Joggers"
              slogan="Move with style & comfort"
              discount="UPTO 50% OFF"
              limited="false"
              text="#3C4242"
              align="right"
            />
          </GridItem>

          <GridItem colSpan={3}>
            <Card
              imgSrc={img4}
              name="Urban Shirts"
              slogan="Live In Confort"
              discount="FLAT 60% OFF"
              limited="false"
              text="#3C4242"
              align="right"
            />
          </GridItem>

          <GridItem colSpan={3}>
            <Card
              imgSrc={img5}
              name="Oversized T-Shirts"
              slogan="Street Style Icon"
              discount="FLAT 60% OFF"
              limited="false"
              text="#3C4242"
              align="right"
            />
          </GridItem>
        </Grid>
      ) : (
        // Shows slider if screen width is less than or equal to 1110px
        <Sliderify
          navPrevIcon={<LeftArrow fontSize="2rem" color="#3C4242" />}
          navNextIcon={<RightArrow fontSize="2rem" color="#3C4242" />}
          slideDurationInSecs="8"
        >
          <Card
            imgSrc={img1}
            name="Hawaiian Shirts"
            slogan="Dress up in summer vibe"
            discount="UPTO 50% OFF"
            limited="false"
            text="white"
          />
          <Card
            imgSrc={img2}
            name="Printed T-Shirt"
            slogan="New Designs Every Week"
            discount="UPTO 40% OFF"
            limited="true"
            text="white"
            align="right"
          />
          <Card
            imgSrc={img3}
            name="Cargo Joggers"
            slogan="Move with style & comfort"
            discount="UPTO 50% OFF"
            limited="false"
            text="#3C4242"
            align="right"
          />
          <Card
            imgSrc={img4}
            name="Urban Shirts"
            slogan="Live In Confort"
            discount="FLAT 60% OFF"
            limited="false"
            text="#3C4242"
            align="right"
          />
          <Card
            imgSrc={img5}
            name="Oversized T-Shirts"
            slogan="Street Style Icon"
            discount="FLAT 60% OFF"
            limited="false"
            text="#3C4242"
            align="right"
          />
        </Sliderify>
      )}
    </Box>
  );
}
