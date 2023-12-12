import { IonRouterLink } from "@ionic/react";
import EventHeader from "../../components/headers/events-header";
import { verticalCardList } from "../../data/user-data";
import EventsVerticalCard from "../../components/cards/events-vertical-card";
import { useAppSelector } from "../../store/store";
import { useEffect, useState } from "react";
import { getEvents } from "../../services/event";
import { fetchEvent } from "../../data/event";

const SuggestedEvent = () => {
	let { user } = useAppSelector((state) => state.user);
	let [suggestedEvents, setSuggestedEvents] = useState<any>([]);

	useEffect(() => {
		fetchEvent(setSuggestedEvents, "upcoming");
	}, []);

	return (
		<div>
			<EventHeader
				iconBg="bg-[#FFEAF9]"
				eventName="Suggested Events"
				routerLink="/upcoming-events"
				icon="/assets/icons/star-red-outline.svg"
			/>
			<div className="flex gap-3 overflow-auto scroll-m-0 px-4 no-scrollbar">
				{suggestedEvents.map((cardItem: any) => (
					<div key={cardItem.id} className="flex-shrink-0 min-w-[280px]">
						<IonRouterLink routerLink="/event-details">
							<EventsVerticalCard {...cardItem} />
						</IonRouterLink>
					</div>
				))}
			</div>
		</div>
	);
};

export default SuggestedEvent;
