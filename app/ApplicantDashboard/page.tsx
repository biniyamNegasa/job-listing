"use client";

import { useEffect, useState } from "react";
import { JobPosting } from "../JobList/JobList";
import data from "../jobs.json";
import ApplicantDashboard, { DashboardType } from "./ApplicantDashboard";

const DataPage = () => {
  const [id, setId] = useState<string | null>(null);
  const [jobPost, setJobPost] = useState<DashboardType | null>(null);
  useEffect(() => {
    const searchId = new URLSearchParams(window.location.search).get("id");
    const jobPostData: JobPosting[] | null = data.job_postings.filter(
      (d, index) => index.toString() == searchId
    );
    console.log(jobPost);
    if (jobPostData && jobPostData[0]) {
      const misc: DashboardType = {
        categories: jobPostData[0].about.categories,
        deadline: jobPostData[0].about.deadline,
        description: jobPostData[0].description,
        endDate: jobPostData[0].about.end_date,
        location: jobPostData[0].about.location,
        postedOn: jobPostData[0].about.posted_on,
        requiredSkills: jobPostData[0].about.required_skills,
        responsibilities: jobPostData[0].responsibilities,
        startDate: jobPostData[0].about.start_date,
        traits: jobPostData[0].ideal_candidate.traits,
        whenWhere: jobPostData[0].when_where,
      };
      setJobPost(misc);
    }
  });
  console.log(jobPost);
  return jobPost ? (
    <ApplicantDashboard {...jobPost} />
  ) : (
    <p>There's no page with that description</p>
  );
};

export default DataPage;
