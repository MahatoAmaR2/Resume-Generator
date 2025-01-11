function TamplateCard({ image, alte, title, para }) {
  return (
    <div>
      <div className="w-full p-6 bg-[#F0F2F9] rounded-md group">
        <div className="w-full ">
          <div className="w-full relative aspect-[1/1.414]">
            <img
              src={image}
              alt={alte}
              className=" w-full h-full absolute inset-0 text-transparent"
            />
            <div className="absolute top-0 left-0 bg-black/30 w-full h-full scale-y-0 group-hover:scale-y-100 transition-all ease-in-out duration-300 flex justify-center items-center origin-top">
              <button className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring bg-secondary text-white shadow hover:bg-btnColor hover:text-white h-10 px-4 py-2">
                Select Tamplates
              </button>
            </div>
          </div>
          <div className="flex flex-col gap-1 mt-4">
            <h2 className="text-sm leading-normal capitalize font-semibold">
              {title}
            </h2>
            <p className="text-sm text-[#71717a]">{para}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TamplateCard;
