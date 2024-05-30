import PrimaryButton from "@/app/_components/Buttons/PrimaryButton";
import Label from "@/app/_components/Label";

const Experience = () => {
  return (
    <div className="px-6 lg:px-[4.5rem] pt-16 lg:pt-[6.5rem] pb-6 lg:pb-20 bg-greyScale-20">
      <h2 className="text-5xl lg:text-[5rem] mb-4 font-black font-grotesk">
        WORK <br /> EXPERIENCE
      </h2>
      <PrimaryButton>Download my resume</PrimaryButton>
      <article>
        <section className="lg:flex gap-20 mt-14 text-greyScale-90">
          <div>
            <p className="text-xl lg:text-[2rem] font-bold">Mar 22’ - Present</p>
          </div>
          <div className="mt-6 lg:mt-0">
            <p className="font-black text-2xl lg:text-[2rem]">Mecho Autotech Ltd (YC21)</p>
            <p className="font-bold text-xl lg:text-2xl mt-2 mb-4">Product Designer</p>

            {/* labels */}
            <div className="flex gap-4 flex-wrap mb-4">
              <Label>Interaction Design</Label>
              <Label>User Research</Label>
              <Label>Figma</Label>
              <Label>User Testing</Label>
              <Label>Leadership</Label>
            </div>

            <div className="text-greyScale-90">
              <p>At Mecho,</p>
              <ul className="ml-6 space-y-2 mt-2 list-disc">
                <li>
                  I carry out user research and usability tests to collect data
                  used as reference for product upgrades and feature build
                </li>
                <li>
                  I am responsible for creating user experience through user
                  flow and journey mapping as well as interface design of all
                  products{" "}
                </li>
                <li>
                  I lead the product design team where I ensure efficient and
                  effective work and communication within the product design
                  team as well as with external teams especially the engineering
                  team
                </li>
              </ul>
            </div>
          </div>
        </section>
      </article>
    </div>
  );
};

export default Experience;
