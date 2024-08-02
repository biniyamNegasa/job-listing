import Image, { StaticImageData } from "next/image";
import "./KeyValueIcon.css";
import { Epilogue } from "next/font/google";
import { epilogue } from "../JobListCard/JobListCard";

export interface KeyValueType {
  icon: StaticImageData;
  keyProp: string;
  value: string;
  iconAlt: string;
}

export const SvgIcon = ({ svgSrc }: any) => {
  return <div>{svgSrc}</div>;
};

const KeyValueIcon = ({ icon, keyProp, value, iconAlt }: KeyValueType) => {
  return (
    <div className="flex gap-5">
      <div className="rounded-full border-[1px] p-[10px] border-[#D6DDEB]">
        <Image src={icon} alt={iconAlt} />
      </div>
      <div>
        <div
          className={
            epilogue.className + "font-normal text-base text-[#515B6F]"
          }
        >
          {keyProp}
        </div>
        <div
          className={
            epilogue.className + "text-base font-semibold text-[#25324B]"
          }
        >
          {value}
        </div>
      </div>
    </div>
  );
};

export default KeyValueIcon;
