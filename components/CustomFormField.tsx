import { E164Number } from "libphonenumber-js/core";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "./ui/input";
import { Control } from "react-hook-form";
import Image from "next/image";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Select, SelectContent, SelectTrigger, SelectValue } from "./ui/select";
import { Textarea } from "./ui/textarea";
import { Checkbox } from "./ui/checkbox";
import { useState } from "react";
import { FormFieldType } from './forms/LoginForm';

interface CustomProps {
  control: Control<any>;
  fieldType: FormFieldType;
  name: string;
  label?: string;
  placeholder?: string;
  iconSrc?: string;
  iconAlt?: string;
  disabled?: boolean;
  dateFormat?: string;
  showTimeSelect?: boolean;
  children?: React.ReactNode;
  isPassword?: boolean;
  renderSkeleton?: (field: any) => React.ReactNode;
}

const RenderField = ({
  field,
  props,
  error,
}: {
  field: any;
  props: CustomProps;
  error: any;
}) => {
  const [showPassword, setIsShowPassword] = useState(false);

  switch (props.fieldType) {
    case FormFieldType.INPUT:
      return (
        <div
          className={`flex  ${
              error && "border-red-500"
            } rounded-md border border-[#D7E1F4] bg-white $`}
        >
          <FormControl>
            <Input
              placeholder={props.placeholder}
              {...field}
              className="shad-input border-0 text-[#2B3B5A]"
              type={
                props.isPassword && showPassword
                  ? "text"
                  : props.isPassword
                  ? "password"
                  : "text"
              }
            />
          </FormControl>
          {props.isPassword && (
            <Image
              src="/assets/icons/eyes.svg"
              alt={props.iconAlt || "Icon"}
              width={24}
              height={24}
              className="mr-4"
              onClick={() => setIsShowPassword(!showPassword)}
            />
          )}
        </div>
      );
    case FormFieldType.TEXTAREA:
      return (
        <FormControl>
          <Textarea
            placeholder={props.placeholder}
            {...field}
            className="shad-textArea"
            disabled={props.disabled}
          />
        </FormControl>
      );
    case FormFieldType.CHECKBOX:
      return (
        <FormControl>
          <div className="flex items-center gap-4">
            <Checkbox
              id={props.name}
              checked={field.value}
              onCheckedChange={field.onChange}
            />
            <label htmlFor={props.name} className="checkbox-label">
              {props.label}
            </label>
          </div>
        </FormControl>
      );
    case FormFieldType.PHONE_INPUT:
      return (
        // <div className="flex rounded-md border border-dark-500 bg-dark-400">
        <FormControl>
          <PhoneInput
            defaultCountry="NG"
            placeholder={props.placeholder}
            international
            countryCallingCodeEditable={false}
            withCountryCallingCode
            {...field}
            value={field.value as E164Number | undefined}
            onChange={field.onChange}

            // ${error && "!border !border-red-500"}
            className={`input-phone`}
          />
        </FormControl>
        // </div>
      );
    case FormFieldType.DATE_PICKER:
      return (
        <div
          className={`${
            error && "!border !border-red-500"
          } flex rounded-md border border-dark-500 bg-dark-400`}
        >
          <Image
            src="/assets/icons/calendar.svg"
            height={24}
            width={24}
            alt="calender"
            className="ml-2"
          />

          <FormControl>
            <ReactDatePicker
              showTimeSelect={props.showTimeSelect ?? false}
              selected={field.value}
              onChange={(date: any) => field.onChange(date)}
              timeInputLabel="Time:"
              dateFormat={props.dateFormat ?? "MM/dd/yyyy"}
              wrapperClassName="date-picker"
              placeholderText={props.placeholder}
            />
          </FormControl>
        </div>
      );
    case FormFieldType.SELECT:
      return (
        <FormControl>
          <Select onValueChange={field.onChange} defaultValue={field.value}>
            <FormControl>
              <SelectTrigger className="shad-select-trigger">
                <SelectValue placeholder={props.placeholder} />
              </SelectTrigger>
            </FormControl>
            <SelectContent className="shad-select-content">
              {props.children}
            </SelectContent>
          </Select>
        </FormControl>
      );
    case FormFieldType.SKELETON:
      return props.renderSkeleton ? props.renderSkeleton(field) : null;
  }
};

const CustomFormField = (props: CustomProps) => {
  const { control, fieldType, name, label } = props;

  return (
    <FormField
      control={control}
      name={name}
      render={({ field, fieldState: { error } }) => (
        <FormItem className="flex-1 space-y-1">
          {fieldType !== FormFieldType.CHECKBOX && label && (
            <FormLabel className="!text-[#4C689E] font-normal">{label}</FormLabel>
          )}
          <RenderField field={field} props={props} error={error} />
          <FormMessage className="shad-error" />
        </FormItem>
      )}
    />
  );
};

export default CustomFormField;
