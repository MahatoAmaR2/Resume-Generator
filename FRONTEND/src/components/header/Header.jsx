import { SiReaddotcv } from "react-icons/si";
import { Link } from "react-router-dom";
import ThemeBtn from "../../pages/ThemeBtn";
function Header() {
  return (
    <>
      <div className="w-full h-[56px] px-[32px] dark dark:border-b flex justify-between items-center">
        <div className="left flex gap-2 items-center">
          <SiReaddotcv />
          <p>CvResume</p>
        </div>
        <div className="right flex items-center gap-10 text-[15px] font-normal leading-6">
          <p>Resume</p>
          <p>FAQ</p>
          <p>Coach</p>
          <div className="border-l border-white h-6 mx-4"></div>
          <ThemeBtn />
          <p>Login</p>
          <Link to="" className="bg-secondary font-semibold px-3 py-2 leading-4 text-[12px] rounded-md inline-block text-white">
            Sign Up
          </Link>
        </div>
      </div>
    </>
  );
}

export default Header;
