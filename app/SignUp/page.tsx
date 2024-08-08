"use client";
import type {
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
} from "next";
import { getProviders, signIn } from "next-auth/react";
import { getServerSession } from "next-auth";
import { options } from "../api/auth/[...nextauth]/options";
import { getServerSideProps } from "next/dist/build/templates/pages";

import Link from "next/link";
import { epilogue } from "../JobListCard/JobListCard";
import { poppins } from "../ApplicantDashboard/ApplicantDashboard";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import FormType from "../types/FormType";
import { useSignUpUserMutation } from "../service/job-info";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { setFormData } from "../formSlice";
import Image from "next/image";

const schema = z
  .object({
    name: z
      .string()
      .regex(
        /^[a-zA-Z]+[\/\- ]?[a-zA-Z]+/,
        "Name must be composed of letters and space"
      ),
    email: z.string().email({ message: "Invalid email address" }),
    password: z.string().min(8, { message: "Password field is required" }),
    confirmPassword: z
      .string()
      .min(8, { message: "Password field is required" }),
  })
  .refine((data: FormType) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

type FormData = z.infer<typeof schema>;

const SignUp = ({
  providers,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  
  const dispatch = useDispatch();
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });
  const [SignUpUser, { isLoading, isError }] = useSignUpUserMutation();

  const onSubmit = async (data: FormType) => {
    let res = await SignUpUser(data);

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
      dispatch(setFormData(data));
      console.log("response: ", res);
      router.push("/OTPForm");
    }
  };

  return (
    <div className="flex justify-center pt-[34px] pb-[50px] px-5">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-6">
          <div
            className={`${poppins} text-center text-[32px] font-black text-[#25324B]`}
          >
            Sign Up Today!
          </div>
          <button
            className="border border-gray-300 w-full mb-5 flex items-center justify-center p-3 rounded-md font-bold hover:border-black"
            onClick={() => signIn("google")}
          >
            <span className="mr-3">
              <Image src="/google.svg" width={20} height={20} alt="google" />
            </span>
            Sign up with Google
          </button>
        </div>
        <div className="flex justify-between items-center">
          <div className="border-[1px] w-2/6 h-0 border-[#D6DDEB]"></div>
          <div className={`${epilogue} text-[#D6DDEB] font-normal`}>
            {" "}
            Or sign up with Email
          </div>
          <div className="border-[1px] w-2/6 h-0 border-[#D6DDEB]"></div>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-[22px]"
          noValidate
        >
          <label
            htmlFor="name"
            className={`${epilogue} font-semibold text-base text-[#515B6F]`}
          >
            Full Name
          </label>
          <input
            type="text"
            placeholder="Enter your full name"
            className="border-[1px] px-4 py-3 rounded-md"
            {...register("name")}
          />
          {errors.name && (
            <p className={`${epilogue} font-semibold text-base text-red-700`}>
              {errors.name.message}
            </p>
          )}
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
          <label
            htmlFor="confirmPassword"
            className={`${epilogue} font-semibold text-base text-[#515B6F]`}
          >
            Confirm Password
          </label>
          <input
            type="password"
            placeholder="Enter password"
            className="border-[1px] px-4 py-3 rounded-md"
            {...register("confirmPassword")}
          />
          {errors.confirmPassword && (
            <p className={`${epilogue} font-semibold text-base text-red-700`}>
              {errors.confirmPassword.message}
            </p>
          )}
          <button
            type="submit"
            className={`${epilogue} font-bold text-white text-center bg-[#4640DE] px-6 py-3 rounded-3xl`}
          >
            Continue
          </button>
        </form>
        <div className={`${epilogue} font-normal`}>
          Already have an account?{" "}
          <Link href="/SignIn" className="font-semibold text-[#4640DE]">
            Login
          </Link>
        </div>
        <p className="text-center">
          By clicking 'Continue', you acknowledge that you have read and
          accepted our
        </p>
        <p className="text-center">
          <Link href="#" className="text-[#4640DE]">
            Terms of Service
          </Link>{" "}
          and{" "}
          <Link href="#" className="text-[#4640DE]">
            Privacy Policy
          </Link>
          .
        </p>
      </div>
    </div>
  );
};

export async function GetServerSideProps(context: GetServerSidePropsContext) {
  const session = await getServerSession(context.req, context.res, options);

  if (session) {
    return {
      redirect: { destination: "/" },
    };
  }

  const providers = await getProviders();

  return {
    props: {
      providers: providers ?? [],
    },
  };
}

export default SignUp;
