import { TagTypes } from "../BorderBasedTag/BorderBasedTag";
import "./FilledTag.css";

const FilledTag = ({ fontClassName, borderColor, color, text }: TagTypes) => {
  return (
    <div
      className={`
        ${fontClassName} rounded-[80px] ${borderColor} border-[1px] px-[10px] py-[6px] ${color} font-semibold min-h-[31px] min-w-[60px] text-center"
      `}
    >
      {text}
    </div>
  );
};

export default FilledTag;
