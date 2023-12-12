import { IonText } from "@ionic/react";
import DefaultLayout from "../../layouts/DefaultLayout";

const UserChat = () => {
  return (
    <DefaultLayout title="Chat" showBackButton hideTabBar>
      <div className="flex flex-col gap-3 p-4 h-full">
        <div className="flex flex-grow flex-col-reverse gap-4">
          {/* user msg */}
          <div className="w-full flex justify-end">
            <div className="flex max-w-[285px] gap-[5px] flex-col">
              <IonText className="text-white text-base font-normal leading-normal flex py-[10px] px-4 items-start gap-2 rounded-xl rounded-tr-[0px] bg-[#6E0699]">
                Sure will do that.
              </IonText>
              <IonText className="text-[#0D082C66] w-full text-right text-xs font-normal leading-normal">
                Just Now
              </IonText>
            </div>
          </div>

          {/* Another user msg */}
          <div className="w-full">
            <div className="flex items-start gap-[10px]">
              <img
                src="/assets/images/Avatar.png"
                alt="user-image"
                className="w-9 h-p rounded-[18px]"
              />

              <div className="flex max-w-[285px] gap-[5px] flex-col items-start">
                <IonText className="text-[#2A2A2A] text-base font-medium leading-normal">
                  Guy Hawkins
                </IonText>
                <IonText className="text-[#0D082C] text-base font-normal leading-normal flex py-[10px] px-4 items-start gap-2 rounded-xl rounded-tl-[0px] bg-[#F7E7FE]">
                  Is anyone seen the recently uploaded event?
                </IonText>
                <IonText className="text-[#0D082C66] w-full text-right text-xs font-normal leading-normal">
                  08:00 AM
                </IonText>
              </div>
            </div>
          </div>
        </div>

        {/* input */}
        <div className="flex items-center justify-between rounded-[36px] bg-[#0000000D] p-3">
          <div className="flex gap-2">
            <img src="/assets/icons/solar_smile-circle-outline.svg" alt="" />
            <input
              type="text"
              placeholder="Type message..."
              className="bg-transparent outline-none text-black"
            />
          </div>
          <img src="/assets/icons/solar_plain-bold.svg" alt="" />
        </div>
      </div>
    </DefaultLayout>
  );
};

export default UserChat;
