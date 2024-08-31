import { LoginForm } from "@/components/forms/LoginForm";
import GoBackButton from '@/components/GoBackButton';
import { Button } from '@/components/ui/button';
import React from "react";

const Login = () => {
  return (
    <section className="flex-center size-full relative bg-[#EFF3FB]">
      <div className="flex justify-between absolute left-0 h-fit py-6 px-8">
        <GoBackButton label="Home" />
        <Button className="bg-[#4169E1] text-white fixed  right-10">Sign Up</Button>
      </div>
      <div className="container pt-12 md:pt-8 lg:!px[223px] md:!px-[150px]">
        <LoginForm />
      </div>
    </section>
  );
};

export default Login;
