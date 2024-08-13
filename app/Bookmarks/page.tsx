"use client";
import BookmarkCard from "../BookmarkCard/BookmarkCard";
import { poppins } from "../ApplicantDashboard/ApplicantDashboard";
import { useRouter } from "next/navigation";
import {
  useGetAllOpportunitiesQuery,
  useGetBookmarkQuery,
} from "../service/job-info";
import { useEffect, useState } from "react";
import { signOut, useSession } from "next-auth/react";
import { Session } from "../JobList/page";
import { epilogue } from "../JobListCard/JobListCard";

export interface Bookmark {
  eventID: string;
  title: string;
  orgName: string;
  location: string;
  logoUrl: string;
  opType: string;
  datePosted: string;
  dateBookmarked: string;
}

const Bookmarks = () => {
  const router = useRouter();
  const { data: session, status } = useSession() as Session;

  useEffect(() => {
    console.log("Session:", session, "Status:", status);
  }, [status, session]);

  if (status === "unauthenticated") {
    router.push("/SignIn");
  }
  const accessToken = session?.user?.accessToken!;

  const { data, isLoading } = useGetBookmarkQuery({
    accessToken,
  });
  const { refetch } = useGetAllOpportunitiesQuery({
    accessToken,
  });

  const [bookmarks, setBookmarks] = useState<Bookmark[]>([]);

  useEffect(() => {
    if (data) {
      setBookmarks(data.data);
    }
  }, [data]);

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
              onClick={() => (refetch(), router.push("/"))}
              className={`${epilogue} font-bold text-white text-center bg-[#4640DE] px-5 py-3 rounded-3xl hover:bg-white hover:text-[#4640DE] hover:border-[1px] hover:border-[#4640DE] `}
            >
              HOME
            </button>
            {status === "authenticated" && (
              <button
                className={`${epilogue} font-bold text-[#4640DE] text-center bg-white px-5 py-3 rounded-3xl border-[1px] border-[#4640DE]`}
              >
                Bookmarks
              </button>
            )}
          </div>
          {status === "authenticated" ? (
            <button
              onClick={() => signOut({ callbackUrl: "/" })}
              className={`${epilogue} font-bold text-white text-center bg-[#f51d1d] px-5 py-3 rounded-3xl hover:bg-white hover:text-[#f51d1d] hover: border-[1px] hover:border-[#f51d1d] `}
            >
              Logout
            </button>
          ) : (
            <button
              onClick={() => router.push("/SignIn")}
              className={`${epilogue} font-bold text-white text-center bg-[#4640DE] px-5 py-3 rounded-3xl hover:bg-white hover:text-[#4640DE] hover:border-[1px] hover:border-[#4640DE]`}
            >
              Sign in
            </button>
          )}
        </div>
        <div className="flex justify-between">
          <div className="flex flex-col gap-1">
            <div
              className={`${poppins.className} text-[32px] leading-10 text-[#25324B]`}
            >
              Bookmarked Opportunities
            </div>
            <div
              className={`${epilogue.className} text-base font-normal text-[#7C8493]`}
            >
              Showing {bookmarks.length} results
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
                Most recent
              </div>
            </div>
            <div className="h-8 border-[1px] border-[#202430]/10"></div>
          </div>
        </div>
        {bookmarks.map((bookmark) => (
          <div key={bookmark.eventID}>
            <BookmarkCard {...bookmark} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bookmarks;
