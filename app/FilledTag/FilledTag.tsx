import { TagTypes } from "../BorderBasedTag/BorderBasedTag";
import "./FilledTag.css";

const FilledTag = ({ fontClassName, color, text }: TagTypes) => {
  return (
    <div
      className={
        fontClassName +
        " rounded-[80px] border-[" +
        color +
        "] border-[1px] px-[10px] py-[6px] text-[" +
        color +
        "] font-semibold min-h-[31px] min-w-[60px] text-center"
      }
    >
      {text}
    </div>
  );
};

export default FilledTag;
