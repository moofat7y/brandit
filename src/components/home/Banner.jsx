"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Keyboard } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Section from "../Section";
import { bannerImages } from "@/utils/helpers";
import Link from "next/link";

export default function Banner() {
  const [activeSlide, setActiveSlide] = useState(0);

  const handleSlideChange = (swiper) => {
    setActiveSlide(swiper.activeIndex);
  };

  return (
    <Section name={"banner !py-6"}>
      <div className="container">
        <Swiper
          keyboard={true}
          pagination={{
            clickable: true,
          }}
          onSlideChange={handleSlideChange}
          modules={[Pagination, Keyboard]}
          className="mySwiper w-full h-[400px] md:h-[90vh] rounded-md"
        >
          {bannerImages.map((image, index) => {
            return (
              <SwiperSlide key={index} className="w-full h-full relative">
                <Image
                  src={image.image}
                  fill
                  loading="eager"
                  placeholder="blur"
                  className="w-full h-full object-left md:object-center object-cover bg-center"
                />
                <div className="absolute flex top-0 left-0 py-[70px] md:py-[120px] w-full h-full">
                  <div className="ms-[8.6%] flex flex-col gap-3 md:gap-6">
                    <motion.span
                      key={index + image.offerstatus}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: activeSlide === index ? 1 : 0 }}
                      exit={{ opacity: 0 }}
                      transition={{
                        type: "tween",
                        duration: activeSlide === index ? "2" : "0",
                        delay: activeSlide === index ? "0.5" : "0",
                      }}
                      className="inline-block w-fit px-3 py-1 text-[12px] font-semibold text-primary-500 rounded-md bg-[#86f1df]"
                    >
                      {image.offerstatus}
                    </motion.span>

                    <motion.h3
                      key={index + image.category}
                      initial={{ opacity: 0, y: 180 }}
                      animate={{
                        opacity: activeSlide === index ? 1 : 0,
                        y: activeSlide === index ? 0 : 180,
                      }}
                      exit={{ opacity: 0 }}
                      transition={{
                        type: "tween",
                        duration: "2",
                      }}
                      className="text-primary-500  text-xl md:text-4xl"
                    >
                      {image.category}
                    </motion.h3>

                    <motion.h3
                      key={index + image.title}
                      initial={{ opacity: 0, y: 180 }}
                      animate={{
                        opacity: activeSlide === index ? 1 : 0,
                        y: activeSlide === index ? 0 : 180,
                      }}
                      exit={{ opacity: 0 }}
                      transition={{
                        type: "tween",
                        duration: "2",
                      }}
                      className="text-primary-500 font-semibold text-xl md:text-4xl"
                    >
                      {image.title}
                    </motion.h3>
                    <motion.span
                      key={index + image.offer}
                      initial={{ opacity: 0, y: -30 }}
                      animate={{
                        opacity: activeSlide === index ? 1 : 0,
                        y: activeSlide === index ? 0 : -30,
                      }}
                      exit={{ opacity: 0, y: -30 }}
                      transition={{
                        type: "tween",
                        duration: activeSlide === index ? "1" : "0",
                        delay: activeSlide === index ? "0.8" : "0",
                      }}
                      className="text-primary-500 text-sm md:text-md"
                    >
                      {image.offer}
                    </motion.span>

                    <motion.div
                      className="px-6 py-3 md:px-8 md:py-4 text-sm rounded-md w-fit primary-btn bg-secondary-500"
                      key={index + "shop"}
                      initial={{ opacity: 0, y: 60 }}
                      animate={{
                        opacity: activeSlide === index ? 1 : 0,
                        y: activeSlide === index ? 0 : 60,
                      }}
                      exit={{ opacity: 0, y: 60 }}
                      transition={{
                        type: "tween",
                        duration: activeSlide === index ? "1.5" : "0",
                        delay: activeSlide === index ? "1" : "0",
                      }}
                    >
                      <Link href={image.href}>Shop Now</Link>
                    </motion.div>
                    {/* <motion.a>
                      <PrimaryBtn
                        href={"/"}
                        label={"Shop"}
                        classnames="py-3 px-4 rounded-md bg-secondary-500"
                      />
                    </motion.a> */}
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </Section>
  );
}
