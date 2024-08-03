import JobListCard, { epilogue } from "../JobListCard/JobListCard";
import "./JobList.css";
import imageLink from "../../public/logo-eagle.jpg";
import { poppins } from "../ApplicantDashboard/ApplicantDashboard";

const JobList = () => {
  return (
    <div className="py-[72px] pl-[124px]">
      <div className="w-[919px] flex flex-col gap-10">
        <div className="flex justify-between">
          <div className="flex flex-col gap-1">
            <div
              className={`${poppins.className} text-[32px] leading-10 text-[#25324B]`}
            >
              Opportunities
            </div>
            <div
              className={`${epilogue.className} text-base font-normal text-[#7C8493]`}
            >
              Showing 73 results
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
                Most relevant
              </div>
            </div>
            <div className="h-8 border-[1px] border-[#202430]/10"></div>
          </div>
        </div>
        <JobListCard
          title="Something"
          imageAlt="again"
          imageLink={imageLink}
          mainContent="Et nisi nostrud voluptate aliqua officia in consequat. Et occaecat mollit tempor sint excepteur nulla anim et elit occaecat. Excepteur adipisicing dolore velit Lorem consectetur magna enim sint consequat fugiat ex officia quis. Non incididunt nisi veniam irure tempor in ad exercitation incididunt culpa minim culpa laboris culpa. Magna irure in cupidatat ea fugiat excepteur consectetur mollit mollit elit cillum ex."
          place="Addis Ababa, Ethiopia"
          where="In Person"
          who="Blabla PLC"
        />
        <JobListCard
          title="Something"
          imageAlt="again"
          imageLink={imageLink}
          mainContent="Et nisi nostrud voluptate aliqua officia in consequat. Et occaecat mollit tempor sint excepteur nulla anim et elit occaecat. Excepteur adipisicing dolore velit Lorem consectetur magna enim sint consequat fugiat ex officia quis. Non incididunt nisi veniam irure tempor in ad exercitation incididunt culpa minim culpa laboris culpa. Magna irure in cupidatat ea fugiat excepteur consectetur mollit mollit elit cillum ex."
          place="Addis Ababa, Ethiopia"
          where="In Person"
          who="Blabla PLC"
        />
        <JobListCard
          title="Something"
          imageAlt="again"
          imageLink={imageLink}
          mainContent="Et nisi nostrud voluptate aliqua officia in consequat. Et occaecat mollit tempor sint excepteur nulla anim et elit occaecat. Excepteur adipisicing dolore velit Lorem consectetur magna enim sint consequat fugiat ex officia quis. Non incididunt nisi veniam irure tempor in ad exercitation incididunt culpa minim culpa laboris culpa. Magna irure in cupidatat ea fugiat excepteur consectetur mollit mollit elit cillum ex."
          place="Addis Ababa, Ethiopia"
          where="In Person"
          who="Blabla PLC"
        />
        <JobListCard
          title="Something"
          imageAlt="again"
          imageLink={imageLink}
          mainContent="Et nisi nostrud voluptate aliqua officia in consequat. Et occaecat mollit tempor sint excepteur nulla anim et elit occaecat. Excepteur adipisicing dolore velit Lorem consectetur magna enim sint consequat fugiat ex officia quis. Non incididunt nisi veniam irure tempor in ad exercitation incididunt culpa minim culpa laboris culpa. Magna irure in cupidatat ea fugiat excepteur consectetur mollit mollit elit cillum ex."
          place="Addis Ababa, Ethiopia"
          where="In Person"
          who="Blabla PLC"
        />
      </div>
    </div>
  );
};

export default JobList;
