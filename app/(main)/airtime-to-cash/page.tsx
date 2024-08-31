import { AirtimeToCashSteps } from "@/components/airtimeToCash/AirtimeToCashSteps";
import React from "react";

const AirtimeToCashPage = () => {
  return (
    <div className="!bg-[#fff] font-montserrat sm:h-auto flex flex-col relative min-h-full  text-black  py-[32px]  space-y-[32px]">
      <AirtimeToCashSteps />;
    </div>
  );
};

export default AirtimeToCashPage;
