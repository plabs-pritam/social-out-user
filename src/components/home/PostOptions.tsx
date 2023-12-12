import { IonContent, IonImg } from "@ionic/react";

function PostOptions({ closePostOption }: { closePostOption: any }) {
  return (
    <IonContent onMouseLeave={closePostOption}>
      <div className="flex py-3 px-4 items-center gap-2 mt-[35px]">
        <IonImg src="/assets/icons/solar_chart-2-outline.svg" />
        <p className="text-base font-medium leading-normal text-black">
          Insights
        </p>
      </div>
      <div className="flex py-3 px-4 items-center gap-2">
        <IonImg src="/assets/icons/edit-pen.svg" />
        <p className="text-base font-medium leading-normal text-black">
          Edit
        </p>
      </div>
      <div className="flex py-3 px-4 items-center gap-2">
        <IonImg src="/assets/icons/delete-red.svg" />
        <p className="text-base font-medium leading-normal text-[#FF0000]">
          Delete Post
        </p>
      </div>
    </IonContent>
  );
}

export default PostOptions;
