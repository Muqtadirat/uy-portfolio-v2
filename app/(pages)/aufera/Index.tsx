import { arrowUpRight, auferaCover, auferaCoverDesk } from "@/assets/asset";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Overview from "./Overview";

const Aufera: React.FC = () => {
  return (
    <>
      <div className="font-bold mb-8 lg:mb-[7.5rem]">
        <h1 className="font-black mb-4 text-[2.5rem] lg:text-[5rem] font-grotesk">
          Aufera (Case Study)
        </h1>
        <Link
          href="https://www.aufera.com/"
          target="_blank"
          className="flex text-xl lg:text-2xl"
        >
          www.aufera.com <Image src={arrowUpRight} alt="Arrow up right" />
        </Link>
      </div>

      <Image src={auferaCover} alt="Aufera" className="lg:hidden" />
      <Image src={auferaCoverDesk} alt="Aufera" className="hidden lg:block" />

      <Overview />
    </>
  );
};

export default Aufera;
