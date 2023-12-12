import { IonText } from "@ionic/react";
import React from "react";

interface OrderProps {
  name: string
  qty: string
  price: string
}

const Order: React.FC<OrderProps> = ({ name, qty, price }) => {
  return (
    <div className="flex gap-[19px] items-center">
      <div className="w-12 h-12 relative rounded-lg m-4">
        <img
          src="/assets/images/post.jpg"
          className="bg-cover w-full h-full rounded-lg"
        />
        <p className="absolute text-[#111729] top-[-10px] right-[-10px] w-5 h-5 bg-white shadow-sm border border-[#E3E8EF] rounded-full text-center text-[11px] flex items-center justify-center font-bold leading-[13px] tracking-[0.07px]">
          1
        </p>
      </div>

      <div className="flex flex-col">
        <IonText className="text-[#111729] text-sm font-semibold leading-[21px] tracking-[0.07px]">
          {name}
        </IonText>
        <div className="flex gap-6">
          <IonText className="text-[#111729] text-sm font-medium leading-[23px] tracking-[0.07px]">
            <span className="text-[#677489]">Qty:</span> {qty}
          </IonText>
          <IonText className="text-[#111729] text-sm font-medium leading-[23px] tracking-[0.07px]">
            <span className="text-[#677489]">Price:</span> {price}
          </IonText>
        </div>
      </div>
    </div>
  );
};

export default Order;
