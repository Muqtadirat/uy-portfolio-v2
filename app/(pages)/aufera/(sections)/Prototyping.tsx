import { prototype1, prototype2, prototype3, prototype4 } from "@/assets/asset";
import Image from "next/image";

const Prototyping = () => {
  return (
    <div className="px-6 lg:px-[4.5rem] py-6 lg:py-24 text-greyScale-90">
      <div className="flex flex-col lg:flex-row mb-6 lg:mb-16">
        <p className="font-medium font-grotesk text-2xl lg:text-5xl lg:w-1/2 mb-4 lg:mb-0">
          Prototyping
        </p>
        <p className="lg:w-1/2 lg:text-lg">
          To complete the visual structure of the product, I prepared a style
          guide to be used to create tokens for a design system for the
          engineers and create a rapidly-scalable product design foundation.
        </p>
          </div>
          <div className="space-y-8 flex flex-col justify-center items-center">
              <Image src={prototype1} width={1190} alt="Prototype"/>
              <Image src={prototype2} width={1190} alt="Prototype"/>
              <Image src={prototype3} width={964} alt="Prototype"/>
              <Image src={prototype4} width={1126} alt="Prototype"/>
          </div>
    </div>
  );
};

export default Prototyping;
