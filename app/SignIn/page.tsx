"use client";
import React from "react";
import { poppins } from "../ApplicantDashboard/ApplicantDashboard";
import { epilogue } from "../JobListCard/JobListCard";
import Link from "next/link";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import SignInType from "../types/SignInType";
import { useSignInUserMutation } from "../service/job-info";
import { useRouter } from "next/navigation";

const schema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z.string().min(1, { message: "Password field is required" }),
});

type FormData = z.infer<typeof schema>;

const SignIn = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });
  const [SignInUser, { isLoading, isError }] = useSignInUserMutation();

  const onSubmit = async (data: SignInType) => {
    let res = await SignInUser(data);

    if (res && res.error) {
      return alert("Invalid Credentials");
    }
    if (isError) {
      return <h1 className="text-red-900">Error</h1>;
    }
    if (isLoading) {
      return <h1>Loading...</h1>;
    }
    if (res && res.data) {
      console.log("response: ", res);
      sessionStorage.setItem("name", res.data.name);
      router.push("/JobList");
    }
  };

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
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-[22px]"
          noValidate
        >
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
            {...register("email")}
          />
          {errors.email && (
            <p className={`${epilogue} font-semibold text-base text-red-700`}>
              {errors.email.message}
            </p>
          )}

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
            {...register("password")}
          />
          {errors.password && (
            <p className={`${epilogue} font-semibold text-base text-red-700`}>
              {errors.password.message}
            </p>
          )}
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
