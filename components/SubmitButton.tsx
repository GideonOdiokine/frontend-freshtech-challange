import React from 'react'
import { Button } from './ui/button'
import Image from 'next/image';


interface ButtonProps {
  isLoading?: boolean;
  className?: string;
  children: React.ReactNode;
  disabled?:boolean
}

const SubmitButton = ({className, isLoading,disabled, children}:ButtonProps) => {
  return (
    <Button
      type="submit"
      disabled={isLoading || disabled}
      className={
        className ??
        `shad-primary-btn !py-[17px] !h-[50px] w-full ${disabled && "bg-[#4169E1] opacity-0 cursor-not-allowed"}`
      }
    >
      {isLoading ? (
        <div className="flex items-center gap-4">
          <Image
            src="/assets/icons/loader.svg"
            alt="loader"
            width={24}
            height={24}
            className="animate-spin"
          />
          Loading...
        </div>
      ) : (
        children
      )}
    </Button>
  );
}

export default SubmitButton
