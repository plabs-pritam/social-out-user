import { IonButton, IonText } from "@ionic/react";

const AchievementCard = () => {
  return (
    <div className="flex gap-3 items-center w-full">
      <div className="flex p-2 justify-center items-center rounded-[57px] border border-[#6100FF] bg-[#F6F0FF]">
        <img
          src="/assets/icons/purple-medal-ribbons-star-bold.svg"
          alt=""
          className="h-[22px] w-full"
        />
      </div>
      <div className="me-auto">
        <IonText className="block text-sm font-medium leading-normal text-black">
          Star Contributor
        </IonText>
        <IonText color="light" className="block text-xs text-[#898989]">
          Invite 10 people to the community.
        </IonText>
      </div>
      <div>
        <IonText className="text-xs font-semibold leading-normal text-black">
          250 points
        </IonText>
      </div>
    </div>
  );
};

export default AchievementCard;
