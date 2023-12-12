import { IonInput, IonLabel } from "@ionic/react";

const ServiceStep3 = () => {
  return (
    <>
      <div className="text-[28px] font-bold">Service Provider Details 🏢</div>
      <div className="text-[14px] text-gray-600 mb-4">
        Enter the details of your company.
      </div>
      <div className="mb-3 flex flex-col items-start gap-2 self-stretch">
        <IonLabel className="text-[14px] text-[#111729] font-bold leading-[23px] tracking-[0.07px]">Service Status</IonLabel>
        <IonInput fill="outline" placeholder="Self, Agency, etc..." />
      </div>
      <div className="mb-3 flex flex-col items-start gap-2 self-stretch">
        <IonLabel className="text-[14px] text-[#111729] font-bold leading-[23px] tracking-[0.07px]">
          Services you provide
        </IonLabel>
        <IonInput fill="outline" placeholder="Catering, Entertainment, Photography, etc..." />
      </div>
      <div className="mb-3 flex flex-col items-start gap-2 self-stretch">
        <IonLabel className="text-[14px] text-[#111729] font-bold leading-[23px] tracking-[0.07px]">
          Type of event you specialize in
        </IonLabel>
        <IonInput fill="outline" placeholder="Wedding, Corporate Events, Parties, etc..." />
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

export default ServiceStep3;
