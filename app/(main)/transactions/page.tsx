import { columns } from "@/components/table/columns";
import { DataTable } from "@/components/table/DataTable";
import { getRecentAppointmentList } from "@/lib/actions/appointment.actions";
import React from "react";

const data: any = [
  {
    service: "mtn Airtime VTU",
    amount: 100,
    totalAmount: 100,
    status: "Initiated",
    paymentMethod: "Transfer",
    transactionNo: "17045621860850336938179613",
    actions: "",
  },
  {
    service: "mtn Airtime VTU",
    amount: 100,
    totalAmount: 100,
    status: "Initiated",
    paymentMethod: "Transfer",
    transactionNo: "17045621860850336938179613",
    actions: "",
  },
  {
    service: "mtn Airtime VTU",
    amount: 100,
    totalAmount: 100,
    status: "Initiated",
    paymentMethod: "Transfer",
    transactionNo: "17045621860850336938179613",
    actions: "",
  },
  {
    service: "mtn Airtime VTU",
    amount: 100,
    totalAmount: 100,
    status: "Initiated",
    paymentMethod: "Transfer",
    transactionNo: "17045621860850336938179613",
    actions: "",
  },
  {
    service: "mtn Airtime VTU",
    amount: 100,
    totalAmount: 100,
    status: "Initiated",
    paymentMethod: "Transfer",
    transactionNo: "17045621860850336938179613",
    actions: "",
  },
  {
    service: "mtn Airtime VTU",
    amount: 100,
    totalAmount: 100,
    status: "Initiated",
    paymentMethod: "Transfer",
    transactionNo: "17045621860850336938179613",
    actions: "",
  },
  {
    service: "mtn Airtime VTU",
    amount: 100,
    totalAmount: 100,
    status: "Initiated",
    paymentMethod: "Transfer",
    transactionNo: "17045621860850336938179613",
    actions: "",
  },
  {
    service: "mtn Airtime VTU",
    amount: 100,
    totalAmount: 100,
    status: "Initiated",
    paymentMethod: "Transfer",
    transactionNo: "17045621860850336938179613",
    actions: "",
  },
  {
    service: "mtn Airtime VTU",
    amount: 100,
    totalAmount: 100,
    status: "Initiated",
    paymentMethod: "Transfer",
    transactionNo: "17045621860850336938179613",
    actions: "",
  },
  {
    service: "mtn Airtime VTU",
    amount: 100,
    totalAmount: 100,
    status: "Initiated",
    paymentMethod: "Transfer",
    transactionNo: "17045621860850336938179613",
    actions: "",
  },
  {
    service: "mtn Airtime VTU",
    amount: 100,
    totalAmount: 100,
    status: "Initiated",
    paymentMethod: "Transfer",
    transactionNo: "17045621860850336938179613",
    actions: "",
  },
  {
    service: "mtn Airtime VTU",
    amount: 100,
    totalAmount: 100,
    status: "Initiated",
    paymentMethod: "Transfer",
    transactionNo: "17045621860850336938179613",
    actions: "",
  },
];
const Page = () => {
  return (
    <div className="!bg-[#fff] font-montserrat sm:h-auto flex flex-col relative min-h-full  text-black  py-[32px]  space-y-[32px]">
      <div className="px-[30px]">
        <DataTable columns={columns} data={data} />
      </div>
    </div>
  );
};

export default Page;
