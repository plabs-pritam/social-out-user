import { IonContent, IonIcon, IonModal } from "@ionic/react";
import { useState } from "react";
import CommunityJoinRules from "./CommunityJoinRules";

const CommunityRulesList: React.FC<{ handleClose: any }> = ({
  handleClose,
}) => {

  const [ showCommunityJoinRules, setShowCommunityJoinRules ] = useState(false);

  return (
    <IonContent color="white">
      <div className="text-black">
        <div className="sticky top-0 flex gap-3 items-center justify-between bg-white mb-6 p-4">
          <div className="flex gap-3 items-center">
            <IonIcon
              onClick={handleClose}
              className="text-2xl cursor-pointer"
              icon={"/assets/icons/solar_arrow-left-outline.svg"}
            />
            <div className="text-[18px] font-bold">Rules</div>
          </div>

          <div className="border flex items-start p-[10px] gap-[10px] rounded-[1000px]">
            <IonIcon size="15px" icon={"/assets/icons/Vector_plus.svg"} />
          </div>
        </div>

        <div className="mt-6 mx-4 h-[630px] flex flex-col items-center justify-between">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-1 items-center">
              <div className="w-full flex items-center justify-between">
                <h1 className="text-black w-[310px] block truncate text-sm not-italic font-semibold">
                  1. Remember the human
                </h1>
                <IonIcon
                  className="w-4 h-4"
                  icon="/assets/icons/solar_alt-arrow-right-outline.svg"
                />
              </div>

              <span className="w-[295px] block truncate text-ellipsis text-xs not-italic font-normal leading-[18px]">
                Lorem ipsum dolor sit amet consectetur. Non elementum metus
                porta varius diam volutpat quis amet et. Viverra diam massa arcu
                interdum et et.
              </span>
            </div>
            {/* Hline */}
            <div className="w-full h-[1px] bg-[#00000010]"></div>

            <div className="flex flex-col gap-1 items-center">
              <div className="w-full flex items-center justify-between">
                <h1 className="text-black w-[310px] block truncate text-sm not-italic font-semibold">
                  2. Abide by the community rule
                </h1>
                <IonIcon
                  className="w-4 h-4"
                  icon="/assets/icons/solar_alt-arrow-right-outline.svg"
                />
              </div>

              <span className="w-[295px] block truncate text-ellipsis text-xs not-italic font-normal leading-[18px]">
                Lorem ipsum dolor sit amet consectetur. Non elementum metus
                porta varius diam volutpat quis amet et. Viverra diam massa arcu
                interdum et et.
              </span>
            </div>
            {/* Hline */}
            <div className="w-full h-[1px] bg-[#00000010]"></div>

            <div className="flex flex-col gap-1 items-center">
              <div className="w-full flex items-center justify-between">
                <h1 className="text-black w-[310px] block truncate text-sm not-italic font-semibold">
                  3. Respect the privacy of others, interfering in others
                  privacy will not be tolerated
                </h1>
                <IonIcon
                  className="w-4 h-4"
                  icon="/assets/icons/solar_alt-arrow-right-outline.svg"
                />
              </div>

              <span className="w-[295px] block truncate text-ellipsis text-xs not-italic font-normal leading-[18px]">
                Lorem ipsum dolor sit amet consectetur. Non elementum metus
                porta varius diam volutpat quis amet et. Viverra diam massa arcu
                interdum et et.
              </span>
            </div>
            {/* Hline */}
            <div className="w-full h-[1px] bg-[#00000010]"></div>
          </div>

          <button
            className="w-full flex py-3 px-[70px] justify-center items-center gap-[10px] rounded-lg bg-[#6E0699] mx-auto mt-[40px]"
            onClick={() => setShowCommunityJoinRules(true)}
          >
            <span className="text-white text-lg not-italic font-semibold leading-6">
            Continue
            </span>
          </button>
        </div>
      </div>

      <IonModal isOpen={showCommunityJoinRules}>
        <CommunityJoinRules handleClose={() => setShowCommunityJoinRules(false)} />
      </IonModal>
    </IonContent>
  );
};

export default CommunityRulesList;
