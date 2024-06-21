import { logo } from "@/assets/asset";
import Image from "next/image";
import PrimaryButton from "../_components/Buttons/PrimaryButton";
import { Spin as Hamburger } from "hamburger-react";
import navLinks from "./navLinks";
import Link from "next/link";

interface MobileNavProps {
  showMenu: boolean;
  pathname: string;
  onClick: (string: boolean) => void;
}

const sendMail = () => {
  window.location.href = "mailto:uthmanyussuff@gmail.com";
};

const MobileNav: React.FC<MobileNavProps> = ({
  showMenu,
  pathname,
  onClick,
}) => {
  return (
    <nav className="fixed w-full bg-greyScale-10">
      <div className={`flex lg:hidden justify-between items-center px-6 py-8`}>
        <Link href="/">
          <Image src={logo} alt="logo" priority />
        </Link>
        <div className="flex gap-7">
          <PrimaryButton onClick={sendMail}>Send me a mail</PrimaryButton>
          <Hamburger
            size={26}
            color="#fff"
            onToggle={() => onClick(!showMenu)}
          />
        </div>

        {showMenu && (
          <div
            className={`absolute h-fit pb-10 border-b-2 border-white bg-greyScale-10 top-28 bg-gr left-0 right-0 transition-transform duration-300 ease-in-out ${
              showMenu ? "translate-x-0" : "translate-x-full"
            }`}
            onClick={() => onClick(false)}
          >
            <ul className="flex flex-col gap-8 items-center">
              {navLinks.map(({ title, href }) => (
                <Link
                  href={href}
                  key={title}
                  rel="noopener noreferrer"
                  target={`${href.startsWith("#") ? "" : "_blank"}`}
                  className={`text-white ${
                    pathname === href ? "text-white" : "text-greyScale-40"
                  }`}
                >
                  <li>{title}</li>
                </Link>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default MobileNav;
