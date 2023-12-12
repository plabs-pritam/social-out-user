import { IonFooter, IonIcon, IonText, useIonRouter } from "@ionic/react";
import { FC } from "react";

interface PostFooterProps {
  onSelectCommunity: any;
}

const PostFooter: FC<PostFooterProps> = ({ onSelectCommunity }) => {
  const router = useIonRouter();

  return (
    <IonFooter className="flex flex-col items-start">
      <div
        className="flex px-6 py-3 gap-2 items-center w-full bg-[#F7F5F7]"
        onClick={onSelectCommunity}
      >
        <IonIcon
          src="/assets/icons/solar_hand-stars-outline.svg"
          className="text-[#6E0699] text-base"
        />
        <IonText className="text-[#6E0699] text-right text-sm font-medium leading-normal">
          Select Community to upload
        </IonText>
      </div>

      <div className="flex items-center justify-between p-6 w-full">
        <div className="flex items-center gap-6">
          <IonIcon
            src="/assets/icons/solar_gallery-add-outline.svg"
            className="text-[#6E0699] text-2xl"
          />
          <IonIcon
            src="/assets/icons/solar_video-library-outline.svg"
            className="text-[#6E0699] text-2xl"
          />
          <IonIcon
            src="/assets/icons/solar_link-round-outline.svg"
            className="text-[#6E0699] text-2xl"
          />
        </div>

        <div className="flex items-center gap-3">
          <IonText className="text-[#696969] text-right text-sm font-medium leading-normal">
            39/240
          </IonText>
          <button
            className="bg-[#6E0699] py-2 px-4 flex items-center justify-center rounded-[20px] text-white text-sm font-medium leading-normal"
            onClick={() => router.push("/user/home")}
          >
            Next
          </button>
        </div>
      </div>
    </IonFooter>
  );
};

export default PostFooter;
