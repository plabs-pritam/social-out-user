/** @format */

import { FC, useState } from "react";
import DefaultLayout from "../../layouts/DefaultLayout";
import { IonAvatar, IonButton, IonIcon, IonImg, IonModal, IonText } from "@ionic/react";
import HostEventVenue from "./HostEventVenue";
import { useLocation } from "react-router";

const VenueDetails: React.FC<{ handleClose?: any; onForward: any; heading: string }> = ({
  handleClose,
  onForward,
	heading = 'Venue Description'
}) => {

  const [ showHostEvent, setShowHostEvent] = useState(false);

  const location = useLocation();

  if (location.pathname === '/venue/venue-details') {
    onForward = () => {setShowHostEvent(true)}
  } else {
    onForward
  }

  return (
    <DefaultLayout
      showBackButton
      title={heading}
      showShareButton
      hideTabBar
      showChatButton
    >
      <div className="flex flex-col gap-5 p-4">
        <IonImg
          className="object-cover h-[230px] rounded-xl overflow-hidden mb-4"
          src="/assets/images/venue/hotel.jpg"
        />
        <IonText className="text-xl font-bold text-black">Grand Event Center</IonText>
        <div className="flex gap-3">
          <div>
            <IonAvatar className="w-[40px] h-[40px] bg-[#F9ECFE] grid place-items-center">
              <IonIcon
                className="h-full object-cover text-[#6E0699]"
                icon={"/assets/icons/solar_map-point-outline.svg"}
              />
            </IonAvatar>
          </div>
          <div>
            <IonText class="block font-bold text-black">
              Grand Park, New York City, US
            </IonText>
            <IonText
              className="block text-xs text-[#898989] font-normal leading-[18px]"
              color="light"
            >
              Grand city, St. 100, New Yor, United States
            </IonText>
          </div>
        </div>
        <div className="flex gap-3">
          <div>
            <IonAvatar className="w-[40px] h-[40px] bg-[#F9ECFE] grid place-items-center">
              <IonIcon
                className="h-full object-cover text-[#6E0699]"
                icon={"/assets/icons/solar_dollar-outline.svg"}
              />
            </IonAvatar>
          </div>
          <div>
            <IonText class="block font-bold text-black">$120/day</IonText>
            <IonText
              className="block text-xs text-[#898989] font-normal leading-[18px]"
              color="light"
            >
              Ticket price depends on package
            </IonText>
          </div>
        </div>

        <div className="border-b" />
        <div>
          <IonText className="block text-xl font-bold mb-2 text-black">
            About Event
          </IonText>
          <IonText className="block" color="light">
            Pellentesque porttitor libero quis lorem efficitur tincidunt. Nulla
            facilisi. Pellentesque ac tellus semper, mollis est viverra,
            accumsan felis
            <IonText color="primary">&nbsp;Read more...</IonText>
          </IonText>
        </div>

        <div className="border-b" />
        {/* Ratings */}
        <div className="flex flex-col items-start gap-[15px]">
          <h1 className="text-[#010101] font-semibold text-lg leading-6">
            Ratings and Review
          </h1>
          <div className="flex items-center gap-[124px]">
            <div className="flex flex-col items-start gap-1">
              <div className="flex items-center gap-2">
                <h1 className="text-[#000] font-semibold text-[28px] leading-8">
                  4.5
                </h1>
                <div className="flex items-start gap-1">
                  <IonIcon
                    icon="/assets/icons/solar_star-bold.svg"
                    className="text-[#6E0699] w-6 h-6"
                  />
                  <IonIcon
                    icon="/assets/icons/solar_star-bold.svg"
                    className="text-[#6E0699] w-6 h-6"
                  />
                  <IonIcon
                    icon="/assets/icons/solar_star-bold.svg"
                    className="text-[#6E0699] w-6 h-6"
                  />
                  <IonIcon
                    icon="/assets/icons/solar_star-bold.svg"
                    className="text-[#6E0699] w-6 h-6"
                  />
                  <IonIcon
                    icon="/assets/icons/solar_star-outline.svg"
                    className="text-[#6E0699] w-6 h-6"
                  />
                </div>
              </div>
              <p className="text-[#717171] text-sm font-normal leading-[18px]">
                24 total reviews
              </p>
            </div>

            <IonIcon
              icon="/assets/icons/right-arrow.svg"
              className="w-8 h-8"
            />
          </div>
        </div>

        <div className="border-b" />
        {/* Venue Availability */}
        <div className="flex items-center justify-between">
          <div className="flex flex-col items-start gap-3">
            <h1 className="text-[#010101] font-semibold text-lg leading-6">
              Venue Availability
            </h1>
            <p className="text-[#717171] text-sm font-normal leading-[18px]">
              12 August - 21 August
            </p>
          </div>
        </div>

        <div className="border-b" />
        <IonText className="block text-xl font-bold text-black">Gallery</IonText>
        <div className="grid gap-3 grid-cols-3">
          <div>
            <IonImg
              className="rounded-3xl overflow-hidden aspect-square object-cover"
              src="https://picsum.photos/100"
            />
          </div>
          <div>
            <IonImg
              className="rounded-3xl overflow-hidden aspect-square object-cover"
              src="https://picsum.photos/100"
            />
          </div>
          <div className="relative grid place-items-center">
            <span className="absolute text-white ">+124</span>
            <IonImg
              className="rounded-3xl overflow-hidden w-full aspect-square object-cover"
              src="https://picsum.photos/100"
            />
          </div>
        </div>

        <div className="border-b" />

        {/* location */}
        <IonText className="block text-xl font-bold text-black">Location</IonText>
        <div className="border aspect-video rounded-3xl relative overflow-hidden">
          <img src="/assets/images/venue/map.png" alt="map" />
          <IonIcon
            icon="/assets/icons/map-marker.svg"
            className="absolute top-[28px] left-[102px] h-10 w-10 "
          />
        </div>
        <IonButton
          shape="round"
          fill="clear"
          size="large"
          onClick={onForward}
          className="capitalize w-full mt-3 bg-[var(--ion-color-primary)] text-white rounded-lg"
        >
          Confirm
        </IonButton>
      </div>
      <IonModal isOpen={showHostEvent}>
        <HostEventVenue handleClose={() => setShowHostEvent(false)} />
      </IonModal>
    </DefaultLayout>
  );
};

export default VenueDetails;
