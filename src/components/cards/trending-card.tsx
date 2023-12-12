import { IonAvatar, IonButton, IonImg, IonText } from "@ionic/react";

const TrendingCard = () => {
  return (
    <div className="flex gap-3 items-center border flex-shrink-0 min-w-[273px] border-[#0000001a] rounded-2xl px-3 py-4">
      <IonAvatar className="w-[40px] h-[40px]">
        <IonImg
          className="h-full object-cover"
          src={"/assets/images/user.jpg"}
        />
      </IonAvatar>
      <div className="me-auto">
        <IonText className="block text-lg font-medium leading-normal text-black">
          Food Recipes
        </IonText>
        <IonText color="light" className="block text-xs text-[#898989]">
          12.13k members
        </IonText>
      </div>
      <div>
        <IonButton
          shape="round"
          fill="clear"
          className="capitalize font-bold rounded-full bg-[#F9ECFE]"
        >
          Join
        </IonButton>
      </div>
    </div>
  );
};

export default TrendingCard;
