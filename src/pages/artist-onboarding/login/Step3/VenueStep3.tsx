import { IonInput, IonLabel } from "@ionic/react";

const VenueStep3 = () => {
  return (
    <>
      <div className="text-[28px] font-bold">Venue Provider Details 🏢</div>
      <div className="text-[14px] text-gray-600 mb-4">
        Enter the details of your company.
      </div>
      <div className="mb-3 flex flex-col items-start gap-2 self-stretch">
        <IonLabel className="text-[14px] text-[#111729] font-bold leading-[23px] tracking-[0.07px]">Status</IonLabel>
        <IonInput fill="outline" placeholder="Own, Agency, Brand, etc..." />
      </div>
      <div className="mb-3 flex flex-col items-start gap-2 self-stretch">
        <IonLabel className="text-[14px] text-[#111729] font-bold leading-[23px] tracking-[0.07px]">
          Venues you provide
        </IonLabel>
        <IonInput fill="outline" placeholder="Hotels, Arena, Conference, etc..." />
      </div>
      <div className="mb-3 flex flex-col items-start gap-2 self-stretch">
        <IonLabel className="text-[14px] text-[#111729] font-bold leading-[23px] tracking-[0.07px]">
          Company Phone/Mobile no.
        </IonLabel>
        <IonInput fill="outline" placeholder="Company Contact Number" />
      </div>
    </>
  );
};

export default VenueStep3;
