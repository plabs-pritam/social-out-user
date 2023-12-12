/* eslint-disable */

import DefaultLayout from "../../layouts/DefaultLayout";
import {
	IonModal,
	IonRouterLink,
	IonSegment,
	IonSegmentButton,
	IonText,
	generateId,
} from "@ionic/react";
import getRandomId from "../../helperFunctions/getRandomId";
import EventsVerticalCard from "../../components/cards/events-vertical-card";
import EventsHorizontalCard from "../../components/cards/events-horizontal-card";
import QuickBall from "../../components/buttons/quickball";
import { useState } from "react";
// import EventCreation from './create event/EventCreation'

const categoriesList = [
	{
		id: getRandomId(),
		categoryName: "✅️ All",
	},
	{
		id: getRandomId(),
		categoryName: "🎶 music & concert",
	},
	{
		id: getRandomId(),
		categoryName: "🥗 Food & nutrition",
	},
	{
		id: getRandomId(),
		categoryName: "✏️ Design",
	},
	{
		id: getRandomId(),
		categoryName: "🎙️ comedy & karoke",
	},
	{
		id: getRandomId(),
		categoryName: "🎭 performing arts",
	},
	{
		id: getRandomId(),
		categoryName: "💻 technology",
	},
	{
		id: getRandomId(),
		categoryName: "🎉 Party Popper",
	},
	{
		id: getRandomId(),
		categoryName: "🩺 health & well-being",
	},
	{
		id: getRandomId(),
		categoryName: "🥋 Martial arts",
	},
	{
		id: getRandomId(),
		categoryName: "⚖️ Law & prejudice",
	},
	{
		id: getRandomId(),
		categoryName: "🎮 Gaming",
	},
	{
		id: getRandomId(),
		categoryName: "🔭 space & technology",
	},
	{
		id: getRandomId(),
		categoryName: "🎫 Movies & fiction",
	},
	{
		id: getRandomId(),
		categoryName: "🏺 Pottery Making",
	},
	{
		id: getRandomId(),
		categoryName: "🤿 scuba Diving",
	},
	{
		id: getRandomId(),
		categoryName: "🎨 Art & culture",
	},
];

const verticalCardList = [
	{
		id: generateId(),
		image: "https:picsum.photos/0",
		title: "TroyBoi India Tour",
		date: "12th Jun, 2023",
		location: "Lamington Road, Mumbai",
		membersProfileImg: [
			"https:picsum.photos/1",
			"https:picsum.photos/2",
			"https:picsum.photos/3",
		],
		totalMembers: "5",
	},
	{
		id: generateId(),
		image: "https:picsum.photos/1",
		title: "TroyBoi India Tour",
		date: "12th Jun, 2023",
		location: "Lamington Road, Mumbai",
		membersProfileImg: [
			"https:picsum.photos/1",
			"https:picsum.photos/2",
			"https:picsum.photos/3",
		],
		totalMembers: "5",
	},
	{
		id: generateId(),
		image: "https:picsum.photos/2",
		title: "TroyBoi India Tour",
		date: "12th Jun, 2023",
		location: "Lamington Road, Mumbai",
		membersProfileImg: [
			"https:picsum.photos/1",
			"https:picsum.photos/2",
			"https:picsum.photos/3",
		],
		totalMembers: "5",
	},
];

const Venue = () => {
	const [showQuickBallList, setShowQuickBallList] = useState(false);
	const [showCreateEvent, setShowCreateEvent] = useState(false);

	const quickBallHandler = () => {
		setShowQuickBallList((prevShowQuickBallList) => !prevShowQuickBallList);
	};

	return (
		<DefaultLayout
			// showDropDown showSearchButton showChatButton showBellButton
			title="Venue">
			{/* overflow */}
			{showQuickBallList && (
				<div className="absolute bg-[#000000cc] top-0 w-full h-full z-[100]"></div>
			)}

			{/* Quickball */}
			<QuickBall
				quickBallHandler={quickBallHandler}
				showQuickBallList={showQuickBallList}
				showGuidelines={() => setShowCreateEvent(true)}
			/>

			<div className="text-black ">
				<IonSegment
					className="tag-selection bg-white sticky top-0 px-2"
					scrollable={true}
					value={categoriesList[0].categoryName}>
					{categoriesList.map((category) => (
						<div key={category.id}>
							<IonSegmentButton
								className="capitalize"
								value={category.categoryName}>
								{category.categoryName}
							</IonSegmentButton>
						</div>
					))}
				</IonSegment>
				<div className="flex justify-between p-4">
					<IonText className="text-lg font-bold">Upcoming Events</IonText>
					<IonRouterLink routerLink="/events/upcoming-events">
						<IonText color="primary">See all</IonText>
					</IonRouterLink>
				</div>
				<div className="flex flex-col gap-3 overflow-auto px-4">
					{/* {verticalCardList.map((cardItem) => (
						<div key={cardItem.id}>
							<IonRouterLink routerLink="/venue/venue-details">
								<EventsVerticalCard {...cardItem} />
							</IonRouterLink>
						</div>
					))} */}
				</div>
			</div>
			{/* <IonModal isOpen={showCreateEvent}>
        <EventCreation
					handleClose={() => setShowCreateEvent(false)} 
				/>
      </IonModal> */}
		</DefaultLayout>
	);
};

export default Venue;
