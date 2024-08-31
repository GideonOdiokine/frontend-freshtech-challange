"use client";
import SubmitButton from "../SubmitButton";
import { Button } from "../ui/button";
import { Card, CardContent, CardFooter } from "../ui/card";
import Image from "next/image";
import CustomFormField from "../CustomFormField";
import { useForm } from "react-hook-form";
import { Form, FormControl } from "../ui/form";
import { Switch } from "../ui/switch";
import { Label } from "../ui/label";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginFormValidation } from "@/lib/validation";
import { z } from "zod";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Icon from "../Icons";

export enum FormFieldType {
  INPUT = "input",
  TEXTAREA = "textarea",
  PHONE_INPUT = "phoneInput",
  CHECKBOX = "checkbox",
  DATE_PICKER = "datePicker",
  SELECT = "select",
  SKELETON = "skeleton",
}
export function LoginForm() {
  const form = useForm<z.infer<typeof LoginFormValidation>>({
    resolver: zodResolver(LoginFormValidation),
    defaultValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
  });
  const router = useRouter();

  const onSubmit = async (values: z.infer<typeof LoginFormValidation>) => {
    console.log(values);
    router.push("/dashboard");
  };

  return (
    <div className="space-y-6 flex flex-col py-9">
      <h2 className="text-[25px] text-[#4C689E] font-semibold text-center ">
        Login
      </h2>
      <div className="grid grid-cols-1">
        <Button
          variant="outline"
          className="bg-white drop-shadow-lg h-14 border border-[#D7E1F4] text-[#2B3B5A]"
        >
          <Icon.googleIcon />
          Login with Google
        </Button>
      </div>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs font-normal text-[13px]">
          <span className="bg-[#EFF3FB] text-[#1B2437] px-2 text-muted-foreground">
            Or continue with
          </span>
        </div>
      </div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-6 flex-1"
        >
          <Card className="bg-white py-10 px-[42px] border border-[#D7E1F4]">
            <CardContent className="grid p-0 space-y-3">
              <div className="grid">
                <CustomFormField
                  control={form.control}
                  fieldType={FormFieldType.INPUT}
                  name="email"
                  label="Email Address"
                  placeholder="wabdotmail@gmail.com"
                  iconSrc="/assets/icons/email.svg"
                  iconAlt="email"
                />
              </div>
              <div className="grid">
                <CustomFormField
                  control={form.control}
                  fieldType={FormFieldType.INPUT}
                  name="password"
                  label="Password"
                  placeholder="Gabon4351"
                  iconAlt="password"
                  isPassword={true}
                />
              </div>
              <CustomFormField
                control={form.control}
                fieldType={FormFieldType.SKELETON}
                name="rememberMe"
                // label="Remember me"
                renderSkeleton={(field) => (
                  <FormControl>
                    <div className="flex justify-between mt-3 items-center">
                      <div className="flex items-center  space-x-3 text-sm font-normal">
                        <Switch
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />

                        <Label
                          htmlFor="airplane-mode"
                          className="text-[#4C689E] text-[11px] md:text-sm font-normal"
                        >
                          Remember me
                        </Label>
                      </div>
                      <Link
                        href={"/"}
                        className="text-[#EE5D50] text-[10px] font-normal md:text-sm"
                      >
                        Recover Password
                      </Link>
                    </div>
                  </FormControl>
                )}
              />
            </CardContent>

            <CardFooter className="p-0 pt-8">
              <SubmitButton>Log in</SubmitButton>
            </CardFooter>
          </Card>
        </form>
      </Form>
    </div>
  );
}
