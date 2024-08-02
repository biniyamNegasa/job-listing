import "./JobListCard.css";
import Image, { StaticImageData } from "next/image";
import { Epilogue } from "next/font/google";
import BorderBasedTag from "../BorderBasedTag/BorderBasedTag";
import FilledTag from "../FilledTag/FilledTag";

const epilogue = Epilogue({ subsets: ["latin"] });
export interface CardType {
  title: string;
  mainContent: string;
  imageLink: StaticImageData;
  imageAlt: string;
  who: string;
  place: string;
  where: string;
}

const JobListCard = ({
  title,
  mainContent,
  imageLink,
  imageAlt,
  who,
  place,
  where,
}: CardType) => {
  return (
    <div className="flex justify-between p-6 w-px-919 h-px-266 border rounded-[30px] border-[#D6DDEB]">
      <div className="flex justify-between w-px-844 h-px-218 gap-6">
        <div>
          <Image alt={imageAlt} src={imageLink} className="w-px-66 h-px-59" />
        </div>
        <div className="flex flex-col w-px-755 h-px-218 gap-2">
          <h3
            className={
              epilogue.className +
              "text-xl leading-6 font-semibold text-[#25324B]"
            }
          >
            {title}
          </h3>
          <div className="flex items-center w-px-454 h-px-27 gap-2">
            <div
              className={
                epilogue.className +
                "w-px-265 h-px-26 text-sm leading-6 font-normal text-[#7C8493]"
              }
            >
              {who}
            </div>
            <div className="w-1 h-1 bg-[#7C8493]"></div>
            <div
              className={
                epilogue.className +
                "w-px-265 h-px-26 text-sm leading-6 font-normal text-[#7C8493]"
              }
            >
              {place}
            </div>
          </div>
          <p className="w-px-744 h-px-112 font-normal text-base leading-6 text-[#25324B]">
            {mainContent}
          </p>
          <div className="flex gap-2">
            <BorderBasedTag
              fontClassName={epilogue.className}
              text={where}
              color="#56CDAD1A"
            />
            <div className="w-[1px] h-8 bg-[#D6DDEB]"></div>
            <FilledTag
              fontClassName={epilogue.className}
              text="Education"
              color="#FFB836"
            />
            <FilledTag
              fontClassName={epilogue.className}
              text="IT"
              color="#4640DE"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobListCard;
