import { IonAvatar, IonButton, IonContent, IonImg, IonText } from "@ionic/react";
import HrLine from "../../../components/hr-line";
import AchievementCard from "../../../components/cards/achievement-card";

const AchievementTab = () => {
  return (
    <IonContent className="ion-padding">
      <div className="flex flex-col gap-2 items-center justify-center ion-padding-vertical">
        <div className="flex justify-center items-center rounded-full p-5 border border-[#FF8A00] bg-[#FFF6ED]">
          <img
            src="/assets/icons/solar_medal-ribbons-star-bold.svg"
            alt=""
            className="h-[45px] w-full"
          />
        </div>

        <div className="flex flex-col items-center justify-center gap-1">
          <IonText className="text-black text-center text-[20px] font-medium leading-6">
            500 Points
          </IonText>
          <IonText className="text-[#A19EA2] text-sm font-normal leading-[18px]">
            Congratulations you have earned Pioneer Badge!
          </IonText>
        </div>
      </div>

      <HrLine />

      <div className="flex flex-col items-start gap-4 ion-padding-vertical">
        <AchievementCard />
        <AchievementCard />
      </div>
    </IonContent>
  );
};

export default AchievementTab;


{/* <div className='flex flex-col justify-center items-center gap-2'>
<div >
<IonIcon  className='w-80 h-40' icon="/assets/images/ribbon.svg" size="large"/>
</div>

</div>
<div className='inline-flex flex-col items-start gap-4 mt-4 '>
<div className='flex justify-between items-center'>
    <div className='flex items-center gap-2 flex-shrink-0'>
        <div className='flex justify-center items-center flex-shrink-0 px-2 py-2 
        border border-solid border-purple-700 border-opacity-25 rounded-full bg-purple-100'>
            <img src="/public/assets/images/solar_medal-ribbons-star-bold.svg" alt="ribbon" />
        </div>
        <div className='flex flex-col items-start gap-1 flex-1'>
           <img src="/public/assets/images/starcontributor.svg" alt="" />
        </div>
        <p className='text-black font-sans font-bold text-sm leading-normal'>250 points</p>
    </div>
    <div></div>
</div>

<div className='flex justify-between items-center'>
    <div className='flex items-center gap-2 flex-shrink-0'>
        <div className='flex justify-center items-center flex-shrink-0 px-2 py-2 
        border border-solid border-orange-500 border-opacity-50 rounded-full bg-white-100'>
            <img src="/public/assets/images/solar_medal-ribbons-star-bold-yellow.svg" alt="ribbon" />
        </div>
        <div className='flex flex-col items-start gap-1 flex-1'>
           <img src="/public/assets/images/pioneer.svg" alt="" />
        </div>
        <p className='text-black font-sans font-bold text-sm leading-normal'>250 points</p>
    </div>
    <div></div>
</div>

<div className='flex justify-between items-center'>
    <div className='flex items-center gap-2 flex-shrink-0'>
        <div className='flex justify-center items-center flex-shrink-0 px-2 py-2 
        border border-solid border-orange-500 border-opacity-50 rounded-full bg-white-100'>
            <img src="/public/assets/images/solar_medal-ribbons-star-bold-yellow.svg" alt="ribbon" />
        </div>
        <div className='flex flex-col items-start gap-1 flex-1'>
           <img src="/public/assets/images/starcontributor.svg" alt="" />
        </div>
        <p className='text-black font-sans font-bold text-sm leading-normal mx-8'>1/10</p>
    </div>
    <div></div>
</div>
</div> */}