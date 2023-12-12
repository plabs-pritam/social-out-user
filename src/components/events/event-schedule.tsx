import { IonAvatar, IonButton, IonIcon, IonText } from "@ionic/react";

const EventSchedule = () => {
  return (
    <>
      <div className="flex gap-3">
        <div>
          <IonAvatar className="w-[40px] h-[40px] bg-[#F9ECFE] grid place-items-center">
            <IonIcon
              className="h-full object-cover text-[#6E0699]"
              icon={"/assets/icons/solar_calendar-mark-outline.svg"}
            />
          </IonAvatar>
        </div>
        <div>
          <IonText className="block font-medium text-black">
            Monday, December 24, 2022
          </IonText>
          <IonText className="text-xs text-[#898989]">
            18:00 - 23:00 PM (GMT +07:00)
          </IonText>
          <IonButton
            shape="round"
            fill="clear"
            className="capitalize mt-3 schedule-btn px-[10px] bg-[var(--ion-color-primary)] text-white text-xs font-normal leading-4 rounded-full"
          >
            <IonIcon
              className="h-[16px] w-[16px] object-cover me-3 text-white text-sm p-[1px]"
              icon={"/assets/icons/solar_calendar-mark-outline.svg"}
            />
            Add to my Calendar
          </IonButton>
        </div>
      </div>

      <div className="flex gap-3">
        <div>
          <IonAvatar className="w-[40px] h-[40px] bg-[#F9ECFE] grid place-items-center">
            <IonIcon
              className="h-full object-cover text-[#6E0699]"
              icon={"/assets/icons/solar_map-point-outline.svg"}
            />
          </IonAvatar>
        </div>
        <div>
          <IonText className="block font-medium text-black">
            Monday, December 24, 2022
          </IonText>
          <IonText className="text-xs text-[#898989]">
            18:00 - 23:00 PM (GMT +07:00)
          </IonText>
          <IonButton
            shape="round"
            fill="clear"
            className="capitalize mt-3 schedule-btn px-[10px] bg-[var(--ion-color-primary)] text-white text-xs font-normal leading-4 rounded-full"
          >
            <IonIcon
              className="h-[16px] w-[16px] object-cover me-3 text-white text-sm p-[1px]"
              icon={"/assets/icons/solar_map-point-outline.svg"}
            />
            See Location on Maps
          </IonButton>
        </div>
      </div>

      <div className="flex gap-3">
        <div>
          <IonAvatar className="w-[40px] h-[40px] bg-[#F9ECFE] grid place-items-center">
            <IonIcon
              className="h-full object-cover text-[#6E0699]"
              icon={"/assets/icons/solar_ticket-outline.svg"}
            />
          </IonAvatar>
        </div>
        <div>
          <IonText className="block font-medium text-black">
            Monday, December 24, 2022
          </IonText>
          <IonText className="text-xs text-[#898989]">
            18:00 - 23:00 PM (GMT +07:00)
          </IonText>
        </div>
      </div>
    </>
  );
};

export default EventSchedule;
