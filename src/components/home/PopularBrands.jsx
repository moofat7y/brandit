"use client";
import React, { useRef, useState } from "react";
import Section from "../Section";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { brandList } from "@/utils/helpers";
import Image from "next/image";

export default function PopularBrands() {
  return (
    <Section name={"populer-brand"}>
      <div className="container">
        <h2 className="text-2xl mb-7  font-semibold text-primary-500">
          Explore popular brands
        </h2>
        <Swiper
          //   slidesPerView={8}
          breakpoints={{
            0: {
              slidesPerView: 2,
            },
            492: {
              slidesPerView: 3,
            },
            768: {
              // width: 768,
              slidesPerView: 4,
            },
            992: {
              slidesPerView: 6,
            },
            1400: {
              slidesPerView: 8,
            },
          }}
          spaceBetween={10}
          className="mySwiper"
        >
          {brandList.map((brand, index) => {
            return (
              <SwiperSlide
                key={index}
                className="!flex !flex-col gap-5 items-center"
              >
                <div className="relative m-auto group bg-gray-50 rounded-full w-[120px] md:w-[140px] h-[120px] md:h-[140px] flex items-center justify-center">
                  <Image
                    className="group-hover:scale-[1.1] duration-150 object-contain m-auto !w-auto !h-auto"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    src={brand.image}
                  />
                </div>
                <div className="font-semibold text-primary-500 text-sm">
                  <p className="text-center">{brand.name}</p>
                  <p className="text-center text-[10px] text-gray-600">
                    13 items
                  </p>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </Section>
  );
}
