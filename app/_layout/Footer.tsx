import Image from "next/image";
import Link from "next/link";
import {
  dribbleLogo,
  linkedinLogo,
  logo,
  logoDesk,
  mediumLogo,
  twitterLogo,
} from "@/assets/asset";

interface IconProps {
  logo: any;
  alt: string;
  href: string;
}

const icons: IconProps[] = [
  {
    logo: twitterLogo,
    alt: "Twitter",
    href: "https://twitter.com/UthmanYussuff_O",
  },
  {
    logo: linkedinLogo,
    alt: "LinkedIn",
    href: "https://www.linkedin.com/in/uthmanyussuff/",
  },
  {
    logo: dribbleLogo,
    alt: "Dribble",
    href: "https://dribbble.com/UthmanYussuff",
  },
  {
    logo: mediumLogo,
    alt: "Medium",
    href: "https://medium.com/@uthmanyussuff",
  },
];
const Footer = () => {
  return (
    <footer className="mx-6 lg:mx-[4.5rem] mb-6 lg:mb-10 border-t border-greyScale-60 pt-5 lg:pt-12 flex items-center justify-between">
      <Link href="/">
        <Image src={logo} alt="logo" priority className="lg:hidden"/>
        <Image src={logoDesk} alt="logo" priority className="hidden lg:block"/>
      </Link>
      <div className="flex gap-4 lg:gap-6">
        {icons.map(({ logo, href, alt }) => (
          <Link
            key={alt}
            href={href}
            className="bg-greyScale-20 hover:bg-black transition-all duration-500 ease-in-out rounded-full p-3 lg:p-4"
          >
            <Image src={logo} alt={alt} />
          </Link>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
