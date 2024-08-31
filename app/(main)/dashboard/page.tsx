import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import DashboardCard from "@/components/DashboardCard";
import Icon from '@/components/Icons';
import Link from 'next/link';

const Dashboard = () => {
  return (
    <div className="!bg-[#fff] font-montserrat sm:h-auto flex flex-col relative min-h-full  text-black  py-[32px]  space-y-[32px]">
      <div className="px-[30px]">
        <div className="flex w-full gap-6">
          <div className="flex flex-col gap-5 flex-1">
            <div className="flex h-[112px] flex-1 p-4 items-center justify-between rounded-3xl  border-2 border-[#D7E1F4]">
              <div className="">
                <h2 className="text-[#3C517C] text-sm md:text-base">
                  Wallet Balance
                </h2>
                <div className="text-[#3C517C] text-sm md:text-4xl font-semibold">
                  ₦3000
                </div>
              </div>
              <Button className="shad-primary-btn  md:px-10">
                Fund Wallet
              </Button>
            </div>
            <div className="flex h-[112px] flex-1 p-6 items-center border-2 justify-between rounded-3xl border-[#D7E1F4]">
              <div>
                <h2 className="text-[#3C517C] text-sm md:text-base font-normal">
                  Referral
                </h2>
                <div className="text-[#3C517C] md:leading-7  text-sm md:text-base font-normal">
                  Referral Code:{" "}
                  <span className="font-semibold">18/52ha089</span>
                </div>
                <div className="flex items-center pt-4 space-x-4">
                  <div className="flex text-[#4169E1] cursor-pointer font-semibold gap-x-[3px] text-sm md:text-base">
                    <Icon.copyIcon />
                    Copy
                  </div>
                  <Link href={"/setting"}>
                    <div className="flex text-[#4169E1] font-semibold gap-x-[3px] text-sm md:text-base">
                      <Icon.editIcon />
                      Edit
                    </div>
                  </Link>
                  <div className="flex text-[#4169E1] font-semibold gap-x-[3px] text-sm md:text-base">
                    <Icon.shareIcon />
                    Share
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card Section */}
          <DashboardCard />
        </div>
        <div className="grid md:grid-cols-[440.5px] mt-5">
          <div className="flex  p-6  border-2 justify-between rounded-3xl border-[#D7E1F4]">
            <div>
              <h2 className="text-[#3C517C] text-sm md:text-base font-normal">
                Total referrals made
              </h2>
              <div className="text-[#3C517C] leading-7 text-sm md:text-2xl font-normal">
                <span className="font-semibold">0</span>
              </div>
              <div className="flex items-center pt-4 space-x-4">
                <div className="flex text-[#4169E1] gap-x-[3px] text-sm md:text-base">
                  <Icon.cashIcon />
                  Cashout
                </div>
              </div>
            </div>
            <div className="pr-4">
              <h2 className="text-[#3C517C] text-sm md:text-base font-normal">
                Current wallet Bonus
              </h2>
              <div className="text-[#3C517C] leading-7  text-sm md:text-2xl font-normal">
                <span className="font-semibold">₦0.00</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
