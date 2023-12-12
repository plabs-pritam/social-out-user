import { IonContent, IonRouterLink, IonText } from "@ionic/react";
import EventsHorizontalCard from "../../../components/cards/events-horizontal-card";
import { verticalCardList } from "../../../data/user-data";

const EventsTab = () => {
  return (
    <IonContent className="ion-padding">
      <div className="flex items-center justify-between">
        <div className="flex gap-[10px] items-center">
          <IonText className="text-lg text-[#010101] font-semibold">
            Upcoming Events
          </IonText>
        </div>

        <IonRouterLink routerLink={"/user/events"}>
          <IonText color="primary">View all</IonText>
        </IonRouterLink>
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        {verticalCardList.map((carditem) => (
          <EventsHorizontalCard key={carditem.id} {...carditem} />
        ))}
      </div>
    </IonContent>
  );
};

export default EventsTab;
