"use client";
import JobListCard, { CardType, epilogue } from "../JobListCard/JobListCard";
import "./JobList.css";
import { poppins } from "../ApplicantDashboard/ApplicantDashboard";
import { useRouter } from "next/navigation";
import { useGetAllOpportunitiesQuery } from "../service/job-info";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
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

const JobList = () => {
  const router = useRouter();
  const { data: session, status } = useSession();
  useEffect(() => {
    console.log(session, status);
  }, [status]);

  if (!session) router.push("/SignIn");

  const { data, isError, isLoading } = useGetAllOpportunitiesQuery({});
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
    };
    list.push(customCard);
  }

  return (
    <div className="py-[72px] pl-[124px]">
      <div className="w-[919px] flex flex-col gap-10">
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
              Showing 73 results
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
          <div
            onClick={() => router.push(`/ApplicantDashboard?id=${card.id}`)}
            key={card.id}
          >
            <JobListCard {...card} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobList;
