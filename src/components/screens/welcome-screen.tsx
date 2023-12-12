/** @format */

import { IonButton, IonContent, IonIcon, IonImg } from "@ionic/react";
import { FC } from "react";
import LoadingScreen from "./loading-screen";
import { useState } from "react";
import AuthAppleButton from "../auth/apple";
import AuthGoogleButton from "../auth/google";
import AuthFacebookButton from "../auth/facebook";
import AuthRegisterButton from "../auth/register";

const WelcomeScreenBackgroundImage = () => {
  return (
    <>
      <div className="md:max-w-[400px]">
        <IonImg
          className="w-full h-full object-cover"
          src="/assets/images/welcome/bg-mask.png"
        />
      </div>
    </>
  );
};

const WelcomeScreenContent = () => {
  return (
    <>
      <div className="text-[28px] font-bold">Welcome to SocialOut</div>
      <div className="text-[16px] font-normal mb-4">
        Create an account ro start enjoying the endless options of events and
        communities.
      </div>
    </>
  );
};

const WelcomeScreen: FC<{ onSubmit?: any }> = ({ onSubmit }) => {
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 2000);

  return (
    <>
      {(loading && <LoadingScreen />) || (
        <IonContent color={"dark"}>
          <div className="flex flex-col md:flex-row gap-5 min-h-full">
            <WelcomeScreenBackgroundImage />
            <div className="px-3 md:max-w-[400px] m-auto">
              <WelcomeScreenContent />
              <AuthAppleButton />
              <AuthGoogleButton />
              <AuthFacebookButton />
              <AuthRegisterButton />
            </div>
          </div>
        </IonContent>
      )}
    </>
  );
};

export default WelcomeScreen;
