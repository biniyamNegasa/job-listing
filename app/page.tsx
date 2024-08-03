import Image from "next/image";
import JobListCard, { CardType } from "./JobListCard/JobListCard";
import eagleImage from "../public/logo-eagle.jpg";
import calendarIcon from "../public/calendar.png";
import KeyValueIcon, { KeyValueType } from "./KeyValueIcon/KeyValueIcon";
import ApplicantDashboard from "./ApplicantDashboard/ApplicantDashboard";
import JobList from "./JobList/JobList";

export default function Home() {
  const obj: CardType = {
    title: "Social media manager",
    mainContent:
      "As a Social Media Assistant, you will work closely with the social media manager or marketing team to execute social media strategies and campaigns. You will be responsible for assisting in the creation and scheduling of engaging content, monitoring social media channels, and interacting with followers. Your primary goal will be to enhance brand visibility, foster positive relationships with the audience, and drive engagement and conversions.",
    who: "ABC Media",
    imageLink: eagleImage,
    imageAlt: "something",
    place: "Addis Ababa",
    where: "In Person",
  };

  const keyValue: KeyValueType = {
    icon: calendarIcon,
    keyProp: "Start Date",
    value: "Aug 02, 2023",
    iconAlt: "Calendar Icon",
  };

  return (
    <main>
      <JobList />
    </main>
  );
}
