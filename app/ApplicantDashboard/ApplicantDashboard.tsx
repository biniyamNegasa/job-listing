import KeyValueIcon from "../KeyValueIcon/KeyValueIcon";
import demo from "../../public/calendar.png";
import FilledTag from "../FilledTag/FilledTag";
import { epilogue } from "../JobListCard/JobListCard";

const ApplicantDashboard = () => {
  return (
    <div>
      <div>
        <div>
          <div>Description</div>
          <p></p>
        </div>
        <div>
          <div>Responsibilities</div>
          <ul></ul>
        </div>
        <div>
          <div>Ideal Candidate we want</div>
          <ul></ul>
        </div>
        <div>
          <div>When & Where</div>
          <p></p>
        </div>
      </div>
      <div>
        <div>About Role</div>
        <KeyValueIcon
          keyProp="something"
          value="anotherThingForThis"
          icon={demo}
          iconAlt="theThingAboutThatThing"
        />
        <KeyValueIcon
          keyProp="something"
          value="anotherThingForThis"
          icon={demo}
          iconAlt="theThingAboutThatThing"
        />
        <KeyValueIcon
          keyProp="something"
          value="anotherThingForThis"
          icon={demo}
          iconAlt="theThingAboutThatThing"
        />
        <KeyValueIcon
          keyProp="something"
          value="anotherThingForThis"
          icon={demo}
          iconAlt="theThingAboutThatThing"
        />
        <KeyValueIcon
          keyProp="something"
          value="anotherThingForThis"
          icon={demo}
          iconAlt="theThingAboutThatThing"
        />
        <div></div>
        <div>
          <div>Catagories</div>
          <div>
            <FilledTag
              color="#221438"
              text="Marketing"
              fontClassName={epilogue.className}
            />
            <FilledTag
              color="#A342B4"
              text="Design"
              fontClassName={epilogue.className}
            />
          </div>
        </div>
        <div></div>
        <div>
          <div>Required Skills</div>
          <FilledTag
            color="#FFFFFF"
            text="Social Media Marketing"
            fontClassName={epilogue.className}
          />
          <FilledTag
            color="#FFFFFF"
            text="English"
            fontClassName={epilogue.className}
          />
          <FilledTag
            color="#FFFFFF"
            text="Copywriting"
            fontClassName={epilogue.className}
          />
        </div>
      </div>
    </div>
  );
};

export default ApplicantDashboard;
