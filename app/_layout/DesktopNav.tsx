import { logo } from "@/assets/asset";
import Image from "next/image";
import React from "react";
import navLinks from "./navLinks";
import Link from "next/link";
import PrimaryButton from "../_components/Buttons/PrimaryButton";

interface DesktopNavProps {
  pathname: string;
}

const sendMail = () => {
  window.location.href = "mailto:uthmanyussuff@gmail.com";
};

const DesktopNav: React.FC<DesktopNavProps> = ({ pathname }) => {
  return (
    <nav className="fixed z-40 w-full bg-greyScale-10">
      <div className="hidden lg:flex justify-between items-center px-[4.5rem] py-8">
        <Link href="/">
          <Image src={logo} alt="logo" priority />
        </Link>
        <div className="flex gap-9 items-center">
          <ul className="flex gap-12 text-lg">
            {navLinks.map(({ title, href }) => (
              <Link
                href={href}
                key={title}
                target={`${href.startsWith("#") ? "" : "_blank"}`}
                rel="noopener noreferrer"
                className={`${
                  pathname === href ? "text-white" : "text-greyScale-40"
                } hover:text-white`}
              >
                <li>{title}</li>
              </Link>
            ))}
          </ul>
          <PrimaryButton onClick={sendMail}>Send me a mail</PrimaryButton>
        </div>
      </div>
    </nav>
  );
};

export default DesktopNav;
