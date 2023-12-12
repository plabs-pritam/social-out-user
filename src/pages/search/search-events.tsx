import { IonIcon, IonRouterLink, useIonRouter } from "@ionic/react";
import EventsHorizontalCard from "../../components/cards/events-horizontal-card";
import SearchInput from "../../components/input/search-input";
import { verticalCardList } from "../../data/user-data";

const SearchEvents = () => {
  const router = useIonRouter();
  return (
    <div className="flex flex-col gap-4 items-start p-4">
      <div className="flex items-center gap-3 w-full">
        <IonIcon
          slot="icon-only"
          icon="/assets/icons/solar_arrow-left-outline.svg"
          className="text-[#222] text-2xl"
          onClick={() => router.goBack()}
        />
        <SearchInput placeholder="Music" />
      </div>
      <div className="flex flex-col gap-3 items-start w-full">
        {verticalCardList.map((card) => (
          <IonRouterLink key={card.id} routerLink="/event-details" className="w-full">
            <EventsHorizontalCard {...card} />
          </IonRouterLink>
        ))}
      </div>
    </div>
  );
};

export default SearchEvents;
