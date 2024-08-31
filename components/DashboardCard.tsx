import Image from "next/image";
import React from "react";
import creditCardIcon from "@/public/assets/images/creditCard.png";

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
        width={100}
        height={100}
        className="w-[230px]  hidden md:hidden lg:flex drop-shadow-2xl  absolute top-[-2px] right-0 h-full object-left-top"
        alt="card"
      />
    </div>
  );
};

export default DashboardCard;
