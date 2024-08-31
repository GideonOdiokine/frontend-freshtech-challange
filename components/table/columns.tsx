"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Appointment } from "@/types/appwrite.types";
import { StatusBadge } from "../StatusBadge";
import { TableModal } from "../modals/TableModal";

export const columns: ColumnDef<Appointment>[] = [
  {
    accessorKey: "service",
    header: "Service",
    cell: ({ row }) => {
      return <p className="text-14-medium ">{row.getValue("service")}</p>;
    },
  },
  {
    accessorKey: "amount",
    header: () => <div className="text-right">Amount</div>,
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("amount"));

      // Format the amount as a dollar amount
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "NGN",
      }).format(amount);

      return <div className="font-medium w-[10px]">{formatted}</div>;
    },
  },
  {
    accessorKey: "totalAmount",
    header: "Total Amount",
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("totalAmount"));

      // Format the amount as a dollar amount
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "NGN",
      }).format(amount);

      return <div className="font-medium">{formatted}</div>;
    },
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const appointment = row.original;
      return (
          <StatusBadge status={appointment.status} />
      );
    },
  },
  {
    accessorKey: "paymentMethod",
    header: "Payment Method",
    cell: ({ row }) => {
      return (
        <p className="text-14-regular">
          {row.getValue("paymentMethod")}
        </p>
      );
    },
  },
  {
    accessorKey: "transactionNo",
    header: "Transaction No",
    cell: ({ row }) => {
      return (
        <div className="">
          <p className="whitespace-nowrap">{row.getValue("transactionNo")}</p>
        </div>
      );
    },
  },
  {
    id: "actions",
    header: () => <div className="pl-4">Actions</div>,
    cell: ({ row }) => {
      return <TableModal />;
    },
  },
];
