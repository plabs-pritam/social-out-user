import { IonInput, IonLabel } from "@ionic/react";

const ArtistStep3 = () => {
  return (
    <>
      <div className="text-[28px] font-bold">Artist Details 🏢</div>
      <div className="text-[14px] text-gray-600 mb-4">
        Enter the details of your company.
      </div>
      <div className="mb-3">
        <IonLabel className="text-[14px] font-medium">Full Name</IonLabel>
        <IonInput fill="outline" placeholder="Enter Full Name" />
      </div>
      <div className="mb-3">
        <IonLabel className="text-[14px] font-medium">Email Id</IonLabel>
        <IonInput fill="outline" placeholder="Enter Full Name" />
      </div>
      <div className="mb-3">
        <IonLabel className="text-[14px] font-medium">
          Phone/Mobile no.
        </IonLabel>
        <IonInput fill="outline" placeholder="Enter Full Name" />
      </div>
    </>
  );
};

export default ArtistStep3;