import "./BorderBasedTag.css";

export interface TagTypes {
  text: string;
  color: string;
  fontClassName: string;
}

const BorderBasedTag = ({ fontClassName, color, text }: TagTypes) => {
  return (
    <div
      className={
        fontClassName +
        " rounded-[80px] bg-[" +
        color +
        "]/10 px-[10px] py-[6px] text-[" +
        color.slice(0, color.length - 2) +
        "] font-semibold min-h-[31px] min-w-[60px] text-center"
      }
    >
      {text}
    </div>
  );
};

export default BorderBasedTag;
