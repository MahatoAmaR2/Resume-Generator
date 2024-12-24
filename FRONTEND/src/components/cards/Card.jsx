import { Link } from "react-router-dom";

function Card({ linkTO, image, alt, title, description, smallPara }) {
  return (
    <>
      {/* <div > */}
      <Link
        to={linkTO}
        className="mb-2 h-[172px] w-[384px] px-2 py-5  hover:shadow-xl transition-shadow duration-200 hover:cursor-pointer flex items-center justify-center flex-col"
      >
        {image && <img src={image} alt={alt} className="w-8 h-8" />}
        <h1 className="text-[#030712] dark:text-white my-4 text-[18px] leading-7 font-normal">
          {title}
        </h1>
        <p className="text-[#71717a] dark:text-[#a1a1aa] text-[14px] leading-5 font-normal">
          {description}
        </p>
        <p className="text-[#71717a] dark:text-[#a1a1aa] text-[14px] leading-5 font-normal">
          {smallPara}
        </p>
      </Link>
      {/* </div> */}
    </>
  );
}

export default Card;
