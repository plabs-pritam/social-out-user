/** @format */

import { FC, useEffect, useRef, useState } from "react";
import DefaultLayout from "../../../layouts/DefaultLayout";
import {
	IonAvatar,
	IonButton,
	IonIcon,
	IonImg,
	IonModal,
	IonNav,
	IonText,
} from "@ionic/react";
import { IonLabel, IonSegment, IonSegmentButton } from "@ionic/react";
import PostsTab from "./posts-tab";
import DescriptionTab from "../community-details/description-tab";
import EventsTab from "../community-details/events-tab";
import AboutCommunity from "./about-tab";
import PeopleTab from "./people-tab";
import AchievementTab from "./achievement-tab";
import LeaderboardTab from "./leaderboard-tab";
import EventOptions from "../../../components/events/event-options";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "@ionic/react/css/ionic-swiper.css";

const tabs = [
	"About",
	"Posts",
	"Events",
	"Admin Posts",
	"People",
	"Achievements",
	"Leaderboard",
];

const UserCommunityDetails = () => {
	const swiperRef = useRef<any>(null);
	const [activeTab, setActiveTab] = useState<string>(tabs[0]);

	useEffect(() => {
		if (swiperRef.current) {
			changeSlide(tabs.indexOf(activeTab));
		}
	}, [activeTab]);

	const changeSlide = (slideIndex: number) => {
		const swiper = swiperRef.current.swiper;
		swiper.slideTo(slideIndex, 100);
	};

	const onSlideChange = (swiper: any) => {
		setActiveTab(tabs[swiper.activeIndex]);
	};

	return (
		<DefaultLayout
			showBackButton
			title="Design Junk"
			showDots
			showChatButton
			hideTabBar>
			<div className="flex flex-col h-full">
				<IonSegment
					scrollable={true}
					value={activeTab}
					onIonChange={(e: any) => setActiveTab(e.target.value)}
					className="ion-padding-horizontal">
					{tabs.map((item, index) => (
						<IonSegmentButton key={index} value={item}>
							<IonText className="px-3">{item}</IonText>
						</IonSegmentButton>
					))}
				</IonSegment>
				<Swiper
					ref={swiperRef}
					speed={500}
					className="flex-1 [&_*]:text-start w-full"
					onSlideChange={onSlideChange}>
					<SwiperSlide>
						<AboutCommunity />
					</SwiperSlide>
					<SwiperSlide>
						<PostsTab />
					</SwiperSlide>
					<SwiperSlide>
						<EventsTab />
					</SwiperSlide>
					<SwiperSlide>
						<PostsTab />
					</SwiperSlide>
					<SwiperSlide>
						<PeopleTab />
					</SwiperSlide>
					<SwiperSlide>
						<AchievementTab />
					</SwiperSlide>
					<SwiperSlide>
						<LeaderboardTab />
					</SwiperSlide>
				</Swiper>
			</div>
		</DefaultLayout>
	);
};

export default UserCommunityDetails;
