"use client";

import KeyValueIcon from "../KeyValueIcon/KeyValueIcon";
import FilledTag from "../FilledTag/FilledTag";
import { epilogue } from "../JobListCard/JobListCard";
import { Poppins } from "next/font/google";
import { FaRegCheckCircle } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import BorderBasedTag from "../BorderBasedTag/BorderBasedTag";
import calendar from "../assets/calendar.png";
import calendarEnd from "../assets/calendar-end.png";
import hot from "../assets/hot.png";
import locationIcon from "../assets/location.png";
import plusCircle from "../assets/plus-circle.png";

export const poppins = Poppins({
  subsets: ["latin"],
  weight: "900",
});

export interface DashboardType {
  description: string;
  responsibilities: string;
  traits: string;
  whenWhere: string;
  postedOn: string;
  deadline: string;
  location: string[];
  startDate: string;
  endDate: string;
  categories: string[];
  requiredSkills: string[];
}

const ApplicantDashboard = ({
  description,
  responsibilities,
  traits,
  whenWhere,
  postedOn,
  deadline,
  location,
  startDate,
  endDate,
  categories,
  requiredSkills,
}: DashboardType) => {
  return (
    <div className="flex gap-[62px] p-8">
      <div className="flex flex-col py-[46px] gap-[55px]">
        <div className="flex flex-col gap-4">
          <div className={poppins.className + " text-2xl text-[#25324B]"}>
            Description
          </div>
          <p
            className={
              epilogue.className + " text-base font-normal text-[#25324B]"
            }
          >
            {description}
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <div className={poppins.className + " text-2xl text-[#25324B]"}>
            Responsibilities
          </div>
          <ul
            className={`
             ${epilogue.className} 
               text-base font-normal text-[#25324B]`}
          >
            {responsibilities.split("\n").map((text) => (
              <li className="flex gap-2">
                <FaRegCheckCircle className="text-[#56CDAD] flex-none" />
                {text}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-4">
          <div className={poppins.className + " text-2xl text-[#25324B]"}>
            Ideal Candidate we want
          </div>
          <ul
            className={
              epilogue.className +
              " text-base font-normal text-[#25324B] list-disc list-inside"
            }
          >
            {traits.split("\n").map((text) => (
              <li>{text}</li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-4">
          <div className={poppins.className + " text-2xl text-[#25324B]"}>
            When & Where
          </div>
          <div className="flex gap-2">
            <CiLocationOn className="text-[#56CDAD] w-8 h-8 rounded-full border-[1px] p-1" />
            <p
              className={
                epilogue.className + " text-base font-normal text-[#25324B]"
              }
            >
              {whenWhere}
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-5 min-w-[294px]">
        <div className={`${poppins.className} text-2xl text-[#25324B]`}>
          About Role
        </div>
        <KeyValueIcon
          keyProp="Posted On"
          value={postedOn.slice(0, 10)}
          icon={plusCircle}
          iconAlt="theThingAboutThatThing"
        />
        <KeyValueIcon
          keyProp="Deadline"
          value={deadline.slice(0, 10)}
          icon={hot}
          iconAlt="theThingAboutThatThing"
        />
        <KeyValueIcon
          keyProp="Location"
          value={location.join(", ")}
          icon={locationIcon}
          iconAlt="theThingAboutThatThing"
        />
        <KeyValueIcon
          keyProp="Start Date"
          value={startDate.slice(0, 10)}
          icon={calendar}
          iconAlt="theThingAboutThatThing"
        />
        <KeyValueIcon
          keyProp="End Date"
          value={endDate.slice(0, 10)}
          icon={calendarEnd}
          iconAlt="theThingAboutThatThing"
        />
        <div className="text-[#D6DDEB] w-[294px] border-[1px]"></div>
        <div className="flex flex-col gap-6">
          <div className={`${poppins.className} text-2xl text-[#25324B]`}>
            Categories
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <FilledTag
                color="text-[#FFB836]"
                bgColor="bg-[#EB85331A]/10"
                text={category}
                fontClassName={epilogue.className}
              />
            ))}
          </div>
        </div>
        <div className="text-[#D6DDEB] w-[294px] border-[1px]"></div>
        <div className="flex flex-col gap-6">
          <div className={`${poppins.className} text-2xl text-[#25324B]`}>
            Required Skills
          </div>
          <div className="flex flex-wrap gap-2">
            {requiredSkills.map((skill) => (
              <BorderBasedTag
                color="text-[#4640DE]"
                borderColor="border-[#4640DE]"
                text={skill}
                fontClassName={epilogue.className}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplicantDashboard;
