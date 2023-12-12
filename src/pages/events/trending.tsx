import { IonRouterLink } from "@ionic/react";
import EventHeader from "../../components/headers/events-header";
import { verticalCardList } from "../../data/user-data";
import EventsVerticalCard from "../../components/cards/events-vertical-card";
import { getEvents } from "../../services/event";
import { useEffect, useState } from "react";
import { BASE_URL } from "../../utils/constants";
import { fetchEvent } from "../../data/event";

const TrendingEvent = () => {
	let [trendingEvents, setTrendingEvents] = useState<any>([]);

	useEffect(() => {
		fetchEvent(setTrendingEvents, "upcoming");
	}, []);

	return (
		<div>
			<EventHeader
				eventName="Trending Events"
				icon="/assets/icons/solar_fire-outline.svg"
				iconBg="bg-[#FFEAEA]"
				routerLink="/upcoming-events"
			/>
			<div className="flex gap-3 overflow-auto scroll-m-0 px-4 no-scrollbar">
				{trendingEvents.map((event: any) => (
					<div key={event.id} className="flex-shrink-0 min-w-[280px]">
						<IonRouterLink routerLink="/event-details">
							<EventsVerticalCard {...event} />
						</IonRouterLink>
					</div>
				))}
			</div>
		</div>
	);
};

export default TrendingEvent;
