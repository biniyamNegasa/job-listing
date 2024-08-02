import Image from "next/image";
import JobListCard, { CardType } from "./JobListCard/JobListCard";
import testing from "../public/logo-eagle.jpg";
export default function Home() {
  const obj: CardType = {
    title: "Social media manager",
    mainContent:
      "As a Social Media Assistant, you will work closely with the social media manager or marketing team to execute social media strategies and campaigns. You will be responsible for assisting in the creation and scheduling of engaging content, monitoring social media channels, and interacting with followers. Your primary goal will be to enhance brand visibility, foster positive relationships with the audience, and drive engagement and conversions.",
    who: "ABC Media",
    imageLink: testing,
    imageAlt: "something",
    place: "Addis Ababa",
    where: "In Person",
  };
  return (
    <main>
      <JobListCard
        title={obj.title}
        mainContent={obj.mainContent}
        where={obj.where}
        who={obj.who}
        imageAlt={obj.imageAlt}
        place={obj.place}
        imageLink={obj.imageLink}
      />
    </main>
  );
}
