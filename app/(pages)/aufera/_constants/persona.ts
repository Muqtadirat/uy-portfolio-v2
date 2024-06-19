import {
  azeezPersona,
  nnekaPersona,
  yemiPersona,
  helenPersona,
} from "@/assets/asset";

interface ProfileProps {
  name: string;
  age: number;
  location: string;
  occupation: string;
  image: any;
}

interface PersonaProps {
  profile: ProfileProps[];
  details: string[];
}

export const persona: PersonaProps[] = [
  {
    profile: [
      {
        name: "Azeez Balogun",
        age: 28,
        location: "Ikeja, Lagos",
        occupation: "Student",
        image: azeezPersona,
      },
    ],
    details: ["Bio", "Frustrations", "Motivations", "Goals"],
  },
  {
    profile: [
      {
        name: "Ayomikun Nneka",
        age: 36,
        location: "Ikeja, Lagos",
        occupation: "IT professional",
        image: nnekaPersona,
      },
    ],
    details: ["Bio", "Frustrations", "Motivations", "Goals"],
  },
  {
    profile: [
      {
        name: "Rashidat Helen",
        age: 24,
        location: "Ikeja, Lagos",
        occupation: "Operation specialist",
        image: helenPersona,
      },
    ],
    details: ["Bio", "Frustrations", "Motivations", "Goals"],
  },
  {
    profile: [
      {
        name: "Yemi Hussain",
        age: 50,
        location: "Ikeja, Lagos",
        occupation: "Design lead",
        image: yemiPersona,
      },
    ],
    details: ["Bio", "Frustrations", "Motivations", "Goals"],
  },
];
