import {
  auferaCard,
  acomartCard,
  homefundCard,
  serviceTrackerCard,
  mechoCard,
  mechoECard,
  auferaCardDesk,
  acomartCardDesk,
  homefundCardDesk,
  mechoCardDesk,
  mechoECardDesk,
  serviceTrackerCardDesk,
} from "@/assets/asset";

interface WorkCardsProps {
  card: any;
  alt: string;
  label?: string;
  large?: boolean;
  href: string;
  title?: string
}

export const mobileWorkCards: WorkCardsProps[] = [
  {
    card: auferaCard,
    alt: "Aufera.",
    href: "/aufera",
  },
  {
    card: homefundCard,
    alt: "Homefund.",
    href: "/homefund",
  },
  {
    card: serviceTrackerCard,
    alt: "Service tracker.",
    href: "/service-tracker",
  },
  { card: mechoCard, alt: "Mecho website.", href: "/mecho-website" },
  { card: acomartCard, alt: "Acomart.", href: "/acomart" },
  {
    card: mechoECard,
    alt: "Mecho enterprise application.",
    href: "mecho-enterprise",
  },
];

export const desktopWorkCards: WorkCardsProps[] = [
  {
    card: auferaCardDesk,
    title: "Aufera (Case Study)",
    alt: "Aufera.",
    href: "/aufera",
    label: "Travel",
    large: true,
  },
  {
    card: homefundCardDesk,
    title: "Homefund",
    alt: "Homefund.",
    href: "/homefund",
    label: "Mortgage & lending services",
    large: false,
  },
  {
    card: serviceTrackerCardDesk,
    title: "Service tracker",
    alt: "Service tracker.",
    href: "/service-tracker",
    label: "Logistics",
    large: false,
  },
  {
    card: mechoCardDesk,
    title: "Mecho Website Redesign",
    alt: "Mecho website.",
    href: "/mecho-website",
    label: "Automobile Services",
    large: false,
  },
  {
    card: acomartCardDesk,
    title: "Acomart (Case Study)",
    alt: "Acomart.",
    href: "/acomart",
    label: "Entertainment",
    large: false
  },
  {
    card: mechoECardDesk,
    title: "Mecho enterprise application",
    alt: "Mecho enterprise application.",
    href: "mecho-enterprise",
    label: "Saas",
    large: true
  },
];
