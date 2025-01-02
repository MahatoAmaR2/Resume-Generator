import { useState } from "react";
import { FaChevronDown } from "react-icons/fa6";

function FAQ() {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const faqs = [
    {
      question: "Why is CvResume the best resume builder ever?",
      answer:
        "GoResume is the only resume builder that allows you to create unlimited number of resumes and share your created resumes unlimited times as a web link for free. Here are some of the reasons why job seekers all across the world choose GoResume over other resume builder platforms:",
    },
    {
      question: "How can CvResume increase my chances to get an interview?",
      answer:
        "Resume builders like GoResume ensures your resume looks good and is also ATS friendly within 5 minutes.",
    },
    {
      question: "Why do I need a resume builder’s help to create a resume?",
      answer:
        "Resume builders like GoResume ensures your resume looks good and is also ATS friendly within 5 minutes.",
    },
    {
      question: "Is CvResume Free?",
      answer:
        "Resume builders like GoResume ensures your resume looks good and is also ATS friendly within 5 minutes.",
    },
    {
      question: "How can I use CvResume to advance my career goals?",
      answer:
        "Resume builders like GoResume ensures your resume looks good and is also ATS friendly within 5 minutes.",
    },

    {
      question: "How can I create an account on CvResume?",
      answer:
        "Resume builders like GoResume ensures your resume looks good and is also ATS friendly within 5 minutes.",
    },
  ];
  // Handle clicking a question to toggle the answer
  const handleToggle = (index) => {
    if (expandedIndex === index) {
      setExpandedIndex(null); // Close if the same question is clicked
    } else {
      setExpandedIndex(index); // Open the clicked question
    }
  };
  return (
    <>
      <div className="faq bg-white dark:bg-[#1A1A1A] dark:text-white px-4 py-20 font-[font2]">
        <div className="mx-auto max-w-4xl px-8">
          <p className="mb-7 uppercase text-sm font-semibold text-center text-secondary">
            Have any questions?
          </p>
          <h2 className="mb-16 font-semibold text-4xl text-center dark:text-white text-black ">
            Frequently Asked Questions
          </h2>
          <div className="mb-11 flex flex-wrap -m-1">
            <div className="flex flex-col gap-4 w-full">
              {faqs.map((qa, index) => (
                <div
                  className="w-full"
                  key={index}
                  onClick={() => handleToggle(index)}
                >
                  <div className="w-full p-1">
                    <div
                      className={`py-5 md:px-8 dark:border-border transition-all ease duration-75 rounded-2xl hover:shadow-[0_3px_10px_0px_rgba(0,0,0,0.1)] cursor-pointer shadow-[0_6px_16px_0px_rgba(0,0,0,0.2)] ${
                        expandedIndex === index
                          ? "border-secondary border-2 dark:border-[#535667]"
                          : ""
                      }`}
                    >
                      <div className="flex justify-between mb-2">
                        <h2 className="text-lg font-semibold dark:text-white">
                          {qa.question}
                        </h2>
                        <span className="h-5 w-5 text-secondary ">
                          <FaChevronDown />
                        </span>
                      </div>
                      {expandedIndex === index && (
                        <div className="overflow-y-auto mt-5 transition-all ease duration-[-0.2s]">
                          <p className="text-gray-600 dark:text-[#a1a1aa] text-[16px]  font-medium">
                            {qa.answer}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="text-[16px] justify-center flex gap-3">
            <h1 className="text-[#4b5563] dark:text-[#a1a1aa] font-medium">
              Still have any questions?{" "}
            </h1>
            <p className="cursor-pointer text-secondary font-semibold">
              Contact us
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default FAQ;
