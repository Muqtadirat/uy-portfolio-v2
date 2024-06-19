import { criteriaData, overviewData, questionsData } from "./_constants";

const Overview = () => {
  return (
    <div className="mt-8 lg:mt-[5.5rem] space-y-14 lg:space-y-[5.5rem] px-6 lg:px-[4.5rem]">
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
          <p className="text-xs italic">
            * I am unable to currently share more insights into the research
            results because of non-disclosure and IP agreements
          </p>
        </div>
      </div>

      {/* recruitment criteria */}
      {criteriaData.map(({ title, subTitleLabels }) => (
        <div
          key={title}
          className="flex flex-col lg:flex-row gap-4 lg:gap-8 font-bold"
        >
          <h6 className="lg:w-1/2 text-greyScale-40 text-2xl lg:text-2xl">
            {title}
          </h6>
          <div className="w-full lg:w-1/2">
            <div className="space-y-4 lg:space-y-16">
              {subTitleLabels.map(({ subTitle, labels }) => (
                <div
                  key={subTitle}
                  className="snap-x snap-mandatory overflow-x-auto pb-6 lg:pb-0"
                >
                  <p className="text-xl lg:text-2xl mb-4">{subTitle}</p>
                  <div className="flex gap-8">
                    {labels.map((label) => (
                      <p
                        key={label}
                        className="border min-w-max border-greyScale-40 rounded p-4"
                      >
                        {label}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
      {/* recruitment questions */}
      {questionsData.map(({ title, subTitleLabels }) => (
        <div
          key={title}
          className="flex flex-col lg:flex-row gap-4 lg:gap-8 font-bold"
        >
          <h6 className="lg:w-1/2 text-greyScale-40 text-2xl lg:text-2xl">
            {title}
          </h6>
          <div className="w-full lg:w-1/2">
            <div className="space-y-4 lg:space-y-16">
              {subTitleLabels.map(({ subTitle, labels }) => (
                <div
                  key={subTitle}
                  className="snap-x snap-mandatory overflow-x-auto pb-6 lg:pb-0"
                >
                  <p className="text-xl lg:text-2xl mb-4">{subTitle}</p>
                  <div className="flex lg:flex-col gap-4">
                    {labels.map((label) => (
                      <p
                        key={label}
                        className="border min-w-max lg:w-fit border-greyScale-40 rounded p-4"
                      >
                        {label}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Overview;
