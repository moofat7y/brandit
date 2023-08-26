import Image from "next/image";
import React from "react";
import Link from "next/link";

import prod1 from "public/products/bslm1.png";

// icons
import { BsStarFill } from "react-icons/bs";
import { AiOutlineHeart, AiOutlineEye } from "react-icons/ai";
import { FiEye } from "react-icons/fi";

export default function ProductCard() {
  return (
    <div className="product-card bg-white rounded-md relative border border-transparent group hover:border-gray-100 duration-150 pt-[30px] p-[20px] select-none">
      <div className="relative w-full h-[230px]">
        <Image
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="absolute object-contain"
          fill
          alt="product"
          src={prod1}
        />
        <div className="absolute top-0 right-0 flex flex-col gap-2 translate-y-1/2 opacity-0 group-hover:!translate-y-0 group-hover:!opacity-100 !duration-300">
          <div
            role="button"
            className="w-[35px] h-[35px] bg-white rounded-full flex items-center justify-center duration-150 hover:bg-secondary-400"
          >
            <AiOutlineHeart className="text-primary-500 text-sm" />
          </div>

          <Link
            className="w-[35px] h-[35px] bg-white rounded-full flex items-center justify-center duration-150 hover:bg-secondary-400"
            href="/"
          >
            <FiEye className="text-primary-500 text-sm" />
          </Link>
        </div>

        <div className="absolute  w-full left-0 bottom-0 translate-y-0 opacity-0 group-hover:-translate-y-1/2 group-hover:opacity-100 !duration-300">
          <button className="primary-btn w-full rounded-full py-3 text-sm font-semibold bg-secondary-500">
            Add To Cart
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <span className="inline-block text-[12px]">SAMSUNG</span>
        <Link href="/">
          <p className="line-clamp-2 text-[14px] font-semibold leading-7 hover:text-primary-400 decoration-primary-400 hover:decoration-1 hover:underline">
            Great Value Ultra Strong Paper Towels, Split Sheets, 6 Double{" "}
          </p>
        </Link>
        <div className="flex gap-2 items-center">
          <div className="flex items-center gap-1">
            <BsStarFill className="text-secondary-500 text-[13px]" />
            <BsStarFill className="text-secondary-500 text-[13px]" />
            <BsStarFill className="text-secondary-500 text-[13px]" />
            <BsStarFill className="text-secondary-500 text-[13px]" />
            <BsStarFill className="text-secondary-500 text-[13px]" />
          </div>
          <span className="text-[12px] text-primary-100">3,330 reviews</span>
        </div>

        <span className="inline-block font-semibold">$33,30</span>
      </div>
    </div>
  );
}
