function ResumeSteps() {
  return (
    <>
      <div className="relative dark:border-y border-b border-b-[#a1a1aa] dark:border-y-[#a1a1aa] font-[font2] bg-white dark:bg-[#1A1A1A] px-4 py-20">
        <div className="max-w-[940px] mx-auto">
          <div className="heading mb-4 text-center">
            <h1 className="text-4xl font-semibold text-black dark:text-white">
              Effortlessly make a job-worthy resume in three easy steps!
            </h1>
          </div>
          <div className="main relative">
            <img src="./steps-path2.0a9f2622.svg" alt="steps-path" />
            <div className="absolute right-[2%] top-[17%] h-20 bg-secondary rounded-full aspect-square flex justify-center items-center">
              <span className="text-2xl font-bold text-white ">1</span>
            </div>
            <div className="absolute left-[-3%] top-[47%] h-20 bg-secondary rounded-full aspect-square flex justify-center items-center">
              <span className="text-2xl font-bold text-white ">2</span>
            </div>
            <div className="absolute right-[-3%] top-[75%] h-20 bg-secondary rounded-full aspect-square flex justify-center items-center">
              <span className="text-2xl font-bold text-white ">3</span>
            </div>
            <div className="absolute top-[8%] left-0">
              <div className=" text-2xl font-bold">
                <span className="text-black dark:text-white">STEP-1</span>
                <span className=" text-secondary ml-6">
                  Select resume template
                </span>
              </div>
              <div className="flex items-center gap-8">
                <div className="aspect-square w-[345px]">
                  <img
                    src="./choose-template.8c915b8a.svg"
                    alt="choose-template"
                    className="w-[345px] h-[345px]"
                  />
                </div>
                <span className="text-sm font-normal dark:text-[#a1a1aa] text-[#525566]">
                  Sign up to select your favourite resume template.
                </span>
              </div>
            </div>
            <div className="absolute top-[40%] right-0">
              <div className=" text-2xl font-bold text-end">
                <span className="text-black dark:text-white">STEP-1</span>
                <span className=" text-secondary ml-6">Add your details</span>
              </div>
              <div className="flex items-center gap-8">
                <div className="flex flex-col  text-sm  font-normal dark:text-[#a1a1aa] text-[#525566]">
                  <span>Our templates will automatically present your </span>
                  <span>details in beautiful and ATS friendly formats.</span>
                </div>
                <div className="aspect-square w-[345px]">
                  <img
                    src="./register.ffde68c0.svg"
                    alt="register"
                    className="w-[345px] h-[345px]"
                  />
                </div>
              </div>
            </div>
            <div className="absolute top-[69%] left-0">
              <div className=" text-2xl font-bold">
                <span className="text-black dark:text-white">STEP-3</span>
                <span className=" text-secondary ml-6">
                  Download your resume
                </span>
              </div>
              <div className="flex items-center gap-8">
                <div className="aspect-square w-[345px]">
                  <img
                    src="./download-resume.e78d1d2b.svg"
                    alt="download-resume"
                    className="w-[345px] h-[345px]"
                  />
                </div>
                <div className="text-sm flex flex-col font-normal dark:text-[#a1a1aa] text-[#525566]">
                  <span>Once you are happy with your resume, create a</span>
                  <span>shareable link for free or download it in pdf</span>
                  <span>format.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ResumeSteps;
