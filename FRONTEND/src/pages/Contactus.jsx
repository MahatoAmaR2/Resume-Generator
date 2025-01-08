import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import { Link } from "react-router-dom";

function ContactUs() {
  return (
    <>
      <div>
        <Header />
        <div className="flex flex-col ">
          <section className="bg-[#F0F2F9]  px-8 pb-20 dark:bg-[#282828] font-[font2]">
            <div className="max-w-[1024px] w-full mx-auto">
              <div className="flex justify-between items-center">
                <div className="max-w-[50%] w-full flex flex-col justify-start items-start ">
                  <h2 className="text-[40px] leading-[50px] dark:text-white text-black font-bold mb-3 ">
                    We are here for you
                  </h2>
                  <p className="text-sm font-normal dark:text-[#a1a1aa] text-[#525566] mb-6">
                    Do you have comments, questions or feedback to share? Our
                    team would love to hear from you.
                  </p>

                  <button className="capitalize text-sm text-center font-medium text-white rounded-md py-3 px-8 h-10 bg-tertiary shadow-sm hover:bg-orange-400">
                    CONTACT US
                  </button>
                </div>
                <div className="w-full ml-4 mx-auto mt-8 ">
                  <picture>
                    <img
                      src="./contact-us.svg"
                      alt=""
                      className="w-full h-full max-w-full"
                    />
                  </picture>
                </div>
              </div>
            </div>
          </section>
          <section
            id="contact-us"
            className="w-full font-[font2] dark:bg-[#1A1A1A] pb-20 px-4 "
          >
            <div className="w-[1024px] rounded-md flex dark:border dark:border-[#535667] dark:bg-[#282828] bg-white -mt-[76px] shadow-[0_3px_10px_0px_rgba(0,0,0,0.1)] mx-auto">
              <div className="p-4 w-[67%]">
                <form action="">
                  <div className="flex ">
                    <div className="mr-10 w-full">
                      <label
                        htmlFor="name"
                        className="text-[#71717a] dark:text-[#a1a1aa] text-sm font-medium "
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="h-10 mt-1 w-full rounded-md border  text-sm border-[#535667] bg-transparent px-3 py-1 shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-secondary"
                      />
                    </div>
                    <div className="w-full">
                      <label
                        htmlFor="name"
                        className="text-[#71717a] dark:text-[#a1a1aa] text-sm font-medium"
                      >
                        Phone
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="h-10 text-sm border-[#535667]  mt-1 w-full rounded-md border bg-transparent px-3 py-1 shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-secondary"
                      />
                    </div>
                  </div>
                  <div className="flex my-4">
                    <div className="mr-10 w-full">
                      <label
                        htmlFor="email"
                        className="text-[#71717a] dark:text-[#a1a1aa] text-sm font-medium "
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="h-10 text-sm border-[#535667]  mt-1 w-full rounded-md border bg-transparent px-3 py-1 shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-secondary"
                      />
                    </div>
                    <div className=" w-full">
                      <label
                        htmlFor="subject"
                        className="text-[#71717a] dark:text-[#a1a1aa] text-sm font-medium "
                      >
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        className="h-10 text-sm border-[#535667]   mt-1 w-full rounded-md border bg-transparent px-3 py-1 shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-secondary"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="w-full">
                      <label
                        htmlFor="Message"
                        className="text-[#71717a] dark:text-[#a1a1aa] text-sm font-medium "
                      >
                        Message
                      </label>
                      <textarea
                        name="Message"
                        id="Message"
                        rows={5}
                        className=" mt-1 w-full rounded-md text-sm border-[#535667]  border bg-transparent px-3 py-1 shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-secondary"
                        placeholder="Type your query here"
                      ></textarea>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm font-medium dark:text-[#a1a1aa] text-[#71717a] mt-4">
                      Attach files
                    </p>
                    <p className="text-[13px] font-normal dark:text-[#a1a1aa] text-[#71717a] my-2">
                      Upload files(pdf, png, jpg, jpeg) upto size of 10MBs
                    </p>
                    <input
                      type="file"
                      className="file:text-white rounded-md border border-[#535667] bg-transparent text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible: outline-none focus-visible:ring-1 focus-visible: ring-secondary p-2 h-fit w-fit "
                      multiple
                      accept=".pdf, .png, .jpg, .jpeg"
                    />
                  </div>
                  <div className="w-full mt-4 flex justify-start">
                    <button
                      type="submit"
                      className="text-sm font-medium transition-colors rounded-md  py-2 px-4 focus-visible:outline-none focus-visible:ring-1 bg-secondary text-white shadow hover:bg-btnColor w-fit hover:text-white  "
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
              <div className="w-[33%] dark:border-l dark:border-l-[#535667] dark:bg-[#282828] bg-gray-800 font-light p-4 text-[13px] ">
                <h2 className="text-[#f0f2f9] mb-3 text-lg font-medium">
                  Contact Us
                </h2>
                <div className="my-4 flex">
                  <span className="mr-3 font-semibold">📧 </span>
                  <Link
                    to=""
                    className="underline text-btnColor w-full underline-offset-2 "
                  >
                    hello@coresume.io
                  </Link>
                </div>
                <div className="mb-4 flex">
                  <span className="mr-3 font-semibold">📞 </span>
                  <Link
                    to=""
                    className="underline text-btnColor w-full underline-offset-2 "
                  >
                    +91 85271 22712
                  </Link>
                </div>
                <div className="flex  ">
                  <span className="mr-3 font-semibold">📌 </span>
                  <div className="">
                    <p className=" text-sm w-full text-[#ced1de] ">
                      Studymitr AI Private Limited, HD-
                    </p>
                    <p className=" text-sm w-full text-[#ced1de] ">
                      240, WeWork Galaxy, 43, Residency{" "}
                    </p>
                    <p className=" text-sm w-full text-[#ced1de] ">
                      {" "}
                      Road, Bangalore, Karnataka, India{" "}
                    </p>
                    <p className=" text-sm w-full text-[#ced1de] ">560025.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default ContactUs;
