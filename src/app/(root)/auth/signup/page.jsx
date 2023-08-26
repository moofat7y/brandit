"use client";
import React, { useEffect } from "react";

import Link from "next/link";

import { signIn } from "next-auth/react";

import { useForm } from "react-hook-form";

import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { useSearchParams } from "next/navigation";
import InputField from "@/components/auth/InputField";

export default function page() {
  const {
    register,
    handleSubmit,
    watch,
    setError,
    formState: { errors },
  } = useForm();
  const callbackUrl = useSearchParams().get("callbackUrl");

  const signUpHandler = async (data) => {
    console.log(data);
  };
  return (
    <div className="signup">
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-primary-500">
            Create a new account
          </h2>
        </div>

        <div className="mt-10  w-full max-w-[480px] mx-auto">
          <div className="py-10 px-6 md:px-10 rounded-md  shadow-md">
            <form onSubmit={handleSubmit(signUpHandler)} className="space-y-4">
              <InputField
                inputName={"name"}
                label={"Full name"}
                type={"text"}
                errors={errors}
                register={{
                  ...register("name", { required: true }),
                }}
              />

              <InputField
                inputName={"email"}
                label={"Email address"}
                type={"text"}
                errors={errors}
                register={{
                  ...register("email", {
                    required: true,
                    pattern: {
                      value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                      message: "Please enter a valid email",
                    },
                  }),
                }}
              />

              <InputField
                inputName={"password"}
                label={"Passwrod"}
                type={"password"}
                errors={errors}
                register={{
                  ...register("password", {
                    required: true,
                    pattern: {
                      value:
                        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z\d@$.!%*#?&]/,
                      message:
                        "Password must contain at least 6 characters that include at least 1 lowercase char, 1 uppercase char, i number",
                    },
                    minLength: {
                      value: 6,
                      message:
                        "Password must contain at least 6 characters that include at least 1 lowercase char, 1 uppercase char, i number",
                    },
                  }),
                }}
              />

              <div>
                <button
                  type="submit"
                  className="flex w-full primary-btn justify-center rounded-md bg-secondary-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm "
                >
                  Register
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
          Already have an account?{" "}
          <Link
            href="/auth/signin"
            className="font-semibold leading-6 text-primary-600 hover:text-primary-500"
          >
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
}
