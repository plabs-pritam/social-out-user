/** @format */

import { IonIcon, IonTabBar, IonTabButton } from "@ionic/react";
import { FC } from "react";
import ArtistTabBar from "../extra-tab-bar/ArtistTabbar";
import VenueTabBar from "../extra-tab-bar/VenueTabBar";

const tabs = [
  {
    tab: "home",
    href: "/user/home",
    icon: "/assets/icons/solar_home-angle-2-linear.svg",
  },
  {
    tab: "events",
    href: "/user/events",
    icon: "/assets/icons/solar_golf-outline.svg",
  },
  {
    tab: "newpost",
    href: "/user/new-post",
    icon: "/assets/icons/solar_add-circle-linear.svg",
  },
  {
    tab: "community",
    href: "/user/community",
    icon: "/assets/icons/solar_hand-stars-outline.svg",
  },
  {
    tab: "profile",
    href: "/user/profile",
    icon: "/assets/icons/solar_user-circle-linear.svg",
  },
];

// const TabBar = ({ id = "artist" }: { id: string }) => {
const TabBar = () => {
  let id = "";

  switch (location.pathname) {
    case "/venue-dashboard":
      id = "venue";
      break;
    case "/artist-dashboard":
      id = "artist";
      break;
    default:
      if (location.pathname.includes("/user")) {
        id = "user";
      }
      break;
  }

  return (
    <>
      {id === "user" && (
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
      )}

      {/* Another Tabbars */}
      {id === "artist" && <ArtistTabBar />}
      {id === "venue" && <VenueTabBar />}
    </>
  );
};

export default TabBar;
