"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import "react-datepicker/dist/react-datepicker.css";

export const TableModal = () => {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="bg-[#EFF3FB] !p-2 text-[#4169E1] font-semibold text-base">
          Open
        </Button>
      </DialogTrigger>
      <DialogContent className="shad-dialog sm:max-w-md">
        <DialogHeader className="mb-4 space-y-3">
          <DialogTitle className="capitalize">
            Nextjs is faster and it comes with many benefit out of the box
          </DialogTitle>
          <DialogDescription>You just got here</DialogDescription>
        </DialogHeader>
        I am the table
      </DialogContent>
    </Dialog>
  );
};
