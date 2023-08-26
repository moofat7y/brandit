"use client";
import React, { useEffect } from "react";

import Link from "next/link";

import { signIn } from "next-auth/react";

import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { useSearchParams } from "next/navigation";

export default function page() {
  const callbackUrl = useSearchParams().get("callbackUrl");

  return (
    <div className="signin">
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-primary-500">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10  w-full max-w-[480px] mx-auto">
          <div className="py-10 px-6 md:px-10 rounded-md  shadow-md">
            <form className="space-y-6" action="#" method="POST">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="block duration-150 w-full px-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>

                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="block duration-150 w-full px-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="text-sm">
                <a
                  href="#"
                  className="font-semibold text-primary-600 hover:text-primary-500"
                >
                  Forgot password?
                </a>
              </div>
              <div>
                <button
                  type="submit"
                  className="flex w-full primary-btn justify-center rounded-md bg-secondary-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm "
                >
                  Sign in
                </button>
              </div>
            </form>

            <div>
              <div className="mt-10 relative">
                <div className="flex items-center inset-0 absolute">
                  <div className="border-t w-full"></div>
                </div>

                <div className="flex justify-center text-sm relative">
                  <div className="px-3 bg-white">Or continue with</div>
                </div>
              </div>

              <div className="mt-10 flex items-center gap-5">
                <button className="flex w-full justify-center items-center rounded-md bg-blue-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm">
                  <FaFacebook className="me-2 text-xl" /> Facebook
                </button>

                <button
                  onClick={() =>
                    signIn("google", {
                      redirect: false,
                      callbackUrl: callbackUrl,
                    })
                  }
                  className="flex w-full justify-center items-center rounded-md bg-gray-100/40 px-3 py-1.5 text-sm font-semibold leading-6 text-black shadow-sm"
                >
                  <FcGoogle className="me-2 text-xl" /> Google
                </button>
              </div>
            </div>
          </div>
        </div>
        <p className="mt-10 text-center text-sm text-gray-500">
          Don't have an account?{" "}
          <Link
            href="/auth/signup"
            className="font-semibold leading-6 text-primary-600 hover:text-primary-500"
          >
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}
