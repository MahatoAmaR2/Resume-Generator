function Hero() {
  return (
    <>
      <div className="font-[font2] dark:border-b w-full h-full dark:bg-[#282828] bg-[#F0F2F9]">
        <div className="top flex justify-between mx-28  items-center">
          <div className="left w-[50%] ">
            <h1 className="text-[40px] font-bold leading-[50px] dark:text-white text-black">
              Make your <span className="text-secondary">resume</span> as
              impressive as your{" "}
            </h1>
            <h1 className="text-[40px] font-bold leading-[50px] text-secondary">
              skills.
            </h1>
            <p className="text-[14px] font-normal leading-5 dark:text-[#a1a1aa] text-[#525566] my-4">
              Create unlimited, ATS-friendly resumes that recruiters love.
            </p>
            <button className="text-[14px] font-medium text-white rounded-md op bg-secondary hover:bg-btnColor hover:delay-100 mt-4 px-4 py-2 h-12">
              CREATE MY RESUME
            </button>
          </div>
          <div className="right w-[50%]">
            <img
              src="./hero.image.svg"
              alt="hero-image"
              className="w-[500px] pl-10 h-[500px] object-contain"
            />
          </div>
        </div>
        <div className="bottom flex justify-center items-center flex-col">
          <p className="text-[12px] leading-4 dark:text-[#a1a1aa] text-[#525566] mb-5 font-normal">
            Get hired at top companies
          </p>
          <ul className="flex gap-8 mb-8 dark:invert">
            <li>
              <img src="./ibm.svg" alt="ibm-image" />
            </li>
            <li>
              <img src="./microsoft.svg" alt="microsoft-image" />
            </li>
            <li>
              <img src="./airbnb.svg" alt="airbnb-image" />
            </li>
            <li>
              <img src="./amazon.svg" alt="amazon-image" />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Hero;
