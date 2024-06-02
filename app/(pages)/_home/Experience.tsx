"use client";

import PrimaryButton from "@/app/_components/Buttons/PrimaryButton";
import Label from "@/app/_components/Label";
import { experience } from "./constants/experience";

const Experience = () => {
  return (
    <div className="px-6 lg:px-[4.5rem] pt-16 md:pt-[6.5rem] pb-6 md:pb-20 bg-greyScale-20">
      <h2 className="text-5xl lg:text-[5rem] mb-4 font-black font-grotesk">
        WORK <br /> EXPERIENCE
      </h2>
      <PrimaryButton>Download my resume</PrimaryButton>
      <article className="mt-14 flex md:flex-col md:gap-[4.5rem] overflow-x-auto snap-x snap-mandatory">
        {experience.map(({ company, role, period, skills, duties }) => {
          const firstSpaceIndex = company.indexOf(" ");

          const displayCompany = company.includes("ACOMART")
            ? "ACOMART"
            : firstSpaceIndex !== -1
            ? company.slice(0, firstSpaceIndex)
            : company;
          return (
            <section
              key={company}
              className="min-w-full md:min-w-0 mr-2 md:mr-0 mb-4 md:mb-0 snap-start md:flex items-baseline gap-10 lg:w-[52.5rem] md:ml-auto text-greyScale-90"
            >
              <div>
                <p className="text-xl lg:text-[2rem] md:w-[20rem] font-bold">
                  {period}
                </p>
              </div>
              <div className="mt-6 lg:mt-0">
                <p className="font-black text-2xl lg:text-[2rem]">{company}</p>
                <p className="font-bold text-xl lg:text-2xl mt-2 mb-4">
                  {role}
                </p>

                {/* labels */}
                <div className="flex gap-4 flex-wrap mb-4">
                  {skills.map((skill) => (
                    <Label key={skill}>{skill}</Label>
                  ))}
                </div>

                <div className="text-greyScale-90">
                  <p>At {displayCompany},</p>
                  <ul className="ml-6 space-y-2 mt-2 list-disc">
                    {duties.map((duty, index) => (
                      <li key={index}>{duty}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>
          );
        })}
      </article>
      <p className="text-xs text-greyScale-60 md:hidden italic">Scroll left for more</p>
    </div>
  );
};

export default Experience;
