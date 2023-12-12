import { IonIcon } from "@ionic/react";

type Props = {};

const CreatePostCard = (props: Props) => {
  return (
    <div className="rounded-[24px] text-black bg-white border">
      <div className="mx-4 mt-4 mb-[93px] flex flex-col gap-3 items-start">
        <div className="flex justify-between items-center w-full">
          <div className="bg-[#d5d5d520] flex items-start p-[10px] gap-[10px] rounded-[1000px]">
            <IonIcon
              size="15px"
              icon={"/assets/icons/Vector_plus.svg"}
            />
          </div>

          <div className="flex items-start p-[10px] gap-[10px] rounded-[1000px]">
            <IonIcon
              icon={"/assets/icons/three-dots.svg"}
              className="w-6 h-6"
            />
          </div>
        </div>

        <div className="flex flex-col items-start gap-1">
          <h1 className="text-[#2A2A2A] text-2xl font-bold leading-normal">
            It’s time to make your first post come live!
          </h1>
          <p className="text-[#898989] text-sm font-normal leading-[18px]">
            Now that you’ve created your community start things off right by
            making your first post
          </p>
        </div>
      </div>
    </div>
  );
};

export default CreatePostCard;
