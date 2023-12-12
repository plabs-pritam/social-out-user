import { IonContent, IonImg, IonText } from "@ionic/react";
import PrimaryButton from "../buttons/primary-button";

const profileData = [
  {
    value: 20,
    heading: "Posts",
  },
  {
    value: 20,
    heading: "Referrals",
  },
  {
    value: 1000,
    heading: "Likes",
  },
];

function ProfileOptions({ closeOption }: { closeOption: any }) {
  return (
    <IonContent className="ion-padding">
      <div className="h-full flex flex-col gap-6 items-start ion-padding-vertical">
        <div className="flex w-full items-center gap-3">
          <img
            src="/assets/images/user.jpg"
            alt=""
            className="w-[64px] h-[64px] rounded-[50px]"
          />

          <div className="flex items-start flex-col justify-center gap-1">
            <IonText className="text-[#2A2A2A] text-lg font-semibold leading-normal">
              Ken Khoi
            </IonText>
            <div className="flex py-[6px] px-3 items-center gap-[2px] bg-[#FFF6ED] border-[0.5px] border-[#FF8A00] rounded-3xl">
              <img
                src="/assets/icons/solar_medal-ribbons-star-bold.svg"
                alt=""
              />
              <IonText className="text-[#FF8A00] text-xs font-semibold leading-normal">
                Pioneer
              </IonText>
            </div>
          </div>
        </div>

        <div className="flex items-center w-full">
          {profileData.map((option, index) => (
            <div key={index} className={`flex p-[10px] w-[115px] items-center justify-center gap-[10px] flex-shrink-0 ${index === (profileData.length - 1) ? "" : "border-r-[#0000001A] border-r"}`}>
              <div className="flex flex-col justify-center p-[10px] items-center gap-1">
                <IonText className="text-black text-[20px] font-semibold leading-normal">
                  {option.value}
                </IonText>
                <IonText className="text-black text-base font-medium leading-normal">
                  {option.heading}
                </IonText>
              </div>
            </div>
          ))}
        </div>

        <PrimaryButton>View Profile</PrimaryButton>

      </div>
    </IonContent>
  );
}

export default ProfileOptions;
