import {
  auferaCard,
  acomartCard,
  homefundCard,
  serviceTrackerCard,
  mechoCard,
  mechoECard,
} from "@/assets/asset";

interface WorkCardsProps {
  card: any;
  alt: string;
}

export const mobileWorkCards: WorkCardsProps[] = [
  {
    card: auferaCard,
    alt: "Aufera.",
  },
  { card: homefundCard, alt: "Homefund." },
  { card: serviceTrackerCard, alt: "Service tracker." },
  { card: mechoCard, alt: "Mecho website." },
  { card: acomartCard, alt: "Acomart." },
  { card: mechoECard, alt: "Mecho enterprise application." },
];
