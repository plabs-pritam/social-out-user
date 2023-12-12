import UpcomingEvent from "./upcoming";
import RecentlyEvent from "./recently";
import TrendingEvent from "./trending";
import SuggestedEvent from "./suggested";
import ExperienceEvent from "./experience";
import Categories from "../../components/categories";
import DefaultLayout from "../../layouts/DefaultLayout";

const Events = () => {
	return (
		<DefaultLayout
			showDropDown
			paddingBottom
			showChatButton
			showBellButton
			showSearchButton
			onClickSearch="/event-search">
			{/* <Categories /> */}
			<UpcomingEvent />
			<RecentlyEvent />
			<TrendingEvent />
			<ExperienceEvent />
			<SuggestedEvent />
		</DefaultLayout>
	);
};

export default Events;
