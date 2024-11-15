import { HeeIcon } from "../svg/HeeIcon";

export const GreenZone = () => {
  return (
    <main>
      <div className="bg-BrandGreen h-[780px] flex items-center justify-center">
        <HeeIcon />
        <div className="container m-auto  h-full max-w-[1200px]">
          <div className="flex items-center justify-between h-full">
            <div className="flex flex-col gap-6 max-w-[384px]">
              <p className="font-Poppins font-semibold text-white text-[55px] leading-[90%] tracking-[0.55px]">
                Pinecone <br />
                Food delivery
              </p>
              <div className="border border-white border-t-0 border-x-0 opacity-[0.5] w-full"></div>
              <p className="font-Comfortaa font-bold leading-[120%] text-white text-[22px] tracking-[0.22px] ">
                Horem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
            <div className="max-w-[588px] static z-10 ">
              <img src="./GreenZoneImg.png" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
