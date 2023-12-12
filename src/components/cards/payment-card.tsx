import React from "react";
import { IonRadio, IonText } from "@ionic/react";

interface PaymentCardProps {
  img: string;
  heading: string;
  name?: string;
  value: string;
  onChange?: any;
}

const PaymentCard: React.FC<PaymentCardProps> = ({ img, heading, name, value, onChange }) => {
  return (
    <div className="flex gap-[10px] p-[10px] w-full items-center justify-between rounded-lg border border-[#E3E8EF]">
      <div className="flex gap-[10px] items-center">
        <div className="flex w-[90px] h-[60px] justify-center items-center rounded-lg bg-[#F7F7F7] border border-[#D9D9D9]">
          <img src={img} alt="" />
        </div>
        <div className="flex flex-col items-start">
          <IonText className="text-black text-base font-medium leading-6">
            {heading}
          </IonText>
          {name && (
            <IonText className="text-[#898989] text-xs font-bold leading-[18px]">
              {name}
            </IonText>
          )}
        </div>
      </div>
      <input type="radio" name="payment-option" value={value} className="text-[#6E0699] bg-white filter-none" onChange={(e) => onChange(e)} />
      {/* <IonRadio name={value} value={value} className="text-[#6E0699]" onChange={(e) => onChange(e)} /> */}
    </div>
  );
};

export default PaymentCard;
