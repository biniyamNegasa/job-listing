"use client";
import JobListCard, { CardType, epilogue } from "../JobListCard/JobListCard";
import "./JobList.css";
import { poppins } from "../ApplicantDashboard/ApplicantDashboard";
import { useRouter } from "next/navigation";
import {
  useGetAllOpportunitiesQuery,
  useGetBookmarkQuery,
} from "../service/job-info";
import { useEffect, useState } from "react";
import { signOut, useSession } from "next-auth/react";
export interface JobPosting {
  id: string;
  title: string;
  description: string;
  responsibilities: string;
  requirements: string;
  idealCandidate: string;
  categories: string[];
  opType: string;
  startDate: string;
  endDate: string;
  deadline: string;
  location: string[];
  requiredSkills: string[];
  whenAndWhere: string;
  orgID: string;
  datePosted: string;
  status: string;
  applicantsCount: number;
  viewsCount: number;
  orgName: string;
  logoUrl: string;
  isBookmarked: boolean;
  isRolling: boolean;
  questions: string | null;
  perksAndBenefits: string | null;
  createdAt: string;
  updatedAt: string;
  orgPrimaryPhone: string;
  orgEmail: string;
  orgWebsite: string;
  average_rating: number;
  total_reviews: number;
}

export interface ApiResponse {
  success: boolean;
  message: string;
  data: JobPosting;
  errors: string | null;
  count: number;
}

interface UserSession {
  user: {
    name: string;
    email: string;
    accessToken: string;
    refreshToken: string;
  };
  expires: string;
}

export interface Session {
  data: UserSession | null;
  status: "loading" | "authenticated" | "unauthenticated";
}

const JobList = () => {
  const router = useRouter();
  const { data: session, status } = useSession() as Session;

  useEffect(() => {
    console.log("my session: ", session, status);
  }, [status, session]);

  let accessToken = "";
  if (status === "authenticated") {
    accessToken = session?.user?.accessToken!;
  }

  const {
    data,
    isError,
    isLoading,
    refetch: homeRefetch,
  } = useGetAllOpportunitiesQuery({
    accessToken,
  });
  const { refetch } = useGetBookmarkQuery({
    accessToken,
  });
  console.log(data);
  const [postings, setPostings] = useState<JobPosting[]>([]);
  useEffect(() => {
    if (data) {
      setPostings(data.data);
    }
  }, [data]);
  let list: CardType[] = [];

  for (let jobPost of postings) {
    let customCard: CardType = {
      id: jobPost.id,
      description: jobPost.description,
      categories: jobPost.categories,
      company: jobPost.orgName,
      imageLink: jobPost.logoUrl,
      location: jobPost.location,
      title: jobPost.title,
      where: jobPost.opType,
      accessToken: accessToken!,
      isBookmarked: jobPost.isBookmarked,
      status: status,
    };
    list.push(customCard);
  }
  const [bookmarksTouched, setBookmarksTouched] = useState(false);
  console.log(list);
  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <div className="w-12 h-12 border-4 border-gray-200 border-t-blue-500 rounded-full animate-spin"></div>
      </div>
    );
  }
  return (
    <div className="py-[72px] pl-[124px]">
      <div className="w-[919px] flex flex-col gap-10">
        <div className="flex justify-between">
          <div className="flex gap-2">
            <button
              className={`${epilogue} font-bold ${" bg-white text-[#4640DE] border-[1px] border-[#4640DE] "} px-5 py-3 rounded-3xl hover:bg-white hover:text-[#4640DE] hover:border-[1px] hover:border-[#4640DE] `}
            >
              HOME
            </button>
            {status == "authenticated" && (
              <button
                onClick={() => (
                  refetch(), homeRefetch(), router.push("/Bookmarks")
                )}
                className={`${epilogue} font-bold ${" text-white text-center bg-[#4640DE] "} px-5 py-3 rounded-3xl hover:bg-white hover:text-[#4640DE] hover:border-[1px] hover:border-[#4640DE] `}
              >
                Bookmarks
              </button>
            )}
          </div>
          {status == "authenticated" ? (
            <button
              onClick={() => signOut({ callbackUrl: "/" })}
              className={`${epilogue} font-bold text-white text-center bg-[#f51d1d] px-5 py-3 rounded-3xl hover:bg-white hover:text-[#f51d1d] hover: border-[1px] hover:border-[#f51d1d] `}
            >
              Logout
            </button>
          ) : (
            <button
              onClick={() => router.push("/SignIn")}
              className={`${epilogue} font-bold text-white text-center bg-[#4640DE] px-5 py-3 rounded-3xl hover:bg-white hover:text-[#4640DE] hover: border-[1px] hover:border-[#4640DE]`}
            >
              Signin
            </button>
          )}
        </div>
        <div className="flex justify-between">
          <div className="flex flex-col gap-1">
            <div
              className={`${poppins.className} text-[32px] leading-10 text-[#25324B]`}
            >
              Opportunities
            </div>
            <div
              className={`${epilogue.className} text-base font-normal text-[#7C8493]`}
            >
              Showing {list.length} results
            </div>
          </div>
          <div className="flex gap-[22px]">
            <div className="flex gap-3">
              <div
                className={`${epilogue.className} text-base font-normal text-[#7C8493]`}
              >
                Sort by:
              </div>
              <div
                className={`${epilogue.className} text-base font-medium text-[#25324B]`}
              >
                Most relevant
              </div>
            </div>
            <div className="h-8 border-[1px] border-[#202430]/10"></div>
          </div>
        </div>
        {list.map((card) => (
          <div key={card.id}>
            <JobListCard {...card} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobList;
