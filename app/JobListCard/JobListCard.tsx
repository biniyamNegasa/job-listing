"use client";
import "./JobListCard.css";
import Image from "next/image";
import { Epilogue } from "next/font/google";
import BorderBasedTag from "../BorderBasedTag/BorderBasedTag";
import FilledTag from "../FilledTag/FilledTag";
import { FaRegBookmark, FaBookmark } from "react-icons/fa";
import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  useCreateBookmarkMutation,
  useDeleteBookmarkMutation,
} from "../service/job-info";

export const epilogue = Epilogue({ subsets: ["latin"] });

export interface CardType {
  id?: string;
  title: string;
  description: string;
  imageLink: string;
  company: string;
  location: string[];
  where: string;
  categories: string[];
  accessToken: string;
  isBookmarked: boolean;
  status: string;
}

const JobListCard = ({
  id,
  title,
  description,
  imageLink,
  company,
  location,
  where,
  categories,
  accessToken,
  isBookmarked,
  status,
}: CardType) => {
  const router = useRouter();
  const [bookmark, setBookmark] = useState(isBookmarked);

  const [createBookmark, createObj] = useCreateBookmarkMutation();
  const [deleteBookmark, deleteObj] = useDeleteBookmarkMutation();

  const toggleBookmark = async () => {
    if (bookmark) {
      console.log("Deleting bookmark job with:", { id, accessToken });
      try {
        const res = await deleteBookmark({ id, accessToken }).unwrap();
        console.log("delete response: ", res);
        console.log("Bookmark deleted successfully");
      } catch (e) {
        console.error("Failed to delete bookmark:", e);
      }
    } else {
      console.log("Bookmarking job with:", { id, accessToken });
      try {
        const res = await createBookmark({ id, accessToken }).unwrap();
        console.log("create response: ", res);
        console.log("Bookmark created successfully");
      } catch (e) {
        console.error("Failed to create bookmark:", e);
      }
    }
    setBookmark((prev) => !prev);
  };

  return (
    <div className="flex justify-between p-6 w-px-919 h-px-266 border rounded-[30px] border-[#D6DDEB] hover:border-[#25324B]">
      <div className="flex justify-between w-px-844 h-px-218 gap-6">
        <div>
          <img alt="logo" src={imageLink} className="w-px-66 h-px-59" />
        </div>
        <div className="flex flex-col w-px-755 h-px-218 gap-2">
          <div className="flex justify-between">
            <h3
              className={
                epilogue.className +
                "text-xl leading-6 font-semibold text-[#25324B]"
              }
            >
              {title}
            </h3>
            <button
              onClick={
                status === "authenticated"
                  ? toggleBookmark
                  : () => router.push("/SignIn")
              }
              disabled={createObj.isLoading || deleteObj.isLoading}
            >
              {bookmark ? <FaBookmark color="#4640DE" /> : <FaRegBookmark />}
            </button>
          </div>
          <div className="flex items-center w-px-454 h-px-27 gap-2">
            <div
              className={
                epilogue.className +
                "w-px-265 h-px-26 text-sm leading-6 font-normal text-[#7C8493]"
              }
            >
              {company}
            </div>
            <div className="w-1 h-1 bg-[#7C8493]"></div>
            <div
              className={
                epilogue.className +
                "w-px-265 h-px-26 text-sm leading-6 font-normal text-[#7C8493]"
              }
            >
              {location.join(", ")}
            </div>
          </div>
          <button className="text-left">
            <p
              className="w-px-744 h-px-112 font-normal text-base leading-6 text-[#25324B]"
              onClick={() => router.push(`/ApplicantDashboard?id=${id}`)}
            >
              {description}
            </p>
          </button>
          <div className="flex gap-2">
            <FilledTag
              fontClassName={epilogue.className}
              text={where}
              color="text-[#56CDAD]"
              bgColor="bg-[#56CDAD]/10"
            />
            <div className="w-[1px] h-8 bg-[#D6DDEB]"></div>
            {categories.map((category, index) => (
              <BorderBasedTag
                key={index}
                fontClassName={epilogue.className}
                color="text-[#FFB836]"
                borderColor="border-[#FFB836]"
                text={category}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobListCard;
