import Experience from "./Experience";

const Home = () => {
  return (
    <>
      <header className="b\g-[url('../assets/global/gradient-bg.png')] bg-cover bg-centre h-screen px-6 lg:px-[4.5rem] ">
        <h1 className=" font-grotesk text-[2rem] lg:text-[4rem] font-extrabold">
          Hi, I’m <br />{" "}
          <span className="text-5xl lg:text-[7.5rem] font-black">
            UTHMAN <br /> YUSSUFF
          </span>
        </h1>
        <p className="lg:text-lg text-greyScale-95 mt-4 lg:mt-5 lg:w-[35rem] text-justify mx-auto">
          a result driven product designer with a proven record of incorporating
          and balancing user & business needs into product development; with an
          in-depth experience in building functional, robust,
          resource-effective, scalable solutions. I am a strong advocate of
          data-driven decision making and obsessed with product research.
        </p>
      </header>
      <div className="hidden lg:block font-grotesk h-screen">
        <p className="text-[5rem] font-black text-center mx-auto">
          How I <br /> create amazing <br /> products
        </p>
      </div>

      <Experience />
    </>
  );
};

export default Home;
