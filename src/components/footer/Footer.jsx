import { footerData, socialLinks } from "@/utils/helpers";
import React from "react";

import { IoCallOutline, IoMailOutline } from "react-icons/io5";

export default function Footer() {
  return (
    <footer className="pt-16 pb-6">
      <div className="container">
        <h3 className="text-white leading-10 mb-8 font-semibold text-2xl text-center">
          Subscribe and get 20% discount.
        </h3>

        <div className="flex items-center sm:gap-3 justify-center">
          <input
            className=" w-auto py-4 px-5 rounded-l-md sm:rounded-md min-w-[120px] sm:min-w-[320px] sm:w-[30%] text-sm text-primary-500"
            placeholder="Your email address"
          />
          <button className="primary-btn text-sm font-semibold text-primary-500 -ms-2 sm:m-0 rounded-md px-5 py-4 bg-secondary-300">
            Subscribe
          </button>
        </div>

        <div className="mt-16 grid grid-cols-6 2xl:grid-cols-7 gap-y-8 2xl:gap-0 text-white">
          <div className="col-span-6 sm:col-span-3 lg:col-span-3  2xl:col-span-2 order-2 2xl:order-none">
            <h5 className="text-center sm:text-left font-semibold text-md mb-5">
              Contact Us
            </h5>
            <ul className="list-none flex flex-col gap-8 items-center sm:items-start">
              <li className="flex items-center gap-4">
                <IoCallOutline className="text-3xl" />
                <div className="text-sm">
                  <p className="mb-1 font-semibold">Monday-Friday: 08am-9pm</p>
                  <a
                    className="hover:text-secondary-500 duration-150"
                    href="tel:01001343304"
                  >
                    +201 001 334 3304
                  </a>
                </div>
              </li>

              <li className="flex items-center gap-4">
                <IoMailOutline className="text-3xl" />
                <div className="text-sm">
                  <p className="mb-1 font-semibold">
                    Need help with your order?
                  </p>
                  <a
                    className="hover:text-secondary-500 duration-150"
                    href="mailto:mohammedbelal802@gmail.com"
                  >
                    mohammedbelal802@gmail.com
                  </a>
                </div>
              </li>
            </ul>
          </div>

          {footerData.map((item, index) => {
            return (
              <div
                key={index}
                className="col-span-6 sm:col-span-3 lg:col-span-2 xl:col-span-2 2xl:col-span-1"
              >
                <h5 className="text-center sm:text-left font-semibold text-[17px] mb-8">
                  {item.title}
                </h5>

                <ul className="list-none flex flex-col gap-4 items-center sm:items-start">
                  {item.pages.map((page) => {
                    return (
                      <li
                        key={page.name}
                        className="relative before:absolute before:w-0 before:h-[1px] before:left-1/2 before:bottom-0 before:bg-white before:duration-200 hover:before:left-0 hover:before:w-full"
                      >
                        <a
                          className="text-[13px] duration-150"
                          href="tel:01001343304"
                        >
                          {page.name}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}

          <div className="col-span-6 sm:col-span-3 lg:col-span-3  2xl:col-span-2 order-3 2xl:order-none">
            <h5 className="text-center sm:text-left font-semibold text-[17px] mb-8">
              Follow Us
            </h5>

            <ul className="list-none flex gap-6 justify-center sm:justify-start items-center">
              {socialLinks.map((item, index) => {
                return (
                  <li
                    key={index}
                    className="hover:text-secondary-500 duration-200"
                  >
                    <a className="text-md duration-150" href={item.href}>
                      {item.icon}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <div className=" mt-20 pt-6 px-2 border-t-[1px] border-t-[#ffffff1a]">
          <h6 className="text-center sm:text-left text-white text-[13px]">
            © 2023{" "}
            <a
              href="https://www.instagram.com/moo.fat7y/"
              className="hover:text-secondary-500 duration-200"
            >
              moo.fat7y
            </a>
            . All Rights Reserved
          </h6>
        </div>
      </div>
    </footer>
  );
}
