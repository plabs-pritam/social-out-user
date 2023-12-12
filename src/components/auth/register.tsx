import { FC } from "react";
import { useDispatch } from "react-redux";
import { useToast } from "@agney/ir-toast";
import { IonButton, IonIcon, useIonRouter } from "@ionic/react";

const AuthRegisterButton: FC = () => {
  const toast = useToast();
  const router = useIonRouter();
  const dispatch = useDispatch();

  return (
    <div>
      <IonButton expand="block" color={"tertiary"}>
        <IonIcon
          className="me-2"
          icon="/assets/images/welcome/solar_letter-bold.svg"
        />
        Continue with Email
      </IonButton>
    </div>
  );
};

export default AuthRegisterButton;
