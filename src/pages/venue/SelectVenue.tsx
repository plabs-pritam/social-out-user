import {
	IonButton,
	IonContent,
	IonIcon,
	IonModal,
	IonRouterLink,
	IonText,
	generateId,
} from "@ionic/react";
import { useState } from "react";
import EventsVerticalCard from "../../components/cards/events-vertical-card";
import VenueDetails from "./VenueDetails";

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

const SelectVenue: React.FC<{ handleClose: any; onForward: any }> = ({
	handleClose,
	onForward,
}) => {
	const [showCreateCommunity, setShowCreateCommunity] = useState(false);

	return (
		<IonContent color="white">
			<div className="text-black p-4 pt-0">
				<div className="sticky top-0 w-[100vw] ml-[-16px] flex gap-3 items-center bg-white p-4">
					<IonIcon
						onClick={handleClose}
						className="text-2xl cursor-pointer"
						icon={"/assets/icons/solar_arrow-left-outline.svg"}
					/>
					<div className="text-[18px] font-bold">Select Venue</div>
				</div>

				{/* Search */}
				<div className="flex items-center pt-[15px] pr-[159px] pb-4 pl-[14px] rounded-xl bg-[#F5F5F5]">
					<div className="flex items-center gap-2">
						<IonIcon
							icon={"/assets/icons/solar_minimalistic-magnifer-outline.svg"}
						/>
						<input
							type="text"
							placeholder="Search for more interests"
							className="bg-transparent outline-none text-[#BFBEBF] text-sm font-normal leading-normal"
						/>
					</div>
				</div>

				<div className="flex flex-col gap-4 mt-6">
					<h1 className="text-lg font-semibold leading-6 not-italic">
						What type of place are you looking for?
					</h1>

					<div
						className="flex items-start gap-4 pb-2 overflow-scroll"
						onClick={onForward}>
						<div className="flex flex-col items-center gap-2">
							<div className="w-[164px] h-[104px] overflow-hidden rounded-xl">
								<img src="/assets/images/venue/hotel.jpg" alt="hotel-img" />
							</div>
							<p className="text-center text-xs font-medium leading-[18px]">
								Hotels
							</p>
						</div>

						<div className="flex flex-col items-center gap-2">
							<div className="w-[164px] h-[104px] overflow-hidden rounded-xl">
								<img src="/assets/images/venue/Museums.jpg" alt="hotel-img" />
							</div>
							<p className="text-center text-xs font-medium leading-[18px]">
								Museum
							</p>
						</div>
					</div>
				</div>

				<div className="flex justify-between items-center py-4">
					<div>
						<IonText className="text-lg font-bold">Venue</IonText>
						<IonText className="text-[#717171] text-sm leading-[18px] font-normal ml-[2px]">
							1,246 results
						</IonText>
					</div>

					<IonRouterLink routerLink="/events/upcoming-events">
						<IonText color="primary">See all</IonText>
					</IonRouterLink>
				</div>

				<div className="flex flex-col gap-3 overflow-auto">
					{/* {verticalCardList.map((cardItem) => (
            <div key={cardItem.id}>
              <IonRouterLink onClick={() => setShowCreateCommunity(true)}>
                <EventsVerticalCard {...cardItem} ratings />
              </IonRouterLink>
            </div>
          ))} */}
				</div>
			</div>

			<IonModal isOpen={showCreateCommunity}>
				<VenueDetails
					heading={"Venue Description"}
					handleClose={() => setShowCreateCommunity(false)}
					onForward={onForward}
				/>
			</IonModal>
		</IonContent>
	);
};

export default SelectVenue;
