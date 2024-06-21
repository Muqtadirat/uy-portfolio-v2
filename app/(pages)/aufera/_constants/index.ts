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

interface SubtitleLabels {
  subTitle: string;
  labels: string[];
}

interface RecruitmentDataProps {
  title: string;
  subTitleLabels: SubtitleLabels[];
}

export const criteriaData: RecruitmentDataProps[] = [
  {
    title: "Recruitment Criteria",
    subTitleLabels: [
      {
        subTitle: "Renters",
        labels: [
          "Aged 18 - 58",
          "Has a valid driver’s license",
          "Has a valid ID",
        ],
      },
      {
        subTitle: "Hosts",
        labels: ["Aged 18 - 58", "Owns at least one car"],
      },
    ],
  },
];

export const questionsData: RecruitmentDataProps[] = [
  {
    title: "Recruitment Questions",
    subTitleLabels: [
      {
        subTitle: "Renters",
        labels: [
          "How do you move around Lagos?",
          "What do you love about moving around Lagos?",
          "What do you dislike about moving around Lagos?",
          "How would you prefer to move around?",
          "Have you ever rented a car, If yes how was your experience?",
        ],
      },
      {
        subTitle: "Hosts",
        labels: [
          "Do you rent your cars out?",
          "If yes, how do you rent your car?",
          "What are your favorite things about renting your car out?",
          "What are your least favorite things about renting your car out?",
        ],
      },
    ],
  },
];
