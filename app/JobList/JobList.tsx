"use client";

import JobListCard, { CardType, epilogue } from "../JobListCard/JobListCard";
import "./JobList.css";
import imageLink from "../../public/logo-eagle.jpg";
import { poppins } from "../ApplicantDashboard/ApplicantDashboard";
import jobPostings from "../jobs.json";
import { useRouter } from "next/navigation";

export interface JobPosting {
  title: string;
  description: string;
  responsibilities: string[];
  ideal_candidate: {
    age: string;
    gender: string;
    traits: string[];
  };
  when_where: string;
  about: {
    posted_on: string;
    deadline: string;
    location: string;
    start_date: string;
    end_date: string;
    categories: string[];
    required_skills: string[];
  };
  company: string;
  image: string;
}

export const postings: JobPosting[] = jobPostings.job_postings;
let list: CardType[] = [];

for (let jobPost of postings) {
  let customCard: CardType = {
    description: jobPost.description,
    categories: jobPost.about.categories,
    company: jobPost.company,
    imageLink: jobPost.image,
    location: jobPost.about.location,
    title: jobPost.title,
    where: "In Person",
  };
  list.push(customCard);
}

const JobList = () => {
  const router = useRouter();

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
        {list.map((card, index) => (
          <div onClick={() => router.push(`/ApplicantDashboard?id=${index}`)}>
            <JobListCard {...card} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobList;
