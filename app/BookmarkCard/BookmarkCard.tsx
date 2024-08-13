import { useRouter } from "next/navigation";
import { epilogue } from "../JobListCard/JobListCard";
export interface BookmarkCardType {
  eventID: string;
  title: string;
  orgName: string;
  location: string;
  logoUrl: string;
  opType: string;
  datePosted: string;
  dateBookmarked: string;
}

const BookmarkCard = ({
  eventID,
  title,
  orgName,
  location,
  logoUrl,
  opType,
  datePosted,
  dateBookmarked,
}: BookmarkCardType) => {
  const router = useRouter();

  return (
    <div className="flex justify-between p-6 w-full h-px-266 border rounded-[30px] border-[#D6DDEB] hover:border-[#25324B]">
      <div className="flex justify-between w-full h-px-218 gap-6">
        <div>
          <img alt="logo" src={logoUrl} className="w-32 h-22" />
        </div>
        <div
          onClick={() => router.push(`/ApplicantDashboard?id=${eventID}`)}
          className="flex flex-col w-full h-px-218 gap-2"
        >
          <div className="flex justify-between">
            <h3
              className={
                epilogue.className +
                " text-xl leading-6 font-semibold text-[#25324B]"
              }
            >
              {title}
            </h3>
          </div>
          <div className="flex items-center w-full h-px-27 gap-2">
            <div
              className={
                epilogue.className +
                " w-px-265 h-px-26 text-sm leading-6 font-normal text-[#7C8493]"
              }
            >
              {orgName}
            </div>
            <div className="w-1 h-1 bg-[#7C8493]"></div>
            <div
              className={
                epilogue.className +
                " w-px-265 h-px-26 text-sm leading-6 font-normal text-[#7C8493]"
              }
            >
              {location}
            </div>
          </div>
          <p className="w-full h-px-112 font-normal text-base leading-6 text-[#25324B] cursor-pointer">
            Posted on: {new Date(datePosted).toLocaleDateString()}
          </p>
          <p className="text-sm text-gray-500">
            Bookmarked on: {new Date(dateBookmarked).toLocaleDateString()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BookmarkCard;
