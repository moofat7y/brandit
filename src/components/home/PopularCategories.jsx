import React from "react";
import Section from "../Section";
import { popularCategories } from "@/utils/helpers";
import Link from "next/link";
import Image from "next/image";

export default function PopulerCategories() {
  return (
    <Section name={"popular-categories"}>
      <div className="container">
        <h2 className="text-2xl mb-7 font-semibold text-primary-500">
          Explore Popular Categories
        </h2>

        <div className="grid gap-7 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
          {popularCategories.map((item, index) => {
            return (
              <div
                key={index}
                className="relative pt-[30px] p-[40px] border border-gray-100/75 rounded-md"
              >
                <h5 className="text-primary-400 mb-5 font-semibold">
                  {item.category}
                </h5>

                <ul className="list-none flex flex-col items-start gap-3">
                  {item.sub_categories.map((cat, index) => {
                    return (
                      <li
                        key={index + cat}
                        className="cursor-pointer inline-block text-[14px] text-primary-100 hover:text-primary-900"
                      >
                        {cat}
                      </li>
                    );
                  })}
                </ul>

                <Link
                  className="relative text-primary-500 mt-5 inline-block font-semibold text-sm before:duration-150 before:absolute before:-bottom-1 before:left-0 before:h-[2px] before:w-[20%] before:bg-primary-500 hover:before:w-[100%]"
                  href="/"
                >
                  VIEW ALL
                </Link>

                <div className="absolute -z-10 bottom-[20px] right-[20px] w-[150px]">
                  <Image
                    className="object-contain"
                    width={"auto"}
                    height={"auto"}
                    src={item.image}
                    alt="image"
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
