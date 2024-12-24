import React from "react";
import Card from "../components/cards/Card";

function Service() {
  return (
    <>
      <div className="px-2 py-20 dark:bg-[#1A1A1A] shadow-inner-[9px_0_4px_-20px_rgba(0,0,0,0.2)] border-b border-b-border flex flex-col justify-center items-center">
        <h1 className="text-4xl dark:text-white text-center mx-w-[940px] leading-10 font-semibold">
          Give your resume the competitive edge
        </h1>

        <div className="flex flex-wrap  w-[67%] mt-12 justify-around">
          <Card
            image="./portfolio.webp"
            alt="portfolio"
            title="Create Unlimited Resumes"
            description="Create as many resumes as you need without any "
            smallPara="restrictions."
            linkTo="/resume"
          />
          <Card
            image="./pdf.webp"
            alt="pdf"
            title="Create Shareable Web Links"
            description="Easily convert your resume into a shareable web "
            smallPara="link, for free."
            linkTo="/share-link"
          />
          <Card
            image="./customizable.webp"
            alt="customizable"
            title="Customizable Resume Templates"
            description="Choose from 10+ recruiter-approved templates"
            smallPara="designed to beat ATS bots."
            linkTo="/templates"
          />
          <Card
            image="./puzzle.svg"
            alt="puzzel"
            title="Download your PDF resume"
            description="Choose a plan of your choice and download your"
            smallPara="resume."
            linkTo="/download"
          />
          <Card
            image="./human-resources.webp"
            alt="human-resources"
            title="Talk to Coach"
            description="Get your resume reviewed and re-written by"
            smallPara="recruiters."
            linkTo="/coach"
          />
        </div>
      </div>
    </>
  );
}

export default Service;
