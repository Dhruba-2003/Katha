import React from "react";
import { Icon } from "@iconify/react";

const Glowbtn = ({text, additionalClassname}) => {
  return (
    <button className={`bg-[#3F373A]/50  text-white flex gap-1.5 items-center px-4 py-2 sm:px-5 sm:py-3 rounded-full font-display text-[15px] sm:text-[15px] tracking-[0.025em] mx-auto ${additionalClassname}`}>
      <Icon icon="ant-design:gemini-filled" className="w-4 h-4 sm:w-6 sm:h-6 text-[#ff3d8f]" />
      {text}
      <Icon icon="ant-design:gemini-filled" className="w-4 h-4 sm:w-6 sm:h-6 text-[#ff3d8f]" />
    </button>
  );
};

export default Glowbtn;
