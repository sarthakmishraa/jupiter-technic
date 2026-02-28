import type { ReactNode } from "react";

export interface Advantage {
  iconName: string; // references icon component key
  title: string;
  description: string;
  color: string;
  bg: string;
  border: string;
}

export const ADVANTAGES: Advantage[] = [
  {
    iconName: "Shield",
    title: "Quality Control",
    description:
      "Every product undergoes thorough quality checks before dispatch. We maintain strict inspection protocols to ensure dimensional accuracy and material compliance.",
    color: "text-blue-400",
    bg: "bg-blue-500/10",
    border: "border-blue-500/20",
  },
  {
    iconName: "Cog",
    title: "Reliable Vendor Network",
    description:
      "Our sourcing network includes established manufacturers and OEM suppliers, ensuring consistent product availability and authentic quality standards.",
    color: "text-amber-400",
    bg: "bg-amber-500/10",
    border: "border-amber-500/20",
  },
  {
    iconName: "Target",
    title: "Competitive Pricing",
    description:
      "Direct sourcing relationships and bulk procurement allow us to offer competitive pricing without compromising on product quality or delivery timelines.",
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/20",
  },
  {
    iconName: "Wrench",
    title: "Technical Knowledge",
    description:
      "Our team brings hands-on mechanical engineering expertise, helping clients select the right components for their specific applications and operating conditions.",
    color: "text-cyan-400",
    bg: "bg-cyan-500/10",
    border: "border-cyan-500/20",
  },
  {
    iconName: "Truck",
    title: "Timely Delivery",
    description:
      "We understand production schedules. Our logistics are designed to meet committed delivery timelines, minimizing downtime for your operations.",
    color: "text-violet-400",
    bg: "bg-violet-500/10",
    border: "border-violet-500/20",
  },
  {
    iconName: "Users",
    title: "Customer-Focused Service",
    description:
      "From initial enquiry to post-delivery support, we maintain clear communication and responsive service to build lasting business relationships.",
    color: "text-rose-400",
    bg: "bg-rose-500/10",
    border: "border-rose-500/20",
  },
];
