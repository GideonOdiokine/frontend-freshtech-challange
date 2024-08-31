"use client";

import Image from 'next/image';
import Icon from './Icons';
import MobileSidebar from './layout/mobile-sidebar';

const Header = () => {
  return (
    <div className="flex px-[30px] pt-[32px] sticky top-0 w-full bg-white z-30   md:px-[32px] items-center justify-between">
      <div className="hidden md:flex text-[#2B3B5A] text-xl font-medium">
        Welcome, Lawal Wahab
      </div>
      <div className="flex md:hidden">
        <MobileSidebar />
      </div>
      <div className="flex items-center text-[#4169E1] text-base space-x-[18px]">
        <span>Upgrade To Merchant</span>
        <div className="flex items-center space-x-[18px] cursor-pointer ">
          <Icon.noficationIcon />
          <Icon.profileIcon />
        </div>
      </div>
    </div>
  );
};

export default Header;
