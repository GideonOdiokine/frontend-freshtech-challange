"use client";
import { navLinks } from "@/data/navLinks";
import logo from "@/public/assets/icons/logo.svg";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import NavigationLinks from "./navigatiionLinks";
import logoutIcon from "@/public/assets/icons/logout.svg";
import Icon from '../Icons';

const Navigation = () => {
  const router = useRouter();

  return (
    <aside className="space-y-4 pt-[32px] flex flex-col h-full bg-[#EFF3FB] text-white">
      <div className=" flex flex-col flex-1">
        <Link href="/dashboard" passHref>
          <div className="flex items-center  pl-[40px] pb-[30px] ">
            <div className="hidden md:flex relative ">
              <Icon.logoIcon />
            </div>
            <div className="flex md:hidden relative mr-4">
              {/* <Icon.MobileLogo /> */}
            </div>
          </div>
        </Link>
        <div className="mx-8">
          {navLinks().map((route, index) => (
            <NavigationLinks key={index} {...route} />
          ))}
        </div>
        <div className="flex-grow-0">
          <hr className="border-t-1 border-[#F4F4F4] !mt-[86px] !pb-[24px] relative mx-10"></hr>
          <div
            tabIndex={0}
            role="button"
            aria-label="Log-out"
            className="text-[#4C689E] flex pl-[55px] mb-10 text-sm font-montserrat font-medium"
          >
            <Icon.logoutIcon />

            <div className="px-4">Log-out</div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Navigation;
