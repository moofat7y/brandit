import React from "react";
import Section from "../Section";
import { upcoming } from "@/utils/helpers";
import Link from "next/link";
import Image from "next/image";

export default function Upcoming() {
  return (
    <Section name={"upcoming"}>
      <div className="container">
        <div className="grid grid-cols-2 gap-5">
          {upcoming.map((item) => {
            return (
              <div className="col-span-2 lg:col-span-1 relative flex justify-between rounded-md bg-[#f4f5f7] before:absolute before:bg-white before:bottom-0 before:right-0 before:w-0 before:h-0 before:rounded-tl-full before:rounded-tr-3xl before:duration-300 hover:before:w-[45%] hover:before:h-[75%]">
                <div className="flex flex-col ps-8 py-16 gap-3">
                  <p className=" text-blue-600 text-[14px]">
                    Starting from{" "}
                    <span className="font-semibold">
                      ${item.starting_price}.
                    </span>
                  </p>

                  <h5 className="font-semibold text-2xl min-w-[120px] leading-8 w-[80%]">
                    {item.name}
                  </h5>

                  <Link
                    className="relative w-fit text-primary-500 mt-2 inline-block font-semibold text-sm before:duration-150 before:absolute before:-bottom-1 before:left-0 before:h-[2px] before:w-[40%] before:bg-primary-500 hover:before:w-[100%]"
                    href="/"
                  >
                    Shop Now
                  </Link>
                </div>
                <div className="hidden sm:block h-full w-[270px] relative">
                  <Image
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    src={item.image}
                    alt="ll"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
