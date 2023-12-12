import { IonIcon, IonImg, IonText, useIonRouter } from "@ionic/react";

import { FC } from "react";

interface props {
  // id?: string
  image: string;
  title: string;
  date?: string;
  location?: string;
  ratings?: string;
  members?: string;
  price?: string;
}

const EventsHorizontalCard: FC<props> = ({
  // id,
  image,
  title,
  date,
  location,
  ratings,
  price,
  members,
}) => {
  const ionRouter = useIonRouter();
  return (
    <div className="flex items-center gap-3 rounded-[24px] text-black bg-white border w-full p-2">
      <div>
        <IonImg
          className="rounded-[12px] overflow-hidden w-[104px] h-[104px] object-cover"
          src={image}
          alt=""
        />
      </div>
      <div>
        <div className="text-lg font-medium mb-1">{title}</div>
        <div className="flex gap-3 flex-wrap">
          <div className="me-auto">
            {ratings && (
              <IonText
                className="text-sm flex gap-1 items-center"
                color="light"
              >
                <IonIcon
                  className="text-lg"
                  icon="/assets/icons/solar_star-outline.svg"
                />
                {ratings}
              </IonText>
            )}
            {members && (
              <IonText
                className="text-sm flex gap-1 items-center"
                color="light"
              >
                <IonIcon
                  className="text-lg"
                  icon="/assets/icons/solar_user-outline.svg"
                />
                {members}
              </IonText>
            )}
            {date && (
              <IonText
                className="text-sm flex gap-1 items-center"
                color="light"
              >
                <IonIcon
                  className="text-lg"
                  icon="/assets/icons/solar_calendar-mark-bold.svg"
                />
                {date}
              </IonText>
            )}
            {location && (
              <IonText
                className="text-sm flex gap-1 items-center"
                color="light"
              >
                <IonIcon
                  className="text-lg"
                  icon="/assets/icons/solar_map-point-bold.svg"
                />
                {location}
              </IonText>
            )}
            {price && (
              <IonText
                className="text-sm flex gap-1 items-center"
                color="light"
              >
                <IonIcon
                  className="text-lg"
                  icon="/assets/icons/solar_ticker-star-bold.svg"
                />
                {price}
              </IonText>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventsHorizontalCard;
