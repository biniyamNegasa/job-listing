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

const SignUp = ({
  providers,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <div className="flex justify-center pt-[34px] pb-[50px] px-5">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-6">
          <div
            className={`${poppins} text-center text-[32px] font-black text-[#25324B]`}
          >
            Sign Up Today!
          </div>
          {/* {Object.values(providers).map((provider) => (
            <div key={provider.name}>
              <button onClick={() => signIn(provider.id)}>
                Sign in with {provider.name}
              </button>
            </div>
          ))} */}
        </div>
        <div className="flex justify-between items-center">
          <div className="border-[1px] w-2/6 h-0 border-[#D6DDEB]"></div>
          <div className={`${epilogue} text-[#D6DDEB] font-normal`}>
            {" "}
            Or sign up with Email
          </div>
          <div className="border-[1px] w-2/6 h-0 border-[#D6DDEB]"></div>
        </div>
        <form action="" className="flex flex-col gap-[22px]">
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
          />

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
          />
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
