import { IonImg } from "@ionic/react";

const PostInputs = () => {
  return (
    <div className="flex flex-col gap-6 items-start">
      <div className="flex w-full flex-col gap-2 items-start">
        <label className="text-sm font-bold leading-[23px] tracking-[0.07px] text-[#111729]">
          Select Community
        </label>
        <div className="flex px-3 py-2 gap-3 w-full rounded-lg border border-[#E3E8EF]">
          <input
            type="text"
            placeholder="Type of event"
            className="w-full text-[#677489] text-sm font-medium leading-6 tracking-[0.07px] outline-none bg-transparent"
          />
          <IonImg src="/assets/icons/arrow-down.svg" />
        </div>
      </div>

      <div className="flex w-full flex-col gap-2 items-start">
        <label className="text-sm font-bold leading-[23px] tracking-[0.07px] text-[#111729]">
          Select Community
        </label>
        <div className="flex items-start px-3 py-2 gap-3 min-h-[80px] w-full rounded-lg border border-[#E3E8EF]">
          <textarea
            placeholder="Type of event"
            className="w-full text-[#677489] text-sm font-medium leading-6 tracking-[0.07px] outline-none bg-transparent"
          />
        </div>
      </div>

      {/* location */}
      <div className="flex w-full flex-col gap-2 items-start">
        <p className="text-sm font-bold leading-[23px] tracking-[0.07px] text-[#111729]">
          Select Community
        </p>

        <div className="flex items-start gap-2 w-full overflow-scroll">
          <div className="flex py-[6px] px-[10px] gap-2 flex-shrink-0 rounded-full bg-[#0000000A]">
            <IonImg src="/assets/icons/solar_map-point-outline.svg" className="w-[14px] h-[14px]" />
            <p className="text-[#111729] text-xs font-medium leading-4">
              Jodhpur, Rajasthan
            </p>
          </div>
          <div className="flex py-[6px] px-[10px] gap-2 flex-shrink-0 rounded-full bg-[#0000000A]">
            <IonImg src="/assets/icons/solar_map-point-outline.svg" className="w-[14px] h-[14px]" />
            <p className="text-[#111729] text-xs font-medium leading-4">
              Mangarh fort, Rajasthan
            </p>
          </div>
          <div className="flex py-[6px] px-[10px] gap-2 flex-shrink-0 rounded-full bg-[#0000000A]">
            <IonImg src="/assets/icons/solar_map-point-outline.svg" className="w-[14px] h-[14px]" />
            <p className="text-[#111729] text-xs font-medium leading-4">
              Mangarh fort, Rajasthan
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostInputs;
