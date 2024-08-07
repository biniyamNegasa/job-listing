import React from "react";
import { poppins } from "../ApplicantDashboard/ApplicantDashboard";
import { epilogue } from "../JobListCard/JobListCard";
import Link from "next/link";

const SignIn = () => {
  return (
    <div className="flex justify-center pt-[34px] pb-[50px] pr-14">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-6">
          <div
            className={`${poppins} text-center text-[32px] font-black text-[#25324B]`}
          >
            Welcome Back,
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div className="border-[1px] w-2/6 h-0 border-[#D6DDEB]"></div>

          <div className="border-[1px] w-2/6 h-0 border-[#D6DDEB]"></div>
        </div>
        <form action="" className="flex flex-col gap-[22px]">
          <label
            htmlFor="email"
            className={`${epilogue} font-semibold text-base text-[#515B6F]`}
          >
            Email Address
          </label>
          <input
            type="email"
            placeholder="Enter email address"
            className="border-[1px] px-4 py-3 rounded-md"
          />

          <label
            htmlFor="password"
            className={`${epilogue} font-semibold text-base text-[#515B6F]`}
          >
            Password
          </label>
          <input
            type="password"
            placeholder="Enter password"
            className="border-[1px] px-4 py-3 rounded-md"
          />
          <button
            type="submit"
            className={`${epilogue} font-bold text-white text-center bg-[#4640DE] px-6 py-3 rounded-3xl`}
          >
            Login
          </button>
        </form>
        <div className={`${epilogue} font-normal`}>
          Don't have an account?{" "}
          <Link href="/SignUp" className="font-semibold text-[#4640DE]">
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
