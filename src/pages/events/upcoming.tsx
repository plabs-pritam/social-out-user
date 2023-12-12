import { useEffect, useState } from "react";
import { IonRouterLink, useIonRouter } from "@ionic/react";
import { getEvents } from "../../services/event";
import EventHeader from "../../components/headers/events-header";
import EventsVerticalCard from "../../components/cards/events-vertical-card";
import { useDispatch } from "react-redux";
import { setEventId } from "../../store/reducer/event";
import { BASE_URL } from "../../utils/constants";
import { fetchEvent } from "../../data/event";

const UpcomingEvent = () => {
	let dispatch = useDispatch();
	let router = useIonRouter();
	let [upcomingEvents, setUpcomingEvents] = useState<any>([]);

	useEffect(() => {
		fetchEvent(setUpcomingEvents, "upcoming");
	}, []);

	const handleNavigation = (eventId: string) => {
		dispatch(setEventId(eventId));
		router.push("/event-details", "forward", "push");
	};

	return (
		<>
			<EventHeader
				iconBg="bg-[#EAFFF4]"
				eventName="Upcoming Events"
				routerLink="/upcoming-events"
				icon="/assets/icons/calendar-green-mark-outline.svg"
			/>
			<div className="flex gap-3 overflow-auto scroll-m-0 px-4 no-scrollbar">
				{upcomingEvents?.map((cardItem: any) => (
					<div key={cardItem?.id} className="flex-shrink-0 min-w-[280px]">
						<div onClick={() => handleNavigation(cardItem?.id)}>
							<EventsVerticalCard {...cardItem} />
						</div>
					</div>
				))}
			</div>
		</>
	);
};

export default UpcomingEvent;
