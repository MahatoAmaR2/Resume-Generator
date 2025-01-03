import { SiReaddotcv } from "react-icons/si";
import { Link } from "react-router-dom";
import {
  FaLinkedinIn,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

function Footer() {
  const companys = ["About us", "Careers", "FAQs", "Contact us", "Coach"];
  const links = [
    "Privacy Policy",
    "Terms & Conditions",
    "Shipping & Delivery Policy",
    "Returns & Refund Policy",
    "Plans & Pricing",
  ];

  return (
    <>
      <div className="px-12 w-full py-14 pb-10 bg-[#1F2937] font-[font2] dark:bg-[#282828]">
        <div className="flex">
          <div className="flex w-full justify-between items-start text-lg text-white font-normal">
            <div className="text-white font-bold text-2xl flex items-center gap-2">
              <SiReaddotcv className="text-3xl" />
              <p>CvResume</p>
            </div>
            <div>
              <h4>Company</h4>
              <div className="flex flex-col ">
                {companys.map((company, index) => (
                  <div
                    key={index}
                    className="mt-4 font-light text-sm text-[#f8f9fc]"
                  >
                    <Link>{company}</Link>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h4>Quick Links</h4>
              <div className="flex flex-col ">
                {links.map((link, index) => (
                  <div
                    key={index}
                    className="mt-4 font-light text-sm text-[#f8f9fc]"
                  >
                    <Link>{link}</Link>
                  </div>
                ))}
              </div>
            </div>

            <form className=" ">
              <h4 className="text-lg font-normal leading-8 text-white">
                Subscribe
              </h4>
              <div className="mt-6 flex ">
                <div className="space-y-2 grow shrink-0 w-inherit w-[80%]">
                  <input
                    type="email"
                    name=""
                    id=""
                    placeholder="Get Product Updates"
                    className="w-full px-4 py-3 text-sm border border-gray-500 border-r-0 bg-gray-900 dark:bg-[#282828] rounded-tl-[4px] rounded-bl-[4px] placeholder-slate-500 font-light h-12 focus:outline-none"
                  />
                </div>
                <button
                  className="shrink-0 flex justify-center items-center h-12 py-3 px-4 bg-tertiary rounded-tr-md rounded-br-md"
                  type="submit"
                >
                  <img
                    src="./arrow.4440b7271.svg"
                    alt="arrow"
                    className="h-5 text-transparent"
                  />
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="my-10 h-[1px] bg-gray-600"></div>
        <div className="flex justify-between items-center">
          <div>
            <p className="text-sm text-[#ced1de] font-normal">
              &copy; 2023 StudyMitr AI Private Limited. All rights reserved
            </p>
          </div>
          <div className="flex gap-3 justify-center items-center text-white ">
            <div className=" border border-white p-2 rounded-full hover:bg-secondary cursor-pointer">
              <FaLinkedinIn className="text-xl" />
            </div>
            <div className=" border border-white p-2 rounded-full hover:bg-secondary cursor-pointer">
              <FaFacebookF className="text-xl" />
            </div>
            <div className=" border border-white p-2 rounded-full hover:bg-secondary cursor-pointer">
              <FaTwitter className="text-xl" />
            </div>
            <div className=" border border-white p-2 rounded-full hover:bg-btnColor cursor-pointer">
              <FaInstagram className="text-xl" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
