"use client";
import React from "react";
import Section from "../Section";
import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import ProductCard from "../ProductCard";

export default function LastestProd() {
  return (
    <Section
      name={
        "lastest-products !py-[100px] rounded-md bg-center bg-fixed bg-no-repeat	bg-cover lastProd-image"
      }
    >
      <div className="container">
        <div className="grid grid-cols-6 gap-5 md:gap-20">
          <div className="col-span-6 lg:col-span-2 flex-shrink-0 flex flex-col justify-center items-start">
            <h5 className="text-white font-semibold text-2xl mb-6">
              Latest and Greatest Tech.
            </h5>
            <p className="text-white text-sm leading-6">
              Check out the latest product launches and get inspired by the tech
              of tomorrow.
            </p>

            <Link
              href="/"
              className="primary-btn text-[14px] mt-8 rounded-full py-4 px-10 font-semibold bg-secondary-300"
            >
              Shop Now
            </Link>
          </div>

          <div className="col-span-6 lg:col-span-4">
            <Swiper
              //   slidesPerView={8}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                },
                540: {
                  // width: 768,
                  slidesPerView: 2,
                },
                1140: {
                  slidesPerView: 3,
                },
                1400: {
                  slidesPerView: 4,
                },
              }}
              spaceBetween={8}
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
        </div>
      </div>
    </Section>
  );
}
