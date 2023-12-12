import { IonAvatar, IonButton, IonImg, IonText } from "@ionic/react";

const EventOrganizer = () => {
  return (
    <div className="flex gap-3 items-center">
      <IonAvatar className="w-[40px] h-[40px]">
        <IonImg
          className="h-full object-cover"
          src={"/assets/images/user.jpg"}
        />
      </IonAvatar>
      <div className="me-auto">
        <IonText className="block text-lg font-bold text-black">
          World of Music
        </IonText>
        <IonText color="light" className="block text-xs text-[#898989]">
          Event Organizer
        </IonText>
      </div>
      <div>
        <IonButton
          shape="round"
          fill="clear"
          className="follow-btn capitalize font-medium text-sm leading-normal rounded-full bg-[#F9ECFE]"
        >
          Follow
        </IonButton>
      </div>
    </div>
  );
};

export default EventOrganizer;
