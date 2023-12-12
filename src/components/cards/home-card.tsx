/** @format */

import {
	IonAvatar,
	IonIcon,
	IonImg,
	IonNavLink,
	useIonRouter,
} from "@ionic/react";

import React from "react";
import PostButton from "./post-card/post-button";
import { ButtonList } from "./post-card/button-list";
import PostImage from "./post-card/post-image";
import ActionButton from "./post-card/action-button";
import PostInfo from "./post-card/post-info";

interface props {
	id: string;
	name?: string;
	time?: string;
	image?: string;
	likes?: string;
	shares?: string;
	message?: string;
	dislikes?: string;
	comments?: string;
	isUserLike?: boolean;
	profileImage?: string;
	communityName?: string;
	isUserDisLike?: boolean;
}

const HomeCard: React.FC<props> = ({
	id,
	name,
	time,
	image,
	likes,
	shares,
	message,
	dislikes,
	comments,
	profileImage,
	communityName,
	isUserLike,
	isUserDisLike,
}) => {
	return (
		<div className="rounded-[24px] text-black bg-white border shadow-xl">
			<PostInfo
				time={time}
				username={name}
				postMessage={message}
				profileImage={profileImage}
				communityName={communityName}
			/>
			<PostImage image={image} />
			<ActionButton
				postId={id}
				likes={likes}
				shares={shares}
				comments={comments}
				dislikes={dislikes}
				isUserLike={isUserLike}
				isUserDisLike={isUserDisLike}
			/>
		</div>
	);
};

export default HomeCard;
