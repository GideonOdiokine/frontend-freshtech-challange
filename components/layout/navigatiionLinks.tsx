"use client";
import { useActiveLink } from "@/hooks/useActiveLinks";
import { cn } from "@/lib/utils";
import { Montserrat } from "next/font/google";
import Link from "next/link";
import Icon from "../Icons"; // Import the icons as React components


const NavigationLinks = ({ href, icon, title, color, setOpen }: any) => {
  const IconComponent = Icon[icon];
  const isActive = useActiveLink(href); // Get the active state

  return (
    <Link
      href={href}
      key={href}
      onClick={() => {
        if(setOpen) setOpen(false);
      }}
      className={cn(
        "text-sm !font-medium no-underline font-montserrat group flex py-3 w-full justify-start relative cursor-pointer transition",
        isActive ? "text-white bg-[#4169E1] rounded-2xl" : "text-[#4C689E]"
      )}
    >
      <div className="flex items-center flex-1 px-[15px] font-montserrat">
        <div className={cn("pr-3", isActive && "text-white")}>
          {IconComponent && (
            <IconComponent
              width={24}
              height={24}
              fill={isActive ? "currentColor" : "white"}
              // `currentColor` uses the text color unless overridden
            />
          )}
        </div>
        {title}
      </div>
    </Link>
  );
};

export default NavigationLinks;
