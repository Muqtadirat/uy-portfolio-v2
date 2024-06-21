import {
  architecture,
//   architectureMobile,
  wireframeDesk,
} from "@/assets/asset";
import Image from "next/image";

const Research = () => {
  return (
    <div className="px-6 lg:px-[4.5rem] pt-6 lg:pt-24 text-greyScale-90">
      <div className="flex flex-col lg:flex-row text-xl lg:text-2xl font-bold gap-8 mb-6 lg:mb-24">
        <p className="text-greyScale-40 lg:w-1/2">
          Secondary Research/Competitive Analysis
        </p>
        <div className="lg:w-1/2 space-y-4">
          <p>Brands</p>

          <div className="flex gap-8 text-base snap-x snap-mandatory overflow-x-auto">
            {[["Expedia"], ["Booking.com"], ["SIXT"], ["AirBnB"], ["AVIS"]].map(
              ([label]) => (
                <p
                  key={label}
                  className="border w-fit border-greyScale-40 rounded p-4"
                >
                  {label}
                </p>
              )
            )}
          </div>
          <p className="text-xs italic font-normal">
            * I am unable to currently share details of this analysis because of
            non-disclosure and IP agreements
          </p>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row">
        <p className="text-2xl lg:text-5xl text-white font-medium font-grotesk lg:w-1/2 mb-2 lg:mb-0">
          Product definition
        </p>
        <div className="lg:w-1/2 space-y-6 lg:text-lg">
          <p>
            Product definition encompasses the information architecture and
            visual direction to be used as a guide in building the product.
          </p>
          <p>
            The Insights gotten from the user research and competitive analysis
            were used to guide the features to be built into Aufera as well as
            determine the hierachy based on importance to the user goals.
          </p>
          <p>
            This was then matched with the business needs and engineering
            possibilities to develop a usable, and valuable product.
          </p>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row mt-6 lg:mt-[5.5rem] mb-6 lg:mb-[5.5rem]">
        <p className="text-xl lg:text-2xl font-bold text-greyScale-40 lg:w-1/2 mb-2 lg:mb-0">
          Information Architecture
        </p>
        <p className="lg:w-1/2 lg:text-lg">
          The way information was prioritized to match user behavior and enhance
          feature accessibility
        </p>
      </div>

      <>
        {/* <div className="snap-x snap-mandatory overflow-x-auto">
          <Image
            src={architectureMobile}
            height={523}
            alt="Information architecture"
            className="lg:hidden"
          />
        </div> */}
        <Image
          src={architecture}
          height={700}
          alt="Information architecture"
          //   className="hidden lg:block"
          className="mx-auto"
        />
      </>

      <div className="flex flex-col lg:flex-row my-6 lg:my-[5.5rem]">
        <p className="font-bold text-xl lg:text-2xl text-greyScale-40 lg:w-1/2">
          Wireframes
        </p>
        <div className="lg:w-1/2 space-y-6 lg:text-lg">
          <p>
            Wireframing the interface structure was done to ease communication
            with stakeholders and serve for proof of concept for A/B testing and
            desirability studies with users.
          </p>
          <p>
            I have shown mid-high fidelity views of some of the screens below.
          </p>
        </div>
      </div>

      <Image src={wireframeDesk} alt="Wireframe" className="mx-auto"/>
    </div>
  );
};

export default Research;
