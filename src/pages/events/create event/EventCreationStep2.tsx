import { IonInput, IonLabel } from "@ionic/react";

const EventCreationStep2 = () => {
  return (
    <>
      <div className="text-[28px] font-bold">Set Time and Date</div>
      <div className="text-[14px] text-gray-600 mb-4">
        Select time and date for your event
      </div>

      <div className="flex gap-4 items-center">
        <div className="mb-3 flex flex-col gap-2">
          <IonLabel className="text-[14px] font-medium">Start Date</IonLabel>
          <IonInput fill="outline" placeholder="Start" />
        </div>
        <div className="mb-3 flex flex-col gap-2">
          <IonLabel className="text-[14px] font-medium">End Date</IonLabel>
          <IonInput fill="outline" placeholder="End" />
        </div>
      </div>
      
      <div className="mb-3 flex flex-col gap-2">
        <IonLabel className="text-[14px] font-medium">
          Event timings
        </IonLabel>
        <IonInput fill="outline" placeholder="4:00 PM - 7:00 PM" />
      </div>
    </>
  );
};

export default EventCreationStep2;