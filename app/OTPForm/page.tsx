"use client";
import React, {
  useState,
  useEffect,
  useRef,
  ChangeEvent,
  FormEvent,
} from "react";
import { useRouter } from "next/navigation";
import { poppins } from "../ApplicantDashboard/ApplicantDashboard";
import { epilogue } from "../JobListCard/JobListCard";

const OTPForm: React.FC = () => {
  const router = useRouter();
  const [otp, setOtp] = useState<string[]>(Array(4).fill(""));
  const [countdown, setCountdown] = useState<number>(30);
  const [isResendDisabled, setIsResendDisabled] = useState<boolean>(true);
  const [isContinueDisabled, setIsContinueDisabled] = useState<boolean>(true);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    // Start the countdown timer when the component mounts
    const timer = setInterval(() => {
      setCountdown((prevCountdown) => {
        if (prevCountdown <= 1) {
          clearInterval(timer);
          setIsResendDisabled(false); // Enable resend button when countdown is 0
          return 0;
        }
        return prevCountdown - 1;
      });
    }, 1000);

    // Cleanup the interval on component unmount
    return () => clearInterval(timer);
  }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement>, index: number) => {
    const value = e.target.value;
    if (/^[0-9]$/.test(value) || value === "") {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      if (value && index < otp.length - 1) {
        inputRefs.current[index + 1]?.focus();
        setIsContinueDisabled(true);
      } else if (value && index == otp.length - 1) {
        setIsContinueDisabled(false);
      } else {
        setIsContinueDisabled(true);
      }
    }
  };

  const handleResendOtp = () => {
    // Logic to resend OTP goes here
    // For example: trigger an API call to resend the OTP

    setCountdown(30); // Reset the countdown
    setIsResendDisabled(true); // Disable resend button again

    // Restart the countdown timer
    const timer = setInterval(() => {
      setCountdown((prevCountdown) => {
        if (prevCountdown <= 1) {
          clearInterval(timer);
          setIsResendDisabled(false); // Enable resend button when countdown is 0
          return 0;
        }
        return prevCountdown - 1;
      });
    }, 1000);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const otpValue = otp.join("");
    // Logic to verify OTP goes here
    // For example: trigger an API call to verify the OTP

    // Example: Navigate to a new page
    router.push("/somepage");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <div className="p-8 w-full max-w-md">
        <h1
          className={`${epilogue} text-2xl font-black text-center mb-4 text-[#25324B]`}
        >
          Verify Email
        </h1>
        <p className={`${poppins} text-center text-[#7C8493] mb-8`}>
          We've sent a verification code to the email address you provided. To
          complete the verification process, please enter the code here.
        </p>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center gap-5"
        >
          <div className="flex mb-4 gap-8">
            {otp.map((digit, index) => (
              <input
                key={index}
                type="text"
                placeholder="0"
                value={digit}
                onChange={(e) => handleChange(e, index)}
                maxLength={1}
                className="w-16 h-12 border-2 border-[#4640DE66]/40 rounded-[7px] text-center text-2xl"
                ref={(el) => (inputRefs.current[index] = el)}
                required
              />
            ))}
          </div>
          <div className={`${epilogue} text-center text-[#7C8493]`}>
            <p>
              You can request to{" "}
              <button
                onClick={handleResendOtp}
                disabled={isResendDisabled}
                className="text-[#4640DE] font-semibold hover:underline"
              >
                Resend code
              </button>{" "}
              in
              <span className="text-[#4640DE] font-semibold">
                {" "}
                {countdown}
              </span>{" "}
              seconds
            </p>
          </div>
          <button
            type="submit"
            className={`${poppins} ${
              !isContinueDisabled ? "bg-[#4640DE]" : "bg-[#4640DE]/40"
            } w-full text-white py-3 px-6 rounded-3xl mb-4`}
            disabled={isContinueDisabled}
          >
            Continue
          </button>
        </form>
      </div>
    </div>
  );
};

export default OTPForm;
