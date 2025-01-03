

function CreateResume() {
  return (
    <>
      <div className="font-[font2] bg-[#F0F2F9] dark:bg-[#282828] dark:border-y dark:border-[#a1a1aa] px-4 py-20 ">
        <div className="relative ">
          <div className="text-center text-6xl font-bold text-secondary mb-8">
            <h2>Are you ready to</h2>
            <h2>
              create your{" "}
              <span className="underline underline-offset-[10px] decoration-tertiary">
                best resume
              </span>
              ?
            </h2>
          </div>
          <div className="flex justify-center items-center mb-6 text-sm font-normal dark:text-[#a1a1aa] text-[#71717a]">
            <span>join</span>&nbsp;
            <div className="relative aspect-square top-[-14px] w-2 mx-[0.3rem]">
              <span className="text-green-600 text-5xl font-bold">.</span>
            </div>
            &nbsp;
            <span className="font-semibold ">63482</span>&nbsp;
            <p>others and build your resume for free</p>
          </div>
          <div className="flex justify-center">
            <button className="bg-secondary font-medium text-sm py-3 px-8 rounded-md text-white hover:bg-btnColor">
              CREATE MY RESUME
            </button>
          </div>
        </div>
      </div>
      {/* <div className="flex gap-2 relative">
        <div className="absolute right-0 flex flex-col gap-2 w-fit">
          <div className="relative animate-slide1">
            <img
              src="./resume-skeleton.cf6b1310.svg"
              alt="resume-skeleton"
              loading="lazy"
              width="120px"
              height="152px"
              className="rotate-image1"
            />
          </div>
          <div className="relative right-[70px]  top-[-50px] animate-slide2">
            <img
              src="./resume-skeleton.cf6b1310.svg"
              alt="resume-skeleton"
              loading="lazy"
              width="120px"
              height="152px"
              className="rotate-image2"
            />
          </div>
          <div className="relative right-[170px] top-[-50px] animate-slide3">
            <img
              src="./resume-skeleton.cf6b1310.svg"
              alt="resume-skeleton"
              loading="lazy"
              width="120px"
              height="152px"
              className="rotate-image3"
            />
          </div>
        </div>
      </div> */}
    </>
  );
}

export default CreateResume;
