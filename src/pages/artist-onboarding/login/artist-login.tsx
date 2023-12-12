/** @format */

import {
  IonButton,
  IonContent,
  IonInput,
  IonLabel,
  IonProgressBar,
  useIonRouter,
} from "@ionic/react";
import { IonIcon } from "@ionic/react";
import { useState } from "react";
import Step2 from "./Step2";
import ArtistStep3 from "./Step3/ArtistStep3";
import VenueStep3 from "./Step3/VenueStep3";
import ServiceStep3 from "./Step3/ServiceStep3";

let totalStep = 3;

const ArtistLogin = () => {
  const [step, setStep] = useState(1);
  const [direction, setDirection] = useState("animate__fadeInRight");
  const [selectedAccount, setSelectedAccount] = useState(null);
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
    if ((step + 1 === 4) && selectedAccount === "artist") {
      return ionRouter.push("/artist-dashboard");
    } else if ((step + 1 === 4) && selectedAccount === "serviceProvider") {
      return ionRouter.push("/artist-dashboard");
    } else if ((step + 1 === 4) && selectedAccount === "venueProvider") {
      return ionRouter.push("/venue-dashboard");
    } else if ((step + 1 === 3) && !selectedAccount) {
      setStep(ps => ps);
    } else {
      setStep((ps) => ps + 1);
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
        return <Step2 handleAccountSelection={handleAccountSelection} />;
      case 3:
        if (selectedAccount === "artist") {
          return <ArtistStep3 />;
        } else if (selectedAccount === "serviceProvider") {
          return <ServiceStep3 />;
        } else if (selectedAccount === "venueProvider") {
          return <VenueStep3 />;
        }
        break;
      default:
        return null;
    }
  }

  return (
    <>
      <IonContent>
        <div className="flex flex-col h-full px-3 py-5">
          <IonIcon
            className="w-[28px] h-[28px]"
            onClick={onBack}
            icon="/assets/icons/solar_arrow-left-outline.svg"
          />
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
      </IonContent>
    </>
  );
};

export default ArtistLogin;

const Step1 = () => {
  return (
    <>
      <div className="text-[28px] font-bold">Personal Details 🧔🏼</div>
      <div className="text-[14px] text-gray-600 mb-4">
        Enter your personal details
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

