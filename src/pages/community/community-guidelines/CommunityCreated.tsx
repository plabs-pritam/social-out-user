import { IonButton, IonIcon } from "@ionic/react";

const CommunityCreated: React.FC<{
  handleClose: any;
  heading: string;
  message: string;
  btn: string;
  routerLink: any;
}> = ({ handleClose, heading, message, btn, routerLink }) => {
  return (
    <div className="community-created top-[200px] left-[23px] z-[99] absolute flex w-[350px] max-h-max flex-col items-center flex-shrink-0 rounded-xl bg-white pb-4 overflow-hidden">
      <div className="flex px-4 pt-5 pb-0 flex-col items-start gap-3 self-stretch">
        <div className="flex flex-shrink-0 p-[9px] justify-center items-center rounded-[28px] border-[8px] border-[#ECFDF3] bg-[#D1FADF]">
          <IonIcon
            className="w-6 h-6"
            icon="/assets/icons/check-circle.svg"
          />
        </div>
        <div className="flex flex-col items-start gap-2">
          <h1 className="text-[#010101] text-lg font-bold leading-6">
            {heading} 🎉
          </h1>
          <p className="text-[#A19EA2] text-sm font-normal leading-[18px]">
            {message}
          </p>
        </div>
      </div>

      <div className="flex pt-5 flex-col justify-center items-start self-stretch">
        <div className="flex p-4 pt-0 flex-col items-start gap-3 self-stretch">
          <div className="w-full">
            <IonButton
              className="ion-btn-primary m-0 w-full"
              size="large"
              routerLink={routerLink}
            >
              {btn}
            </IonButton>
          </div>

          <button
            className="w-full flex py-[10px] px-[18px] justify-center items-center gap-[8px] rounded-lg bg-[#fff] border border-solid border-[#D0D5DD]"
            onClick={handleClose}
          >
            <span className="text-[#344054] text-base not-italic font-semibold leading-6">
              Cancel
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CommunityCreated;
