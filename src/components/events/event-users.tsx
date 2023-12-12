import { IonAvatar, IonImg, IonText } from "@ionic/react";

const EventUsers = () => {
  return (
    <div className="inline-flex items-center">
      <div className="w-[20px]">
        <IonAvatar className="w-[32px] h-[32px]">
          <IonImg
            className="h-full object-cover"
            src={"/assets/images/user.jpg"}
          />
        </IonAvatar>
      </div>
      <div className="w-[20px]">
        <IonAvatar className="w-[32px] h-[32px]">
          <IonImg
            className="h-full object-cover"
            src={"/assets/images/Avatar.png"}
          />
        </IonAvatar>
      </div>
      <div className="w-[20px]">
        <IonAvatar className="w-[32px] h-[32px]">
          <IonImg
            className="h-full object-cover"
            src={"/assets/images/user.jpg"}
          />
        </IonAvatar>
      </div>
      <IonText color="light" className="ms-5 text-xs">
        12.1k people <span className="text-black">are interested in the event</span>
      </IonText>
    </div>
  );
};

export default EventUsers;
