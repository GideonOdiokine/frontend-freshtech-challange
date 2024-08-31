import React from "react";
import { Card, CardContent, CardFooter } from "./ui/card";
import Image from "next/image";
import Icon from './Icons';

const SettingCard = () => {
  return (
    <Card className="rounded-[24px] mt-4">
      <CardContent className="space-y-3">
        <div className="flex justify-between pt-6">
          <span className="text-[#4C689E] font-normal text-base">Name </span>
          <span className="text-[#4C689E] font-semibold text-base">
            Lawal Wahab Babatunde
          </span>
        </div>
        <div className="flex justify-between">
          <span className="text-[#4C689E] font-normal text-base">Email </span>
          <span className="text-[#4C689E] font-semibold text-base">
            wabdotmail@gmail.com
          </span>
        </div>
        <div className="flex justify-between">
          <span className="text-[#4C689E] font-normal text-base">
            Phone Number{" "}
          </span>
          <span className="text-[#4C689E] font-semibold text-base">
            0906 856 2949
          </span>
        </div>
        <div className="flex justify-between">
          <span className="text-[#4C689E] font-normal text-base">
            Account Status{" "}
          </span>
          <span className="text-green-500 font-semibold text-base">Active</span>
        </div>
        <div className="flex justify-between">
          <span className="text-[#4C689E] font-normal text-base">
            Referral link
          </span>
          <span className="text-[#4C689E] flex items-end flex-col font-semibold text-base">
            www.subsum.com/tre/
            <div className="flex cursor-pointer text-[#4169E1] gap-x-[3px] text-base">
              <Icon.copyIcon />
              Copy
            </div>
          </span>
        </div>
        <CardFooter className="p-0 font-semibold text-base text-[#4169E1]">
          <button>Edit Details</button>
        </CardFooter>
      </CardContent>
    </Card>
  );
};

export default SettingCard;
