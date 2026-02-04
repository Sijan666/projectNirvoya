import React from "react";

const Badge = ({ className, badgeText }) => {
  return (
    <div
      className={`py-[4.5px] px-[12.5px] bg-[linear-gradient(to_right,#FF7A00_30%,#FFB800_100%)] font-Poppins font-semibold text-base text-[#FAFAFA] rounded-tl-[10px] rounded-r-[3px] rounded-bl-[3px] ${className} inline-block`}
    >
      {badgeText}
    </div>
  );
};

export default Badge;
