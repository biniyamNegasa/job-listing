import { TagTypes } from "../BorderBasedTag/BorderBasedTag";
import "./FilledTag.css";

const FilledTag = ({ fontClassName, bgColor, color, text }: TagTypes) => {
  return (
    <div
      className={`
        ${fontClassName} rounded-[80px] ${bgColor} px-[10px] py-[6px] ${color} font-semibold text-center"
      `}
    >
      {text}
    </div>
  );
};

export default FilledTag;
