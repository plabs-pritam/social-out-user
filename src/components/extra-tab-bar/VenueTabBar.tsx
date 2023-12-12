/** @format */

import { IonIcon, IonTabBar, IonTabButton } from "@ionic/react";
import { FC } from "react";

const tabs = [
  {
    tab: "dashboard",
    href: "/venue-dashboard",
    icon: "/assets/icons/solar_widget-outline.svg",
  },
  {
    tab: "events",
    href: "/events",
    icon: "/assets/icons/solar_golf-outline.svg",
  },
  {
    tab: "venue",
    href: "/venue",
    icon: "/assets/icons/solar_buildings-outline.svg",
  },
  {
    tab: "community",
    href: "/community",
    icon: "/assets/icons/solar_hand-stars-outline.svg",
  },
  {
    tab: "profile",
    href: "/profile",
    icon: "/assets/icons/solar_user-circle-linear.svg",
  },
];

const VenueTabBar = () => {
  return (
    <IonTabBar
      className="flex gap-3 rounded-[24px] sticky bottom-5 left-0 right-0 py-2 px-3 m-5"
      slot="bottom"
    >
      {tabs.map((value) => (
        <IonTabButton
          key={value.tab}
          className=" rounded-full h-10 [&.tab-selected]:bg-[var(--ion-color-primary)] text-neutral-500 [&.tab-selected]:text-white"
          tab={value.tab}
          href={value.href}
        >
          <IonIcon className="h-7" icon={value.icon} />
        </IonTabButton>
      ))}
    </IonTabBar>
  );
};

export default VenueTabBar;
