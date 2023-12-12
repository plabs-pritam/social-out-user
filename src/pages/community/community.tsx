/** @format */

import DefaultLayout from "../../layouts/DefaultLayout";
import {
	IonAvatar,
	IonButton,
	IonImg,
	IonModal,
	IonRouterLink,
	IonSegment,
	IonSegmentButton,
	IonText,
	generateId,
} from "@ionic/react";
import { verticalCardList } from "../../data/user-data";
import CommunityVerticalCard from "../../components/cards/community-vertical.card";
import EventHeader from "../../components/headers/events-header";
import TrendingCard from "../../components/cards/trending-card";
import Categories from "../../components/categories";
import { useEffect, useState } from "react";
import { getCommunity } from "../../services/community";
import { BASE_URL } from "../../utils/constants";
import { useDispatch } from "react-redux";

const Community = () => {
	const displayLimit = 10;
	const dispatch = useDispatch();
	let [eventId, setEventId] = useState<any>();
	let [showAll, setShowAll] = useState(false);
	let [community, setCommunity] = useState<any>([]);

	useEffect(() => {
		fetchCommunity();
	}, []);

	const fetchCommunity = async () => {
		try {
			let payload: any = {
				type: "all",
				value: "",
				pageno: "1",
				pagesize: "20",
			};

			const response = await getCommunity(payload);
			if (response.ok) {
				community = (response.data as any).data;
				if (community?.length > 0) {
					community = community.map((data: any) => {
						return {
							// id: data.CommunityID,
							id:'fb4d2171-1668-43e0-8faf-a3aab1772278',
							image: `${BASE_URL}/${data.CommImg}`,
							membersProfileImg: [],
							title: data.Name,
							members: 0,
						};
					});
					setCommunity(JSON.parse(JSON.stringify(community)));
				}
			}
		} catch (error: any) {
			console.log("Error occurred while getting event", error.message);
		}
	};

	const handleCommunityNavigation = () => {};

	const followCommunity = () => {
		let payload = {
			UserCommunityID: "00000000-0000-0000-0000-000000000000",
			userid: 0,
			communityID: "fb4d2171-1668-43e0-8faf-a3aab1772278",
			createdby: "string",
			type: "string",
		};
	};

	return (
		<DefaultLayout
			paddingBottom
			showChatButton
			showBellButton
			showSearchButton
			title="Communities">
			<div className="text-black relative">
				<EventHeader eventName="Trending Now" />
				{/* <Categories /> */}
				<EventHeader eventName="Community Spotlights" />
				<div className="flex gap-3 overflow-auto px-4">
					{community.map((data: any) => (
						<div>
							<IonRouterLink routerLink="/community-detail">
								<CommunityVerticalCard members={"12.13k members"} {...data} />
							</IonRouterLink>
						</div>
					))}
				</div>

				{/*  Trending globally */}
				<EventHeader
					eventName="🌎 Trending globally"
					routerLink="/upcoming-events"
				/>
				<div className="flex gap-3 p-4 pt-0 overflow-auto no-scrollbar">
					{community
						.slice(0, showAll ? community.length : displayLimit)
						.map((data: any) => (
							<div>
								<TrendingCard members={"12.13k members"} {...data} />
							</div>
						))}
				</div>

				{/* 🏆 Top Communities */}
				<EventHeader eventName="🏆 Top Communities" routerLink=" " />
				<div className="flex items-center justify-center px-4 mb-5">
					<div className="flex flex-wrap w-full ml-2 items-start gap-4">
						<div className="flex h-[100px] w-[164px] relative items-center justify-center flex-shrink-0 rounded-lg overflow-hidden">
							<img src="/assets/images/post.jpg" alt="" />
							<p className="text-white text-sm font-medium leading-4 absolute">
								MUSIC
							</p>
						</div>
						<div className="flex h-[100px] w-[164px] relative items-center justify-center flex-shrink-0 rounded-lg overflow-hidden">
							<img src="/assets/images/venue/hotel.jpg" alt="" />
							<p className="text-white text-sm font-medium leading-4 absolute">
								TREKS
							</p>
						</div>
					</div>
				</div>
			</div>
		</DefaultLayout>
	);
};

export default Community;
