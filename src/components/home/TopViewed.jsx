"use client";
import React from "react";
import Section from "../Section";
import ProductCard from "../ProductCard";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

export default function TopViewed() {
  return (
    <Section name={"top-view"}>
      <div className="container">
        <h2 className="text-2xl mb-7 font-semibold text-primary-500">
          Top Viewed
        </h2>

        <Swiper
          //   slidesPerView={8}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            552: {
              slidesPerView: 2,
            },
            992: {
              slidesPerView: 3,
            },
            1400: {
              slidesPerView: 5,
            },
          }}
          spaceBetween={10}
          className="mySwiper"
        >
          <SwiperSlide className="">
            <ProductCard />
          </SwiperSlide>
          <SwiperSlide className="">
            <ProductCard />
          </SwiperSlide>
          <SwiperSlide className="">
            <ProductCard />
          </SwiperSlide>
          <SwiperSlide className="">
            <ProductCard />
          </SwiperSlide>
          <SwiperSlide className="">
            <ProductCard />
          </SwiperSlide>
          <SwiperSlide className="">
            <ProductCard />
          </SwiperSlide>
          <SwiperSlide className="">
            <ProductCard />
          </SwiperSlide>
        </Swiper>
      </div>
    </Section>
  );
}
