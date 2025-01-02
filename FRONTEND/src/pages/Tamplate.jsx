import SwiperSlider from "../components/imageSLider/Slider";

function Tamplate() {
  return (
    <>
      <div className="border-t px-4 dark:bg-[#282828] bg-[#1F2937] py-20 flex justify-center items-center flex-col">
        <h1 className=" text-center font-semibold mb-2 text-4xl leading-10 text-white">
          Choose templates approved by recruiters
        </h1>
        <div className="font-normal text-center dark:text-[#a1a1aa] text-sm text-[#ced1de] leading-5">
          <p>
            Whether you are a current college student, a fresher or a seasoned
            professional,
          </p>
          <p>
            we have visually appealing templates that will highlight your skills
            and make you stand out.
          </p>
        </div>
        <div className=" mt-8 w-full px-10 ">
          <SwiperSlider />
        </div>
        <div>
          <button className="bg-secondary mt-5 py-2 px-4 font-semibold text-sm rounded-md h-10 text-white hover:bg-btnColor hover:delay-100">View all</button>
        </div>
      </div>
    </>
  );
}

export default Tamplate;
