"use client";
import { cn } from "@/lib/utils";
import Image from 'next/image';
import { useRouter } from "next/navigation";
import React from "react";
import { Poppins } from 'next/font/google';
import Icon from './Icons';


type GoBackButtonProps = {
  onClick?: () => void;
  handlePrevious?: () => void;
  label?: string;
};

const poppins = Poppins({ weight: "500", subsets: ["latin"] });

const GoBackButton = ({
  label,
}: GoBackButtonProps) => {
  const router = useRouter();
  const handleClick = () => {
    router.back();
  };
  return (
    <React.Fragment>
      <button
        onClick={handleClick}
        type="button"
        className={cn(
          `flex items-center cursor-pointer gap-[10px] z-50 font-poppins font-medium`,
          poppins.className
        )}
      >
       <Icon.goBackIcon/>
        <span className="text-[#4169E1] text-base">{label}</span>
      </button>
    </React.Fragment>
  );
};

export default GoBackButton;
