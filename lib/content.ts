import type { LucideIcon } from "lucide-react";
import { BarChart3, Megaphone, MessageSquare, Rocket, Search, Sprout } from "lucide-react";

export const site = {
  name: "Test One Digital",
  email: "sarah.mitchell@testonedigital.com",
  phoneDisplay: "+1 (416) 555-0198",
  phoneHref: "tel:+14165550198",
  instagramHandle: "@testonedigital",
  instagramUrl: "https://www.instagram.com/testonedigital/",
};

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export type Service = { title: string; description: string; price: string; icon: LucideIcon };

export const services: Service[] = [
  {
    title: "Social Media Management",
    description: "Engaging content and consistent posting to grow your audience and build your brand.",
    price: "$300/mo",
    icon: MessageSquare,
  },
  {
    title: "SEO Audit",
    description:
      "A complete review of your website with clear, actionable recommendations to improve your search rankings.",
    price: "$150",
    icon: Search,
  },
  {
    title: "Ad Campaign Setup",
    description: "Strategic setup and management of targeted ad campaigns to help you reach more customers.",
    price: "$500",
    icon: Megaphone,
  },
];

export type Plan = { name: string; price: string; description: string; icon: LucideIcon; popular?: boolean };

export const plans: Plan[] = [
  {
    name: "Starter",
    price: "$300/mo",
    description: "Essential digital marketing support to help you get started and build momentum.",
    icon: Sprout,
  },
  {
    name: "Growth",
    price: "$500/mo",
    description: "Expanded support to grow your audience, generate more leads, and increase your visibility.",
    icon: Rocket,
    popular: true,
  },
  {
    name: "Pro",
    price: "$900/mo",
    description: "Comprehensive digital marketing support for businesses ready to scale further.",
    icon: BarChart3,
  },
];
