import React from "react";
import { Sliderify } from "react-sliderify";
import CarouselCard from "./CarouselCard";
import {
  BsArrowLeft as LeftArrow,
  BsArrowRight as RightArrow,
} from "react-icons/bs";
// get carousel data from another file
import slides from "./CarouselData";

export default function Carousel() {
  return (
    <div>
      <Sliderify
        navPrevIcon={<LeftArrow fontSize="2rem" />}
        navNextIcon={<RightArrow fontSize="2rem" />}
        slideDurationInSecs="8"
      >
        {slides.map((slide, index) => {
          return (
            <CarouselCard
              key={index}
              imgSrc={slide.imgSrc}
              category={slide.category}
              mainText={slide.mainText}
              description={slide.description}
              position={slide.position}
            />
          );
        })}
      </Sliderify>
    </div>
  );
}
