import Image from "next/image";
import { desktopWorkCards, mobileWorkCards } from "./constants/workCards";
import Link from "next/link";

const Work = () => {
  return (
    <div
      id="work"
      className="px-6 lg:px-[4.5rem] pt-14 md:pt-[7.5rem] pb-6 md:pb-20"
    >
      <h2 className="font-grotesk font-bold text-5xl lg:text-[5rem]">
        SEE MY <br /> WORK
      </h2>

      <div className="mt-6 flex flex-col lg:hidden items-center gap-6">
        {mobileWorkCards.map(({ card, alt, href }) => (
          <Link key={alt} href={href}>
            <Image alt={alt} src={card} />
          </Link>
        ))}
      </div>

      <div className="hidden lg:flex justify-center flex-wrap gap-x-8 gap-y-10 mt-[4.5rem]">
        {desktopWorkCards.map(({ card, alt, href, large, label, title }) => (
          <Link key={alt} href={href}>
            <div
              className={`${
                large ? "h-[45rem]" : "h-[31.5rem]"
              } w-[41.75rem] relative overflow-hidden group`}
            >
              <Image
                src={card}
                alt={alt}
                className="w-full h-full object-cover rounded-br-lg rounded-bl-lg "
              />
              <div className="absolute py-6 px-10 w-full rounded-br-lg rounded-bl-lg h-[120px] bottom-0 bg-white transition-all duration-1000 ease-in-out group-hover:translate-y-full group-hover:opacity-0">
                <p className="text-greyScale-10 font-bold text-2xl mb-2">
                  {title}
                </p>
                <div className="bg-primary-blue text-white text-lg w-fit px-6 py-1 rounded">
                  {label}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
      {/* <div className="hidden lg:grid grid-cols-2 grid-rows-3 gap-x-8 gap-y-10 mt-[4.5rem]">
        {desktopWorkCards.map(({ card, alt, href, large, label, title }) => (
          <Link key={alt} href={href}>
            <div
              className={`${
                large ? "h-[45rem]" : "h-[31.5rem]"
              } w-[41.75rem]  relative overflow-hidden group`}
            >
              <Image
                src={card}
                alt={alt}
                className="w-full h-full object-cover rounded-br-lg rounded-bl-lg "
              />
              <div className="absolute py-6 px-10 w-full rounded-br-lg rounded-bl-lg h-[120px] bottom-0 bg-white transition-all duration-1000 ease-in-out group-hover:translate-y-full group-hover:opacity-0">
                <p className="text-greyScale-10 font-bold text-2xl mb-2">
                  {title}
                </p>
                <div className="bg-primary-blue text-white text-lg w-fit px-6 py-1 rounded">
                  {label}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div> */}
    </div>
  );
};

export default Work;
