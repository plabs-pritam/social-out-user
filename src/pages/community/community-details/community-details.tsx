/** @format */

import { FC, useEffect, useRef, useState } from "react";
import DefaultLayout from "../../../layouts/DefaultLayout";
import {
  IonAvatar,
  IonButton,
  IonIcon,
  IonImg,
  IonNav,
  IonText,
} from "@ionic/react";
import { IonLabel, IonSegment, IonSegmentButton } from "@ionic/react";
import PostsTab from "../user/posts-tab";
import DescriptionTab from "./description-tab";
import EventsTab from "./events-tab";
import { Swiper, SwiperSlide } from "swiper/react";

const tabs = ["posts", "description", "events"];

const CommunityDetails: FC<any> = (props) => {
  const swiperRef = useRef<any>(null);
  const [activeTab, setActiveTab] = useState<string>(tabs[0]);

  useEffect(() => {
    if (swiperRef.current) {
      changeSlide(tabs.indexOf(activeTab));
    }
  }, [activeTab]);

  const changeSlide = (slideIndex: number) => {
    const swiper = swiperRef.current.swiper;
    swiper.slideTo(slideIndex, 100);
  };

  const onSlideChange = (swiper: any) => {
    setActiveTab(tabs[swiper.activeIndex]);
  };

  return (
    <DefaultLayout
      showBackButton
      title="Community Description"
      showShareButton
      hideTabBar
    >
      <div className="flex flex-col gap-5 p-4">
        <IonImg
          className="object-cover h-[230px] rounded-xl overflow-hidden mb-4"
          src="/assets/images/community/Rectangle 130.png"
          alt="community image"
        />
        <div className="flex flex-col gap-[11px] items-center">
          <div className="flex justify-between w-full items-center">
            <div className="me-auto">
              <IonText color="dark" className="block text-xl font-semibold">
                Design Junk
              </IonText>
            </div>

            <div>
              <IonButton
                shape="round"
                fill="clear"
                className="capitalize font-bold rounded-full bg-[#F9ECFE]"
              >
                Follow
              </IonButton>
            </div>
          </div>

          <div className="flex gap-2 w-full items-center">
            <div className="flex justify-center items-center">
              <IonAvatar className="w-[32px] h-[32px]">
                <IonImg
                  className="h-full object-cover"
                  src="/assets/images/community/Rectangle 130.png"
                />
              </IonAvatar>
              <IonAvatar className="w-[32px] h-[32px] ml-[-9px]">
                <IonImg
                  className="h-full object-cover"
                  src="/assets/images/community/Rectangle 130.png"
                />
              </IonAvatar>
              <IonAvatar className="w-[32px] h-[32px] ml-[-9px]">
                <IonImg
                  className="h-full object-cover"
                  src="/assets/images/community/Rectangle 130.png"
                />
              </IonAvatar>
            </div>

            <p className="text-[#898989] text-[13px] leading-normal font-normal">
              12.1k people
            </p>
          </div>
        </div>
        {/* <IonSegment value={activeTab} onIonChange={activeTabsHandler}> */}
        <IonSegment value={activeTab}>
          {tabs.map((tab) => (
            <IonSegmentButton key={tab} value={tab}>
              <IonLabel className="capitalize">{tab}</IonLabel>
            </IonSegmentButton>
          ))}
        </IonSegment>
        {/* {activeTab === tabs[0] && <PostsTab />}
				{activeTab === tabs[1] && <DescriptionTab />}
				{activeTab === tabs[2] && <EventsTab />} */}
        <IonSegment
          scrollable={true}
          value={activeTab}
          onIonChange={(e: any) => setActiveTab(e.target.value)}
          className="ion-padding-horizontal"
        >
          {tabs.map((item, index) => (
            <IonSegmentButton key={index} value={item}>
              <IonText className="px-3">{item}</IonText>
            </IonSegmentButton>
          ))}
        </IonSegment>
        <Swiper
          ref={swiperRef}
          speed={500}
          className="flex-1 [&_*]:text-start w-full"
          onSlideChange={onSlideChange}
        >
          <SwiperSlide></SwiperSlide>
          <SwiperSlide></SwiperSlide>
          <SwiperSlide></SwiperSlide>
          <SwiperSlide></SwiperSlide>
          <SwiperSlide></SwiperSlide>
        </Swiper>
      </div>
    </DefaultLayout>
  );
};

export default CommunityDetails;
