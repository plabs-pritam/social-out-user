import { IonRadio, IonText } from "@ionic/react";
import PrimaryButton from "../../components/buttons/primary-button";
import DefaultLayout from "../../layouts/DefaultLayout";
import { cancelReason } from "../../data/user-data";

const CancelTicket = () => {
  return (
    <DefaultLayout title="Request Cancellation" showBackButton>
      <div className="p-4 flex flex-col items-start gap-4">
        <div className="flex flex-col gap-2">
          <IonText className="text-black text-base font-medium leading-[20px]">
            Reason for Cancellation
          </IonText>

          <div className="flex flex-col items-start gap-4 mb-4">
            {cancelReason.map((reason, index) => (
              <div key={index} className="flex gap-[10px] items-center">
                <IonRadio name="cancel-reason" className="w-6 h-6" />
                <IonText className="text-black text-sm font-normal leading-[18px]">
                  Reason for Cancellation
                </IonText>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col w-full gap-2">
          <IonText className="text-black text-base font-medium leading-[20px]">
            State your reason
          </IonText>
          <div className="flex items-start px-3 py-2 gap-3 min-h-[80px] w-full rounded-lg border border-[#E3E8EF]">
            <textarea
              placeholder="Type here..."
              className="w-full text-[#677489] text-sm font-medium leading-6 tracking-[0.07px] outline-none bg-transparent"
            />
          </div>
        </div>
      </div>

      {/* Buy ticket */}
      <div className="w-full left-0 right-0 absolute bottom-0 p-4 pt-0 bg-white flex items-center justify-center">
        <PrimaryButton routerLink="/user/events">Submit Request</PrimaryButton>
      </div>
    </DefaultLayout>
  );
};

export default CancelTicket;
