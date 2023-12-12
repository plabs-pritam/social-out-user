import { FC } from "react";
import { useDispatch } from "react-redux";
import { useToast } from "@agney/ir-toast";
import { IonButton, IonIcon, useIonRouter } from "@ionic/react";

const AuthAppleButton: FC = () => {
  const toast = useToast();
  const router = useIonRouter();
  const dispatch = useDispatch();

  return (
    <div>
      <IonButton expand="block" color={"tertiary"} disabled>
        <IonIcon className="me-2" icon="/assets/icons/logoColorApple.svg" />
        Continue with Facebook
      </IonButton>
    </div>
  );
};

export default AuthAppleButton;
