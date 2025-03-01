import { SiReaddotcv } from "react-icons/si";
import { Link } from "react-router-dom";
import ThemeBtn from "../../pages/ThemeBtn";
function Header() {
  return (
    <>
      <div className="w-full font-[font2] h-[56px] px-[32px] bg-primary text-white dark:border-b dark:border-b-[#535667] dark:bg-[#282828] flex justify-between items-center sticky top-0 left-0 ">
        <div className="left flex gap-2 font-medium cursor-pointer text-base items-center">
          <SiReaddotcv className="text-[22px]"/>
          <p>CvResume</p>
        </div>
        <div className="right cursor-pointer flex items-center gap-10 text-[14px] font-normal leading-6">
          <p>Resume</p>
          <p>FAQ</p>
          <p className="border-r border-gray-500 dark:border-gray-300 pr-10">Coach</p>
          <ThemeBtn />
          <p>Login</p>
          <Link to="/auth/register" className="bg-tertiary hover:bg-[#635ba9] hover:delay-100 font-semibold px-3 py-2 leading-4 text-[12px] rounded-md inline-block text-white">
            Sign Up
          </Link>
        </div>
      </div>
    </>
  );
}

export default Header;
