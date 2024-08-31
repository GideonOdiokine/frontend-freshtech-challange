import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SubmitButton from './SubmitButton';
import CustomFormField from './CustomFormField';
import { ChangePasswordValidation } from '@/lib/validation';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { z } from 'zod';
import { Form } from './ui/form';
import { FormFieldType } from './forms/LoginForm';

export function ChangePasswordCard() {

    const form = useForm<z.infer<typeof ChangePasswordValidation>>({
      resolver: zodResolver(ChangePasswordValidation),
      defaultValues: {
        confirmPassword: "",
        password: "",
        currentPassword: "",
      },
    });
    const router = useRouter();
        const {
        formState: { errors, isValid },
    } = form;

  const onSubmit = async (
    values: z.infer<typeof ChangePasswordValidation>,
    e: React.FormEvent
  ) => {
    e.preventDefault();
    console.log(values);
    router.push("/dashboard");
  };

  return (
    <Tabs defaultValue="account" className="md:w-[400px]  mt-4 md:mt-0">
      <TabsList className="grid w-full grid-cols-2 gap-x-2 bg-[#fff] border-[#D7E1F4] p-2 border rounded-[1000px]">
        <TabsTrigger
          className="rounded-[100px] !py-[14px] font-semibold text-sm "
          value="account"
        >
          Change Password
        </TabsTrigger>
        <TabsTrigger
          className="rounded-[100px] !py-[14px] font-semibold text-sm"
          value="password"
        >
          Change PIN
        </TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit as any)}
            className="space-y-6 flex-1"
          >
            <Card className="bg-white py-[24px] px-[24px] rounded-3xl border border-[#D7E1F4]">
              <CardContent className="grid p-0 space-y-3">
                <div className="grid">
                  <CustomFormField
                    control={form.control}
                    fieldType={FormFieldType.INPUT}
                    name="currentPassword"
                    label="Current Password"
                    placeholder="Enter Current Password"
                    iconAlt="currentPass"
                    isPassword={true}
                  />
                </div>
                <div className="grid">
                  <CustomFormField
                    control={form.control}
                    fieldType={FormFieldType.INPUT}
                    name="password"
                    label="Password"
                    placeholder="Enter New Password"
                    iconAlt="password"
                    isPassword={true}
                  />
                </div>
                <div className="grid">
                  <CustomFormField
                    control={form.control}
                    fieldType={FormFieldType.INPUT}
                    name="confirmPassword"
                    label="Confirm Password"
                    placeholder="Enter New Password"
                    iconAlt="confirmPassword"
                    isPassword={true}
                  />
                </div>
              </CardContent>

              <CardFooter className="p-0 pt-8">
                <SubmitButton disabled={!isValid}>Submit</SubmitButton>
              </CardFooter>
            </Card>
          </form>
        </Form>
      </TabsContent>
      <TabsContent value="password"></TabsContent>
    </Tabs>
  );
}
