import { IonRouterLink } from "@ionic/react";
import { verticalCardList } from "../../data/user-data";
import RecentCard from "../../components/cards/recent-card";
import EventHeader from "../../components/headers/events-header";
import { useEffect, useState } from "react";
import { getEvents } from "../../services/event";
import { useAppSelector } from "../../store/store";
import { fetchEvent } from "../../data/event";

const RecentlyEvent = () => {
	let { user } = useAppSelector((state) => state.user);
	let [recentlyEvents, setRecentlyEvents] = useState<any>([]);

	useEffect(() => {
		fetchEvent(setRecentlyEvents, "recentview");
	}, []);

	return (
		<div>
			{recentlyEvents?.length > 0 && (
				<div>
					<EventHeader
						iconBg="bg-[#FBFFEA]"
						eventName="Recently Viewed"
						icon="/assets/icons/history-yellow-outline.svg"
					/>
					<div className="flex gap-3 overflow-auto scroll-m-0 px-4 no-scrollbar">
						{recentlyEvents.map((cardItem: any) => (
							<div key={cardItem.id} className="flex-shrink-0 min-w-[280px]">
								<IonRouterLink routerLink="/event-details">
									<RecentCard {...cardItem} />
								</IonRouterLink>
							</div>
						))}
					</div>
				</div>
			)}
		</div>
	);
};

export default RecentlyEvent;
