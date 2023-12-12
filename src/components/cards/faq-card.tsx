import { IonIcon, IonText } from "@ionic/react";

const FaqCard = () => {
  return (
    <div className="flex py-[26px] flex-shrink-0 px-[14px] items-center justify-center rounded-xl bg-[#DFF1FF]">
      <div className="flex flex-col items-start gap-3">
        <IonIcon
          src="/assets/icons/solar_bell-outline.svg"
          className="text-[#0290FF]"
        />

        <div className="flex flex-col items-start">
          <IonText className="text-[#616161] text-xs font-normal leading-4 tracking-[0.2px]">
            Questions about
          </IonText>
          <IonText className="text-black text-sm font-semibold leading-5 tracking-[0.1px]">
            Questions about
          </IonText>
        </div>
      </div>
    </div>
  );
};

export default FaqCard;
