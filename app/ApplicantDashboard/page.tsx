"use client";

import { useEffect, useState } from "react";
import { JobPosting } from "../JobList/JobList";
import ApplicantDashboard, { DashboardType } from "./ApplicantDashboard";
import { useGetOpportunityByIdQuery } from "../service/job-info";

const DataPage = () => {
  const [id, setId] = useState<string | null>(null);
  const [jobPost, setJobPost] = useState<DashboardType | null>(null);
  useEffect(() => {
    const searchId = new URLSearchParams(window.location.search).get("id");
    const { data, isError, isLoading } = useGetOpportunityByIdQuery(searchId);
    console.log(data);
    const jobPostData: JobPosting | null = data?.data;
    console.log(jobPost);
    if (jobPostData) {
      const misc: DashboardType = {
        categories: jobPostData.categories,
        deadline: jobPostData.deadline,
        description: jobPostData.description,
        endDate: jobPostData.endDate,
        location: jobPostData.location,
        postedOn: jobPostData.datePosted,
        requiredSkills: jobPostData.requiredSkills,
        responsibilities: jobPostData.responsibilities,
        startDate: jobPostData.startDate,
        traits: jobPostData.idealCandidate,
        whenWhere: jobPostData.whenAndWhere,
      };
      setJobPost(misc);
    }
  });
  return jobPost ? (
    <ApplicantDashboard {...jobPost} />
  ) : (
    <p>There's no page with that description</p>
  );
};

export default DataPage;
