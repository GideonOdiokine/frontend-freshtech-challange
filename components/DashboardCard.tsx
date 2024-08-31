import Image from "next/image";
import React from "react";
import creditCardIcon from "@/public/assets/images/card.png";

const DashboardCard = () => {
  return (
    <div className="hidden flex-1 px-[48px] lg:block pb-10 relative items-center overflow-hidden justify-between rounded-3xl bg-[#EFF3FB]">
      <div>
        <h2 className="text-[#3C517C] pt-10">Cards </h2>
        <div className="text-[#6882B6] text-2xl py-10">
          You Have No <br /> Saved Cards
        </div>
      </div>
      <Image
        src={creditCardIcon}
        width={398}
        height={398}
        className="hidden md:hidden lg:flex  absolute top-[-2px] right-0 h-full object-cover"
        alt="card"
      />
    </div>
  );
};

export default DashboardCard;
