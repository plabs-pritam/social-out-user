import {
  IonButton,
  IonContent,
  IonInput,
  IonLabel,
  IonModal,
  IonProgressBar,
  useIonRouter,
} from "@ionic/react";
import { IonIcon } from "@ionic/react";
import { useState } from "react";
import EventCreationStep2 from "./EventCreationStep2";
import EventCreationStep3 from "./EventCreationStep3";
import SelectVenue from "../../venue/SelectVenue";
import EventCreationStep4 from "./EventCreationStep4";
import SelectArtist from "../../artist-onboarding/events/SelectArtist";
import EventCreationStep5 from "./EventCreationStep5";
import TicketPreview from "../../ticket/TicketPreview";

let totalStep = 5;

const EventCreation: React.FC<{ handleClose: any }> = ({ handleClose }) => {
  const [step, setStep] = useState(1);
  const [direction, setDirection] = useState("animate__fadeInRight");
  const [selectedAccount, setSelectedAccount] = useState(null);
  const [showSelectVenue, setShowSelectVenue] = useState(false);
  const [showSelectArtist, setShowSelectArtist] = useState(false);
  const [showTicketPreview, setShowTicketPreview] = useState(false);
  const ionRouter = useIonRouter();

  const onBack = () => {
    setStep((ps) => ps - 1);

    setDirection("");
    setTimeout(() => {
      setDirection("animate__fadeInLeft");
    }, 10);
    if (step === 1) ionRouter.push("/");
  };

  const onForward = () => {
    if (step === 3 && !showSelectVenue) {
      setShowSelectVenue(true);
    } else if (step === 4 && !showSelectArtist) {
      setShowSelectArtist(true);
    } else if (step === 5 && !showTicketPreview) {
      setShowTicketPreview(true);
    } else {
      setStep((ps) => ps + 1);
      setShowSelectVenue(false);
      setShowSelectArtist(false);
    }

    setDirection("");
    setTimeout(() => {
      setDirection("animate__fadeInRight");
    }, 10);
  };

  const handleAccountSelection: any = (accountType: any) => {
    setSelectedAccount(accountType);
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return <Step1 />;
      case 2:
        return <EventCreationStep2 />;
      case 3:
        return (
          <EventCreationStep3 handleAccountSelection={handleAccountSelection} />
        );
      case 4:
        return (
          <EventCreationStep4 handleAccountSelection={handleAccountSelection} />
        );
      case 5:
        return <EventCreationStep5 />;
        break;
      default:
        return null;
    }
  };

  return (
    <>
      <IonContent>
        <div className="flex flex-col h-full px-3 py-5">
          <div className="flex items-start gap-3">
            <IonIcon
              className="w-[28px] h-[28px]"
              onClick={step === 1 ? handleClose : onBack}
              icon="/assets/icons/solar_arrow-left-outline.svg"
            />
            <h1 className="font-semibold text-lg leading-6">Event creation</h1>
          </div>
          <IonProgressBar
            className="h-[6px] rounded-full my-4"
            value={step / totalStep}
          ></IonProgressBar>
          <div className="font-medium mb-3">
            <span className="text-[20px]">{step}</span>
            <span className="text-gray-600">/{totalStep}</span>
          </div>
          <div
            className={`animate__animated animate__faster ${direction}`}
            data-direction={direction}
          >
            {renderStep()}
          </div>
          <IonButton className="mt-auto" onClick={onForward}>
            Continue
          </IonButton>
        </div>

        <IonModal isOpen={showSelectVenue}>
          <SelectVenue
            handleClose={() => setShowSelectVenue(false)}
            onForward={onForward}
          />
        </IonModal>

        <IonModal isOpen={showSelectArtist}>
          <SelectArtist
            handleClose={() => setShowSelectArtist(false)}
            onForward={onForward}
          />
        </IonModal>

        <IonModal isOpen={showTicketPreview}>
          {/* <TicketPreview handleClose={() => setShowTicketPreview(false)} /> */}
          <TicketPreview />
        </IonModal>
      </IonContent>
    </>
  );
};

export default EventCreation;

const Step1 = () => {
  return (
    <>
      <div className="text-[28px] font-bold">Event Detail</div>
      <div className="text-[14px] text-gray-600 mb-4">
        Select venue option from below
      </div>
      <div className="mb-3 flex flex-col gap-2">
        <IonLabel className="text-[14px] font-medium">Event name</IonLabel>
        <IonInput fill="outline" placeholder="Name of event" />
      </div>
      <div className="mb-3 flex flex-col gap-2">
        <IonLabel className="text-[14px] font-medium">
          Event description
        </IonLabel>
        <IonInput fill="outline" placeholder="Write a brief about your event" />
      </div>
      <div className="mb-3 flex flex-col gap-2">
        <IonLabel className="text-[14px] font-medium">Event type</IonLabel>
        <IonInput fill="outline" placeholder="Type of event" />
      </div>
    </>
  );
};
