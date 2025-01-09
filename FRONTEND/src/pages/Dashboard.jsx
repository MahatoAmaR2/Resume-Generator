import { Link, NavLink } from "react-router-dom";
import Header from "../components/header/Header";

function Dashboard() {
  return (
    <>
      <div className="nav">
        <Header />
      </div>
      <div className="flex flex-col min-h-screen font-[font2]">
        <div className="w-full mx-auto">
          <main className="w-full dark:bg-[#1A1A1A] min-h-screen">
            <div className="w-full bg-[#F0F2F9] dark:bg-[#1A1A1A]">
              <div className="max-w-6xl mx-auto w-full h-48">
                <div className="relative flex items-center justify-between px-10 py-14">
                  <div>
                    <h1 className="text-4xl font-bold dark:text-white text-black">
                      Hello <span className="text-secondary">bauaa476!</span>{" "}
                    </h1>
                    <p className="text-sm font-medium text-tertiary mt-3">
                      Are you ready to create job-ready resumes and cover
                      letters that get noticed by recruiters?
                    </p>
                  </div>
                  <div className="max-w-[25%] absolute right-10 block top-[6%]">
                    <img
                      src="./hello.svg"
                      alt="hello"
                      className="h-full w-full"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full">
              <div className="max-w-6xl mx-auto w-full">
                <div className="px-10 py-4">
                  <div className="flex justify-start h-10 items-start rounded-md bg-white text-sm font-medium border-b border-b-[#E2E8F0] dark:border-b-[#535667] dark:bg-[#1A1A1A] w-full">
                    <NavLink
                      to="/dashboard"
                      className={({ isActive }) =>
                        `w-fit inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 ring-offset-white dark:ring-offset-[#535667] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2  shadow-inner border border-[#E2E8F0] dark:border-[#535667] border-b-0 rounded-bl-none rounded-br-none  h-[inherit] ${
                          isActive
                            ? "bg-white text-black shadow-inner dark:bg-[#282828] dark:text-white "
                            : "text-gray-500 dark:text-gray-400"
                        }`
                      }
                    >
                      Resume
                    </NavLink>
                    <NavLink
                      to="/contact-us"
                      className={({ isActive }) =>
                        `w-fit inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 ring-offset-white dark:ring-offset-[#535667] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2  shadow-inner border border-[#E2E8F0] dark:border-[#535667] border-b-0 rounded-bl-none rounded-br-none  h-[inherit] ${
                          isActive
                            ? "bg-white text-black shadow-inner dark:bg-[#282828] dark:text-white "
                            : "text-gray-500 dark:text-gray-400"
                        }`
                      }
                    >
                      Cover Letter
                    </NavLink>
                  </div>
                  <div className="flex flex-col items-center justify-center w-full pb-12">
                    <img
                      src="./resume.svg"
                      alt=""
                      className="w-44 h-44 mt-6 mb-8"
                    />
                    <div
                      className="text-base flex justify-center flex-col items-center text-[#71717a] dark:text-[#a1a1aa] font-normal"
                    >
                      {" "}
                      <p>
                        Custom-built, amazing resumes. Empower your job search
                      </p>
                      <p>in just a few clicks!</p>
                    </div>

                    <Link className="flex justify-center items-center gap-3 mt-8  shadow transition-colors bg-secondary text-sm font-medium px-4 py-2 hover:bg-btnColor rounded-md text-white">
                      <p>+</p>
                      <p>Create new</p>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full pt-5 pb-28 max-w-6xl mx-auto px-10">
              <div className="bg-[#F0F2F9] dark:bg-[#282828] rounded-lg p-6 px-12 w-fll h-fit dark:border shadow-md dark:border-[#535667] flex items-center justify-between">
                <div className="basis-1/2">
                  <h2 className="font-semibold text-2xl text-black mb-6 dark:text-white">
                    Get your resume re-written
                  </h2>
                  <h2 className="font-normal text-sm text-black mb-6 dark:text-white">
                    Resume not getting shortlisted? Get help!
                  </h2>
                  <div className="flex justify-start mb-6">
                    <button className="inline-flex justify-center items-center rounded-md text-sm font-medium bg-secondary hover:bg-btnColor transition-colors h-10 px-4 py-2 text-white">
                      Talk to Coach
                    </button>
                  </div>
                </div>
                <div className="relative grow shrink-0 w-44 h-44 order-last">
                  <img
                    src="./coach.a901e3bd.svg"
                    alt="coach"
                    className="absolute h-full w-full inset-0"
                  />
                </div>
              </div>
            </div>
            <div className="footer w-full bg-[#1F2937] dark:bg-[#1A1A1A] border-t border-t-[#535667]">
              <div className="max-w-6xl mx-auto px-16 py-8 flex justify-between w-full items-center text-white font-medium text-sm">
                <Link>Contact us</Link>
                <Link>FAQs</Link>
                <Link>Terms & Conditions</Link>
                <Link>Privacy Policy</Link>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
