import { TagTypes } from "../BorderBasedTag/BorderBasedTag";
import "./FilledTag.css";

const FilledTag = ({ fontClassName, bgColor, color, text }: TagTypes) => {
  return (
    <button
      className={`
        ${fontClassName} rounded-[80px] ${bgColor} px-[10px] py-[6px] ${color} font-semibold "
      `}
    >
      {text}
    </button>
  );
};

export default FilledTag;
