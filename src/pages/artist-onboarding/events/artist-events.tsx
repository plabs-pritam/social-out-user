import { FC } from "react";
import { useLocation } from "react-router";
import DefaultLayout from "../../../layouts/DefaultLayout";

const ArtistEvents: FC = () => {
  const location = useLocation();

  let id;

  if (location.pathname === "/venue-events") {
    id = "venue";
  } else if (location.pathname === "/artist-events") {
    id = "artist";
  } else {
  }

  return <DefaultLayout>artist events</DefaultLayout>;
};

export default ArtistEvents;
