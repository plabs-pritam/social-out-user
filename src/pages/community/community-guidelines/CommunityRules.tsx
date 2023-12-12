import { IonContent, IonIcon, IonModal } from "@ionic/react";
import { useState } from "react";
import CommunityRulesList from "./CommunityRulesList";

const CommunityRules: React.FC<{ handleClose: any }> = ({ handleClose }) => {
  const [showCommunityRulesList, setShowCommunityRulesList] = useState(false);

  return (
    <IonContent color="white">
      <div className="text-black">
        <div className="sticky top-0 flex gap-3 items-center bg-white mb-6 p-4">
          <IonIcon
            onClick={handleClose}
            className="text-2xl cursor-pointer"
            icon={"/assets/icons/solar_arrow-left-outline.svg"}
          />
          <div className="text-[18px] font-bold">Rules</div>
        </div>
      </div>

      <div className="mx-4 mt-6 h-[645px] flex flex-col justify-between">
        <form className="create-community-form flex flex-col items-start gap-4">
          <div className="flex flex-col w-full gap-2 items-stretch">
            <label
              htmlFor=""
              className="text-[#111729] text-sm not-italic font-bold leading-[23px] tracking-[0.07px]"
            >
              Rule Title
            </label>
            <input
              type="text"
              className="input flex px-3 pt-[9px] pb-2 gap-3 items-stretch outline-none"
              placeholder="Name of community"
            />
          </div>

          <div className="flex flex-col w-full gap-2 items-stretch">
            <label
              htmlFor=""
              className="text-[#111729] text-sm not-italic font-bold leading-[23px] tracking-[0.07px]"
            >
              Description
            </label>
            <div className="input px-3 pt-[9px] pb-2 align-top outline-none h-20">
              <input
                type="textarea"
                className="outline-none bg-transparent w-full"
                placeholder="Write a brief about your community"
              />
            </div>
          </div>
        </form>

        <button
          className="w-full flex py-3 px-[70px] justify-center items-center gap-[10px] rounded-lg bg-[#6E0699] mx-auto mt-[40px]"
          onClick={() => setShowCommunityRulesList(true)}
        >
          <span className="text-white text-lg not-italic font-semibold leading-6">
            Save
          </span>
        </button>
      </div>

      <IonModal isOpen={showCommunityRulesList}>
        <CommunityRulesList handleClose={() => setShowCommunityRulesList(false)} />
      </IonModal>
    </IonContent>
  );
};

export default CommunityRules;
