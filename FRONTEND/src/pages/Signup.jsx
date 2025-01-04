import { useState } from "react";
import { SiReaddotcv } from "react-icons/si";
import { NavLink, Link } from "react-router-dom";
import { GoEyeClosed } from "react-icons/go";
import { GoEye } from "react-icons/go";
import { FaGoogle } from "react-icons/fa6";
import { FaGithubSquare, FaLinkedinIn } from "react-icons/fa";
import ThemeBtn from "./ThemeBtn";
function Signup() {
  const [visible, setVisible] = useState(false);
  const handleClick = (e) => {
    e.preventDefault();
    setVisible(!visible);
  };
  return (
    <>
      <nav className="w-full h-fit sticky top-0 left-0 bg-transparent z-10 py-2 dark:bg-[#1A1A1A] bg-white">
        <div className="flex items-center gap-2 justify-end px-9 pt-2">
          <ThemeBtn />
        </div>
      </nav>
      <div className="font-[font2] bg-white dark:bg-[#1A1A1A] w-full h-full flex justify-center items-center py-12 px-4">
        <div className="flex flex-col ">
          <div className="flex gap-2  justify-center items-center mb-6">
            <SiReaddotcv className="text-4xl" />
            <p className="font-bold text-3xl text-[#030712] dark:text-white">
              CvResume
            </p>
          </div>
          <h2 className="text-center dark:text-white font-bold text-2xl text-[#030712] mb-2">
            Automate your job search process!
          </h2>
          <p className="text-center dark:text-[#a1a1aa] text-[#71717a] text-[16px] font-normal">
            Create your job-ready resumes in 5 minutes.
          </p>
          <div className="mt-8 pb-6 rounded-lg dark:bg-[#282828] space-y-6 shadow-[0_6px_16px_0px_rgba(0,0,0,0.2)] overflow-hidden">
            <ul className="flex justify-between text-center font-medium text-sm">
              <li className="w-6/12">
                <NavLink
                  to="/auth/register"
                  className={({ isActive }) =>
                    `w-full p-4 block  text-[16px] ${
                      isActive
                        ? "bg-secondary text-white shadow-[0_6px_16px_0px_rgba(0,0,0,0.3)]"
                        : "bg-[#F8F9FC] dark:bg-[#222222] text-black dark:text-white"
                    }`
                  }
                >
                  Sign Up
                </NavLink>
              </li>
              <li className="w-6/12">
                <NavLink
                  to="/login"
                  className={({ isActive }) =>
                    `w-full p-4 block   text-[16px] ${
                      isActive
                        ? "bg-secondary text-white shadow-[0_6px_16px_0px_rgba(0,0,0,0.3)]"
                        : "bg-[#F8F9FC] dark:bg-[#222222] dark:text-white text-black"
                    }`
                  }
                >
                  Log In
                </NavLink>
              </li>
            </ul>
            <div className="px-6">
              <form action="">
                <div className="flex flex-col gap-1 mb-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-normal text-[#71717a]"
                  >
                    Email
                  </label>
                  <input
                    className="w-full h-10 rounded-md border bg-transparent border-[#71717a] px-3 py-1 text-sm shadow-sm placeholder:text-[#71717a] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-secondary focus:border-none"
                    type="email"
                    id="email"
                    placeholder="johndpe@gmail.com"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label
                    htmlFor="password"
                    className="text-sm font-normal text-[#71717a]"
                  >
                    Password
                  </label>
                  <div className="relative">
                    <input
                      className="w-full h-10 rounded-md border bg-transparent border-[#71717a] px-3 py-1 text-sm shadow-sm placeholder:text-[#71717a] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-secondary focus:border-none"
                      type={visible ? "text" : "password"}
                      id="password"
                      placeholder="password"
                    />
                    <button
                      onClick={handleClick}
                      className="absolute right-2 top-3"
                    >
                      {visible ? <GoEyeClosed /> : <GoEye />}
                    </button>
                  </div>
                </div>
                <div className="text-right w-full mt-4 ">
                  <button
                    type="submit"
                    className="bg-secondary px-4 rounded-md  hover:bg-btnColor py-2 text-sm font-medium text-white "
                  >
                    Sign up
                  </button>
                </div>
              </form>
            </div>
            <div className="flex items-center px-6">
              <div className="flex-grow border-t border-gray-200 dark:border-gray-500"></div>
              <p className="text-[#71717a] dark:text-[#a1a1aa] text-sm mx-4 font-normal">
                or connect with
              </p>
              <div className="flex-grow border-t border-gray-200 dark:border-gray-500"></div>
            </div>
            <div className="icons flex justify-around px-6 ">
              <div className="cursor-pointer rounded-sm flex justify-center items-center size-9 bg-[#DB4A39] ">
                <FaGoogle className="font-bold bg-white p-[3px] size-5 text-[#DB4A39] border rounded-full" />
              </div>
              <div className=" cursor-pointer rounded-sm flex justify-center items-center size-9 bg-[#0A66C2] ">
                <FaLinkedinIn className="text-[#0A66C2] p-[2px] font-bold bg-white size-5 rounded-sm border " />
              </div>
              <div className="cursor-pointer rounded-sm flex justify-center border-none outline-none items-center size-9 bg-[#374151] ">
                <FaGithubSquare className="bg-white border-none outline-none text-[#374151] text-2xl rounded-full " />
              </div>
            </div>
          </div>
          <p className="text-center dark:text-[#a1a1aa] text-[#71717a] text-xs mt-6 font-normal">
            By signing up you agree to our <Link className="text-btnColor dark:hover:text-white">Terms of Service</Link> and <Link className="text-btnColor dark:hover:text-white">Privacy Policy</Link>{" "}
          </p>
        </div>
      </div>
    </>
  );
}

export default Signup;
