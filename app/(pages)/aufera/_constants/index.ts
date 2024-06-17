interface OverviewDataProps {
  title: string;
  texts?: string[];
}

export const overviewData: OverviewDataProps[] = [
  {
    title: "Overview",
    texts: [
      "Aufera is community based car rental app that allows people host or rent a vehicle to other users of the app using a peer-to-peer interaction model. The product was designed as a solution toincrease access to car rental options in Lagos, Nigeria.",
      "My approach to the interaction design of this product was user centered design and this helped me focus on a 4-step cycle design process of user research, product definition, sketching & wireframing, prototyping and user testing.",
    ],
  },
];

interface RecruitmentDataProps {
  title: string;
  subTitles?: {};
  subTitle?: string;
  labels?: string[];
}

export const criteriaData: RecruitmentDataProps[] = [
  {
    title: "Recruitment Criteria",
    subTitles: {
      subTitle: "",
    },
    // subTitle: "Renters",
    labels: ["Aged 18 - 58", "Has a valid driver’s license", "Has a valid ID"],
  },
];
