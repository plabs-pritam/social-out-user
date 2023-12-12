/** @format */

import { IonIcon, IonTabBar, IonTabButton } from "@ionic/react";
import { FC } from "react";
import VenueTabBar from "./VenueTabBar";
import ArtistTabBar from "./ArtistTabbar";
import { useLocation } from "react-router";

const tabs = [
  {
    tab: "dashboard",
    href: "/artist-dashboard",
    icon: "/assets/icons/solar_widget-outline.svg",
    activeicon: "/assets/icons/solar_widget-bold.svg",
  },
  {
    tab: "events",
    href: "/artist-events",
    icon: "/assets/icons/solar_golf-outline.svg",
    activeicon: "/assets/icons/solar_golf-bold.svg",
  },
  {
    tab: "profile",
    href: "/profile",
    icon: "/assets/icons/solar_user-circle-linear.svg",
    activeicon: "/assets/icons/solar_user-outline.svg",
  },
];

const TabBar = ({id}: {id: string}) => {

  const location = useLocation();

  if (location.pathname === '/venue-dashboard') {
    id = "venue"
  } else if (location.pathname === '/artist-dashboard') {
    id = "artist"
  } else {}

  return (
    <>
      {id === "artist" && <ArtistTabBar />}
      {id === "venue" && <VenueTabBar />}
    </>
  );
};

export default TabBar;
