import React from "react";

export default function Footer() {
  return (
    <footer className="py-16">
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
      </div>
    </footer>
  );
}
