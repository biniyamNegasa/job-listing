import "./BorderBasedTag.css";

export interface TagTypes {
  text: string;
  color: string;
  bgColor?: string;
  borderColor?: string;
  fontClassName: string;
}

const BorderBasedTag = ({ fontClassName, color, bgColor, text }: TagTypes) => {
  return (
    <div
      className={`${fontClassName} rounded-[80px] ${bgColor} px-[10px] py-[6px] ${color} font-semibold min-h-[31px] min-w-[60px] text-center`}
    >
      {text}
    </div>
  );
};

export default BorderBasedTag;
