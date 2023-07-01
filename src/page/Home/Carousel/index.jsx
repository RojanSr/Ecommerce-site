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
      {/* Carousel for hero */}
      <Sliderify
        navPrevIcon={<LeftArrow fontSize="2rem" color="#3C4242" />}
        navNextIcon={<RightArrow fontSize="2rem" color="#3C4242" />}
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
              categoryColor={slide.categoryColor}
              allTextColor={slide.allTextColor}
            />
          );
        })}
      </Sliderify>
    </div>
  );
}
