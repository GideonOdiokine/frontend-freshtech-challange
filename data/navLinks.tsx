import { ReactElement } from "react";

export type navLinksType = {
  title: string;
  href?: string;
  color?: string;
  icon?:string
};
export const navLinks = (): navLinksType[] => [
  {
    title: "Dashboard",
    href: "/dashboard",
    color: "text-[#FE9900]",
    icon: "dashboardImg",
  },
  {
    title: "Buy Airtime",
    href: "/buy-airtime",
    icon: "airtimeIcon",
  },
  {
    title: "Buy Data",
    href: "/buy-data",
    icon: "buyDataIcon",
  },
  {
    title: "TV Subscription",
    href: "/tv-sub",
    icon: "TvIcon",
  },
  {
    title: "Pay Electric Bill",
    href: "/pay-bill",
    icon: "payIcon",
  },
  {
    title: "Airtime to Cash",
    href: "/airtime-to-cash",
    icon: "airtimeToCashIcon",
  },
  {
    title: "Transaction History",
    href: "/transactions",
    icon: "transactionIcon",
  },
  {
    title: "Help & Support",
    href: "/help-support",
    icon: "helpIcon",
  },
];
