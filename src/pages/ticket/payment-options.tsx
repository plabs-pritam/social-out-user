import { IonContent, IonText } from "@ionic/react";
import PaymentCard from "../../components/cards/payment-card";
import PrimaryButton from "../../components/buttons/primary-button";

function PaymentOptions({
  closeOption,
  selectedOption,
  onPay,
}: {
  closeOption: any;
  selectedOption: string;
  onPay: any;
}) {
  return (
    <IonContent onMouseLeave={closeOption}>
      <div className="h-full gap-6 items-center mt-5 mx-6 mb-10">
        <div className="flex flex-col w-full gap-2 items-start mb-6">
          {selectedOption === "upi" && <UpiPayment />}
          {selectedOption === "credit_card" && <CardPayment />}
          {selectedOption === "visa" && <CardPayment />}
        </div>
        <PrimaryButton onClick={onPay}>Proceed to pay</PrimaryButton>
      </div>
    </IonContent>
  );
}

export default PaymentOptions;

const UpiPayment = () => {
  return (
    <>
      <IonText className="text-[#111729] text-sm font-bold leading-[23px] tracking-[0.07px]">
        Selected Payment
      </IonText>

      <PaymentCard
        img="/assets/icons/paytm.svg"
        heading="paytm"
        value="patym"
      />
      <PaymentCard
        img="/assets/images/gPay.png"
        heading="Google Pay"
        name="gpay"
        value="visa"
      />
    </>
  );
};

const CardPayment = () => {
  return (
    <>
      <div className="flex justify-between items-center w-full">
        <IonText className="text-[#111729] text-sm font-bold leading-[23px] tracking-[0.07px]">
          Card Details
        </IonText>
        <IonText className="text-[#6E0699] text-xs font-medium leading-[18px]">
          Save this card
        </IonText>
      </div>
      <div className="flex flex-col gap-4 p-4 w-full items-start justify-between rounded-lg border border-[#E3E8EF]">
        <div className="flex flex-col w-full gap-2 items-start mb-6">
          <IonText className="text-[#111729] text-sm font-bold leading-[23px] tracking-[0.07px]">
            Card Number
          </IonText>
          <div className="flex pt-[9px] px-3 pb-2 w-full items-center rounded-lg border border-[#E3E8EF]">
            <input
              type="number"
              placeholder="Enter Card Number"
              className="bg-transparent w-full text-[#111729] text-sm font-medium leading-[23px] tracking-[0.07px] outline-none"
            />
          </div>
        </div>

        <div className="flex gap-4 items-start">
          <div className="flex flex-col w-full gap-2 items-start mb-6">
            <IonText className="text-[#111729] text-sm font-bold leading-[23px] tracking-[0.07px]">
              Valid Till
            </IonText>
            <div className="flex pt-[9px] px-3 pb-2 w-full items-center rounded-lg border border-[#E3E8EF]">
              <input
                type="number"
                placeholder="MM/YY"
                className="bg-transparent w-full text-[#111729] text-sm font-medium leading-[23px] tracking-[0.07px] outline-none"
              />
            </div>
          </div>
          <div className="flex flex-col w-full gap-2 items-start mb-6">
            <IonText className="text-[#111729] text-sm font-bold leading-[23px] tracking-[0.07px]">
              CVV
            </IonText>
            <div className="flex pt-[9px] px-3 pb-2 w-full items-center rounded-lg border border-[#E3E8EF]">
              <input
                type="number"
                placeholder="CVV"
                className="bg-transparent w-full text-[#111729] text-sm font-medium leading-[23px] tracking-[0.07px] outline-none"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
