import { overviewData } from "./_constants";

const Overview = () => {
  return (
    <div className="mt-8 lg:mt-[5.5rem] space-y-14 lg:space-y-[5.5rem]">
      {/* overview */}
      {overviewData.map(({ title, texts }) => (
        <div key={title} className="flex flex-col lg:flex-row gap-4 lg:gap-8">
          <h6 className="text-5xl font-medium font-grotesk lg:w-1/2">
            {title}
          </h6>
          <div className="lg:w-1/2 lg:text-lg space-y-10 lg:space-y-14 text-greyScale-90">
            {texts?.map((text, index) => (
              <p key={index}>{text}</p>
            ))}
          </div>
        </div>
      ))}

      {/* user research */}
      <div className="flex flex-col lg:flex-row gap-4 lg:gap-8">
        <h6 className="text-5xl font-medium font-grotesk lg:w-1/2">
          User Research
        </h6>
        <div className="lg:w-1/2 lg:text-lg space-y-6 lg:space-y-8 text-greyScale-90">
          <>
            <p>The product research for Aufera was conducted to </p>
            <ul className="space-y-3 ml-6 list-disc">
              <li>
                understand the two user groups that would be using this product
                (Renters & Hosts)
              </li>
              <li>
                have a clear idea of the pain points experienced in accessing
                rental vehicles,
              </li>
              <li>
                understand what was currently being done and used in the
                industry and how well the available solutions fulfilled user
                needs.
              </li>
            </ul>
          </>
          <>
            <p>
              While I would be discussing the basic research steps done, user
              research was done at various stages of design using the following
              qualitative methods.
            </p>
            <ul className="space-y-3 ml-6 list-disc">
              <li>A/B Testing</li>
              <li>Desirability studies</li>
              <li>Moderated usability tests</li>
            </ul>
          </>
        </div>
      </div>

      {/* recruitment */}
      <div className="flex flex-col lg:flex-row gap-4 lg:gap-8 font-bold">
        <h6 className="lg:w-1/2 text-greyScale-40 text-2xl lg:text-2xl">
          Recruitment Criteria
        </h6>
        <div>
          {/* renters */}
          <div>
            <p className="text-xl lg:text-2xl mb-4">Renters</p>
            <div>
              <p className="border border-greyScale-40 rounded p-4">Aged 18 - 58</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
