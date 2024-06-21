import { onboarding, onboarding2, onboarding3 } from "@/assets/asset";
import Image from "next/image";

const FinalProduct = () => {
  return (
    <div className="px-6 lg:px-[4.5rem] bg-white py-8 lg:py-[5rem]">
      <p className="text-2xl lg:text-5xl text-greyScale-10 font-medium font-grotesk mb-10 lg:mb-24">
        Final Product
      </p>
      <div className="flex flex-col md:flex-row justify-between items-center space-y-6 lg:space-y-0">
        <div className="md:w-[392px]">
          <p className="text-xl lg:text-2xl font-bold text-greyScale-10 mb-4 md:w-[253px]">
            Seamless, fast onboarding process
          </p>
          <p className="lg:text-lg text-greyScale-40">
            Designed with the intention to onboard users with little to no
            friction.
          </p>
        </div>
        <div className="flex gap-6 lg:gap-10 overflow-x-auto snap-x snap-mandatory md:snap-none md:overflow-x-visible">
          <Image
            src={onboarding}
            alt="Onboarding"
            className="w-[128px] h-[276px] lg:w-[236px] lg:h-[509px]"
          />
          <Image
            src={onboarding2}
            alt="Onboarding"
            className="w-[128px] h-[276px] lg:w-[236px] lg:h-[509px]"
          />
          <Image
            src={onboarding3}
            alt="Sign up"
            className="w-[128px] h-[276px] lg:w-[236px] lg:h-[509px]"
          />
        </div>
      </div>
      <div className="mt-10 lg:mt-40">
        <div className="mx-auto md:w-[392px]">
          <p className="text-xl lg:text-2xl font-bold md:w-[325px] self-start text-greyScale-10">
            Rent any car easily from a robust detailed catalogue
          </p>
          <p className="lg:text-lg text-greyScale-40 mt-4">
            With tools to tailor every rental to your needs and preferred taste
          </p>
        </div>
      </div>
    </div>
  );
};

export default FinalProduct;
