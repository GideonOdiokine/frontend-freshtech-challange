import clsx from "clsx";
import Image from "next/image";


export const StatusBadge = ({ status }: { status: Status }) => {
  return (
    <div className={clsx("status-badge", {})}>
      <p
        className={clsx("text-12-semibold capitalize", {
          "text-[#2DAE32]": status === "successful",
          "text-[#EE5D50]": status === "failed",
          "text-[#FFB547]": status === "initiated",
        })}
      >
        {status}
      </p>
    </div>
  );
};
