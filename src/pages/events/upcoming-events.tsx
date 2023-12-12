import { useEffect, useState } from "react";
import { fetchEvent } from "../../data/event";
import { useAppSelector } from "../../store/store";
import { categoriesList } from "../../data/user-data";
import SeeAllList from "../../components/pages/see-all-list";

const UpcomingEvents = () => {
	let { header } = useAppSelector((state) => state.uiController);
	let [upcomingEvents, setUpcomingEvents] = useState<any>([]);

	useEffect(() => {
		fetchEvent(setUpcomingEvents, "upcoming");
	}, []);

	return (
		<SeeAllList
			title={header || "N/A"}
			cardLink="/event-details"
			categoriesList={categoriesList}
			verticalCardList={upcomingEvents}
		/>
	);
};

export default UpcomingEvents;
