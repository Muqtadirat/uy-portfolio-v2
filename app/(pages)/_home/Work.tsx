import Image from "next/image";
import { mobileWorkCards } from "./constants/workCards";
import { auferaCardDesk } from "@/assets/asset";

const Work = () => {
  return (
    <div className="px-6 lg:px-[4.5rem] pt-14 md:pt-[6.5rem] pb-6 md:pb-20">
      <h2 className="font-grotesk font-bold text-5xl lg:text-[5rem]">
        SEE MY <br /> WORK
      </h2>

      <div className="mt-6 flex flex-col lg:hidden items-center gap-6">
        {mobileWorkCards.map(({ card, alt }) => (
          <Image key={alt} src={card} alt={alt} />
        ))}
      </div>

      {/* <div className="hidden lg:flex mt-[4.5rem]">
        <div className="w-[41.75rem] h-[45rem] relative">
          <Image src={auferaCardDesk} alt="" />
          <div className="bg-white absolute w-full h-[120px] top-20">
            <p className="text-greyScale-10">Test</p>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Work;
