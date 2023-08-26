"use client";

import React, { useState } from "react";
import Link from "next/link";

// hooks
import { useSession, signIn, signOut } from "next-auth/react";

// --- icons
import { BsCart, BsHeart, BsPerson } from "react-icons/bs";
import { HiMenuAlt2 } from "react-icons/hi";
import MobileSlider from "./MobileSlider";

export default function MainHeader() {
  const [isOpen, setIsOpen] = useState();

  const { data } = useSession();

  return (
    <>
      <div className="main-header bg-primary-500 py-5">
        <div className="container">
          <div className="flex flex-wrap justify-between items-center">
            <div className="flex items-center">
              <HiMenuAlt2
                role="button"
                onClick={() => setIsOpen(true)}
                className="text-xl text-white md:hidden me-2"
              />
              <Link
                href="/"
                className="text-white font-black text-xl inline-block "
              >
                Brandit <span className="text-secondary-500">.</span>
              </Link>
            </div>

            <form className="order-3 w-full md:w-fit mt-4 md:mt-0 md:order-2">
              <div className="flex">
                <label
                  htmlFor="search-dropdown"
                  className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
                >
                  Your Email
                </label>
                <button
                  id="dropdown-button"
                  data-dropdown-toggle="dropdown"
                  className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center  border-r-0 bg-white rounded-l-md md:rounded-l-full"
                  type="button"
                >
                  All categories
                  <svg
                    className="w-2.5 h-2.5 ml-2.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </button>
                <div
                  id="dropdown"
                  className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
                >
                  <ul
                    className="py-2 text-sm text-gray-700 dark:text-gray-200"
                    aria-labelledby="dropdown-button"
                  >
                    <li>
                      <button
                        type="button"
                        className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Mockups
                      </button>
                    </li>
                    <li>
                      <button
                        type="button"
                        className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Templates
                      </button>
                    </li>
                    <li>
                      <button
                        type="button"
                        className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Design
                      </button>
                    </li>
                    <li>
                      <button
                        type="button"
                        className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Logos
                      </button>
                    </li>
                  </ul>
                </div>
                <div className="flex items-center w-full">
                  <input
                    type="search"
                    id="search-dropdown"
                    className="block p-2.5 w-full z-20 text-sm"
                    placeholder="Search for products"
                    required
                  />
                  <button
                    type="submit"
                    className=" p-2.5 text-sm font-medium h-full text-primary-500 bg-secondary-100 rounded-r-md md:rounded-r-full"
                  >
                    <svg
                      className="w-4 h-4"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 20"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                      />
                    </svg>
                    <span className="sr-only">Search</span>
                  </button>
                </div>
              </div>
            </form>

            <div className="order-2 md:order-3 flex justify-end items-center gap-2">
              <Link href="/" className="flex items-center gap-2 group">
                <div className="p-3 rounded-full border border-primary-300 group-hover:bg-primary-100">
                  <BsHeart className="text-white" />
                </div>
                <div className="hidden xl:block text-white">
                  <p className="text-[14px]  leading-none mb-1">Wishlist</p>
                  <p className="text-[16px] font-semibold leading-none">
                    My Items
                  </p>
                </div>
              </Link>

              <div
                onClick={() => (data ? signOut() : signIn())}
                className="flex items-center gap-2 group"
                role="button"
              >
                <div className="p-3 rounded-full border border-primary-300 group-hover:bg-primary-100">
                  <BsPerson className="text-white" />
                </div>
                <div className="hidden xl:block text-white">
                  <p className="text-[14px]  leading-none mb-1">
                    {data ? "logout" : "Sign In"}
                  </p>
                  <p className="text-[16px] font-semibold leading-none">
                    Account
                  </p>
                </div>
              </div>

              <Link href="/" className="flex items-center gap-2 group">
                <div className="p-3 rounded-full border border-primary-300 group-hover:bg-primary-100">
                  <BsCart className="text-white" />
                </div>
                <div className="hidden xl:block text-white">
                  <p className="text-[14px]  leading-none mb-1">$200</p>
                  <p className="text-[16px] font-semibold leading-none">
                    Total
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <MobileSlider setIsOpen={setIsOpen} isOpen={isOpen} />
    </>
  );
}
