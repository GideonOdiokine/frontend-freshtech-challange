"use client";
import { useState } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import CustomFormField from "../CustomFormField";
import { useForm } from "react-hook-form";
import { Form, FormControl } from "../ui/form";
import { SelectItem } from "../ui/select";
import Image from "next/image";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { NetworkOptions } from '@/constants';
import { FormFieldType } from '../forms/LoginForm';


export function AirtimeToCashSteps() {
  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  function handlePrevious() {
    if (step > 1) setStep((s) => s - 1);
  }

  function handleNext() {
    if (step < 3) {
      setStep((s) => s + 1);
    }
  }
  const onSubmit = async (values: any) => {
    console.log(values);
  };

  return (
    <div className="px-[30px] mx-auto">
      <div className="flex w-full gap-x-2 pb-[54px]">
        <div className="w-full text-center">
          <h6 className="text-[#4169E1] font-semibold text-sm md:text-base">
            Fill Info
          </h6>
          <div
            className={`${
              step >= 1 ? "bg-[#4169E1]" : "bg-[#D7E1F4]"
            } h-[7px] rounded-[100px]`}
          ></div>
        </div>
        <div className="w-full text-center">
          <h6
            className={`${
              step >= 2 ? "text-[#4169E1]" : "text-[#D7E1F4]"
            }  font-semibold text-sm md:text-base`}
          >
            Make Payment
          </h6>
          <div
            className={`${
              step >= 2 ? "bg-[#4169E1]" : "bg-[#D7E1F4]"
            } h-[7px] rounded-[100px]`}
          ></div>
        </div>
        <div className="w-full text-center">
          <h6
            className={`${
              step >= 2 && "text-[#4169E1]"
            } text-[#D7E1F4] font-semibold text-sm md:text-base`}
          >
            View Receipt
          </h6>
          <div
            className={`${
              step >= 3 ? "bg-[#4169E1]" : "bg-[#D7E1F4]"
            } h-[7px] rounded-[100px]`}
          ></div>
        </div>
      </div>
      <Card className="steps md:w-[500px] !p-6">
        <StepMessage>
          {step === 1 && (
            <>
              <CardHeader className="p-0">
                <CardTitle className="text-[#6882B6] font-semibold text-xl text-center pb-[32px]">
                  Airtime to Cash
                </CardTitle>
              </CardHeader>
              <div className="grid">
                <CardContent className='p-0'>
                  <Form {...form}>
                    <form
                      onSubmit={form.handleSubmit(onSubmit)}
                      className="space-y-6 flex-1"
                    >
                      <div className="grid grid-cols-2 gap-x-3">
                        <CustomFormField
                          fieldType={FormFieldType.SELECT}
                          control={form.control}
                          name="selectNetwork"
                          label="Select Network"
                          placeholder="Select"
                        >
                          {NetworkOptions.map((network, i) => (
                            <SelectItem key={network + i} value={network}>
                              <div className="flex cursor-pointer items-center gap-2">
                                <Image
                                  src="/assets/icons/etisalat.svg"
                                  width={32}
                                  height={32}
                                  alt="network"
                                  className="rounded-full"
                                />
                                <p>{network}</p>
                              </div>
                            </SelectItem>
                          ))}
                        </CustomFormField>
                        <CustomFormField
                          control={form.control}
                          fieldType={FormFieldType.PHONE_INPUT}
                          name="phone"
                          label="Phone Number"
                          placeholder="(555) 342-4588"
                        />
                      </div>
                      <CustomFormField
                        control={form.control}
                        fieldType={FormFieldType.SKELETON}
                        name="amount"
                        label="Amount"
                        renderSkeleton={(field) => (
                          <FormControl>
                            <div
                              className={`flex items-centers  rounded-md border border-[#D7E1F4] bg-white $`}
                            >
                              <div className="my-auto pl-3 text-[#6882B6] font-semibold text-sm">
                                ₦
                              </div>
                              <FormControl>
                                <Input
                                  {...field}
                                  className="shad-input px-0 border-0 text-[#6882B6]"
                                  type={"text"}
                                />
                              </FormControl>
                            </div>
                          </FormControl>
                        )}
                      />
                      <CustomFormField
                        control={form.control}
                        fieldType={FormFieldType.INPUT}
                        name="airtimePin"
                        label="Airtime Share Pin"
                        placeholder="3546576433"
                      />
                    </form>
                    <div className="mt-[54px]">
                      <Button
                        className={`shad-primary-btn py-[17px] w-full`}
                        onClick={handleNext}
                      >
                        Proceed
                      </Button>
                    </div>
                  </Form>
                </CardContent>
              </div>
            </>
          )}
          {step === 2 && <h2>Hello 2</h2>}
          {step === 3 && <h2>Hello 3</h2>}
        </StepMessage>
      </Card>
    </div>
  );
}

function StepMessage({ children }: { children: React.ReactNode }) {
  return <div className="message">{children}</div>;
}
