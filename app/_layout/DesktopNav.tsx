import { logo } from "@/assets/asset";
import Image from "next/image";
import React from "react";
import navLinks from "./navLinks";
import Link from "next/link";
import PrimaryButton from "../_components/Buttons/PrimaryButton";

interface DesktopNavProps {
  pathname: string;
}

const DesktopNav: React.FC<DesktopNavProps> = ({ pathname }) => {
  return (
    <nav className="hidden lg:flex justify-between items-center px-[4.5rem] py-8">
      <Link href="/">
        <Image src={logo} alt="logo" priority />
      </Link>
      <div className="flex gap-9 items-center">
        <ul className="flex gap-12 text-lg">
          {navLinks.map(({ title, href }) => (
            <Link
              href={href}
              key={title}
              className={`${
                pathname === href ? "text-white" : "text-greyScale-40"
              }`}
            >
              <li>{title}</li>
            </Link>
          ))}
        </ul>
        <PrimaryButton>Send me a mail</PrimaryButton>
      </div>
    </nav>
  );
};

export default DesktopNav;
