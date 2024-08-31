"use client";
import { ChangePasswordCard } from "@/components/ChangePasswordCard";
import CustomFormField from "@/components/CustomFormField";
import FileUploader from "@/components/FileUploader";
import { FormFieldType } from "@/components/forms/PatientForm";
import SettingCard from "@/components/SettingCard";
import { Form, FormControl } from "@/components/ui/form";
import React from "react";
import { useForm } from "react-hook-form";

const SettingPage = () => {
  const form = useForm({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
    },
  });
  return (
    <div className="!bg-[#fff] font-montserrat sm:h-auto flex flex-col relative min-h-full  text-black  py-[32px]  space-y-[32px]">
      <div className="px-[30px]">
        <div className="grid md:grid-cols-2 gap-x-8">
          <div className="gap-y-4">
            <Form {...form}>
              <form
                // onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6 flex-1"
              >
                <CustomFormField
                  control={form.control}
                  fieldType={FormFieldType.SKELETON}
                  name="identificationDocument"
                  //   label="Scanned copy of identification document"
                  renderSkeleton={(field) => (
                    <FormControl>
                      <FileUploader
                        files={field.value}
                        onChange={field.onChange}
                      />
                    </FormControl>
                  )}
                />
              </form>
            </Form>
            <SettingCard />
          </div>
          <ChangePasswordCard />
        </div>
      </div>
    </div>
  );
};

export default SettingPage;
