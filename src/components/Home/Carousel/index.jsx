import React from "react";
import { Sliderify } from "react-sliderify";
import CarouselCard from "./CarouselCard";
import {
  BsArrowLeft as LeftArrow,
  BsArrowRight as RightArrow,
} from "react-icons/bs";
import img1 from "../../../../assets/HeroCarousel/carousel-img-1.jpg";
import img2 from "../../../../assets/HeroCarousel/carousel-img-2.jpg";
import img3 from "../../../../assets/HeroCarousel/carousel-img-3.jpg";

export default function Carousel() {
  return (
    <div>
      <Sliderify
        navPrevIcon={<LeftArrow fontSize="2rem" />}
        navNextIcon={<RightArrow fontSize="2rem" />}
        slideDurationInSecs="8"
      >
        <CarouselCard
          imgSrc={img1}
          category="T-shirt / Tops"
          mainText="Summer Value Pack"
          description="cool / colorful / comfy"
          position="center"
        />
        <CarouselCard
          imgSrc={img2}
          category="Hoodie"
          mainText="Showcase Love Hoodie"
          description="colorful / comfy / warm"
          position="top"
        />
        <CarouselCard
          imgSrc={img3}
          category="T-Shirt / Tops"
          mainText="Plain Tops"
          description="simple / comfy "
          position="top"
        />
      </Sliderify>
    </div>
  );
}
