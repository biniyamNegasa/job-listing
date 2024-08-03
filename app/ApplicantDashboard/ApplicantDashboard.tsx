import KeyValueIcon from "../KeyValueIcon/KeyValueIcon";
import demo from "../../public/calendar.png";
import FilledTag from "../FilledTag/FilledTag";
import { epilogue } from "../JobListCard/JobListCard";
import { Poppins } from "next/font/google";
import { FaRegCheckCircle } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import BorderBasedTag from "../BorderBasedTag/BorderBasedTag";

const poppins = Poppins({
  subsets: ["latin"],
  weight: "900",
});

const ApplicantDashboard = () => {
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
            As a Social Media Assistant, you will work closely with the social
            media manager or marketing team to execute social media strategies
            and campaigns. You will be responsible for assisting in the creation
            and scheduling of engaging content, monitoring social media
            channels, and interacting with followers. Your primary goal will be
            to enhance brand visibility, foster positive relationships with the
            audience, and drive engagement and conversions.
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
            <li className="flex gap-2">
              <FaRegCheckCircle className="text-[#56CDAD] flex-none" />
              Community engagement to ensure that is supported and actively
              represented online
            </li>
            <li className="flex gap-2">
              <FaRegCheckCircle className="text-[#56CDAD] flex-none" />
              Focus on social media content development and publication
            </li>
            <li className="flex gap-2">
              <FaRegCheckCircle className="text-[#56CDAD] flex-none" />
              Marketing and strategy support
            </li>
            <li className="flex gap-2">
              <FaRegCheckCircle className="text-[#56CDAD] flex-none" />
              Stay on top of trends on social media platforms and suggest
              content ideas to the team
            </li>
            <li className="flex gap-2">
              <FaRegCheckCircle className="text-[#56CDAD] flex-none" />
              Engage with online communities
            </li>
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
            <li>
              Passionate & Reliable: Genuine interest in our mission and a
              strong desire to make a positive impact, responsible, and
              committed to fulfilling volunteer commitments.
            </li>
            <li>
              Adaptable, Team Player & Strong Communication Skills: Able to work
              effectively in diverse teams; and contributes positively. Flexible
              and open to embracing new challenges and shifting priorities;
              Clear verbal and written communication, active listening, and
              constructive feedback.
            </li>
            <li>
              Respectful: Embraces diversity, inclusive, and treats others with
              respect. Abides with all our rules and regulations.
            </li>
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
              The onboarding event for this event will take place on Jan 18th,
              2023 in AAU Auditorium.
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
          value="July 21, 2023"
          icon={demo}
          iconAlt="theThingAboutThatThing"
        />
        <KeyValueIcon
          keyProp="Deadline"
          value="July 31, 2011"
          icon={demo}
          iconAlt="theThingAboutThatThing"
        />
        <KeyValueIcon
          keyProp="Location"
          value="Addis Ababa"
          icon={demo}
          iconAlt="theThingAboutThatThing"
        />
        <KeyValueIcon
          keyProp="Start Date"
          value="Aug 02, 2023"
          icon={demo}
          iconAlt="theThingAboutThatThing"
        />
        <KeyValueIcon
          keyProp="End Date"
          value="Sep 02, 2023"
          icon={demo}
          iconAlt="theThingAboutThatThing"
        />
        <div className="text-[#D6DDEB] w-[294px] border-[1px]"></div>
        <div className="flex flex-col gap-6">
          <div className={`${poppins.className} text-2xl text-[#25324B]`}>
            Catagories
          </div>
          <div className="flex gap-2">
            <BorderBasedTag
              color="text-[#FFB836]"
              bgColor="bg-[#EB85331A]/10"
              text="Marketing"
              fontClassName={epilogue.className}
            />
            <BorderBasedTag
              color="text-[#56CDAD]"
              bgColor="bg-[#56CDAD]/10"
              text="Design"
              fontClassName={epilogue.className}
            />
          </div>
        </div>
        <div className="text-[#D6DDEB] w-[294px] border-[1px]"></div>
        <div className="flex flex-col gap-6">
          <div className={`${poppins.className} text-2xl text-[#25324B]`}>
            Required Skills
          </div>
          <div className="flex flex-wrap gap-2">
            <FilledTag
              color="text-[#4640DE]"
              borderColor="border-[#4640DE]"
              text="Social Media Marketing"
              fontClassName={epilogue.className}
            />
            <FilledTag
              color="text-[#4640DE]"
              borderColor="border-[#4640DE]"
              text="English"
              fontClassName={epilogue.className}
            />
            <FilledTag
              color="text-[#4640DE]"
              borderColor="border-[#4640DE]"
              text="Copywriting"
              fontClassName={epilogue.className}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplicantDashboard;
