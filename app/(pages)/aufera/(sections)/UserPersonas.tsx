import { azeezPersona } from "@/assets/asset";
import Image from "next/image";
import { persona } from "../_constants/persona";

const UserPersona = () => {
  return (
    <div className="bg-white text-greyScale-10 py-6 lg:py-[5rem] mt-6 lg:mt-24 px-6 lg:px-[4.5rem]">
      <h4 className="font-grotesk font-medium text-2xl lg:text-5xl">
        User Personas
      </h4>

      {persona.map(({ profile, details }, index) => (
        <div
          key={index}
          className="mt-4 lg:mt-10 flex flex-col lg:flex-row gap-10 bg-greyScale-97 border border-greyScale-90 rounded"
        >
          <div className="lg:grid grid-cols-3 gap-6 lg:gap-[4.375rem] px-6 py-8 lg:px-14 lg:py-[4.5rem]">
            {/* profile */}
            {profile.map(({ name, age, location, occupation, image }) => (
              <div key={name} className="flex flex-col gap-4 lg:gap-6">
                <Image
                  src={image}
                  width={296}
                  height={305}
                  alt={name}
                  className="lg:hidden"
                />
                <Image
                  src={image}
                  width={350}
                  height={361}
                  alt={name}
                  className="hidden lg:block"
                />
                <p className="font-bold text-xl lg:text-2xl">Azeez Balogun</p>
                <div className="space-y-1 lg:space-y-4 text-greyScale-40">
                  <p>{age} years</p>
                  <p>{location}</p>
                  <p>{occupation}</p>
                </div>
              </div>
            ))}

            {/* details */}
            <div className="mt-6 lg:mt-0 flex flex-col gap-8 lg:grid col-span-2 grid-cols-2 lg:gap-x-8 lg:gap-y-14">
              {details.map((detail, index) => (
                <div key={index}>
                  <p className="font-bold text-xl lg:text-2xl text-greyScale-20 mb-4">
                    {detail}
                  </p>
                  <p className="lg:text-lg text-greyScale-40 leading-6">
                    Phasellus in commodo purus. Nulla porta fringilla
                    vestibulum. Cras felis mauris, gravida sed egestas vitae,
                    sollicitudin vel est. Nullam sodales dapibus metus, eu
                    suscipit urna interdum vel. Sed quis elementum lectus, id
                    tristique leo. Phasellus tempus tincidunt dui. Mauris dictum
                    accumsan elit elementum condimentum.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserPersona;
