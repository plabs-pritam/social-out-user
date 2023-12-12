import { IonIcon, IonInput, IonLabel } from "@ionic/react";

const EventCreationStep5 = () => {
  return (
    <>
      <div className="text-[28px] font-bold">Ticket Details</div>
      <div className="text-[14px] text-gray-600 mb-4">
        Enter the details of your events
      </div>
      <div className="mb-3 flex flex-col gap-2">
        <IonLabel className="text-[14px] font-medium">Ticket Name</IonLabel>
        <IonInput fill="outline" placeholder="Standard Ticket" />
      </div>
      <div className="mb-3 flex flex-col gap-2">
        <IonLabel className="text-[14px] font-medium">Number of Tickets on sale</IonLabel>
        <IonInput fill="outline" placeholder="100" />
      </div>
      <div className="mb-3 flex flex-col gap-2">
        <IonLabel className="text-[14px] font-medium">
          Ticket Price
        </IonLabel>
        <IonInput fill="outline" placeholder="$ 80" />
      </div>
      <div className="mb-3 flex items-center gap-2">
        <IonIcon icon="/assets/icons/solar_add-circle-outline.svg" className="w-6 h-6" />
        <p className="text-[#6E0699] text-base font-medium">Add new ticket type</p>
      </div>
    </>
  );
};

export default EventCreationStep5;