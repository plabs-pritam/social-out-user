/** @format */

import {
	IonAvatar,
	IonButton,
	IonImg,
	IonText,
	useIonRouter,
} from "@ionic/react";

import { FC } from "react";

interface props {
	id: string;
	image: string;
	membersProfileImg: string[];
	title: string;
	members: string;
}

const CommunityVerticalCard: FC<props> = ({
	id,
	image,
	membersProfileImg,
	title,
	members,
}) => {
	const ionRouter = useIonRouter();
	const profileImg = membersProfileImg[0];
	return (
		<div className="rounded-[24px] text-black bg-white border w-[270px]">
			<div className="px-2 pt-2">
				<IonImg
					className="rounded-[12px] overflow-hidden h-[170px] object-cover"
					src={image}
					alt=""
				/>
			</div>
			<div className="p-4">
				<div className="flex gap-2 items-center">
					<div>
						<IonAvatar className="w-[40px] h-[40px]">
							<IonImg
								className="h-full object-cover"
								src="/assets/images/user.jpg"
							/>
						</IonAvatar>
					</div>
					<div className="me-auto truncate">
						<IonText className="block font-medium truncate">{title}</IonText>
						<IonText color="light" className="block text-sm">
							{members}
						</IonText>
					</div>
					<div>
						<IonButton
							shape="round"
							fill="clear"
							size="small"
							className="capitalize font-bold rounded-full bg-[#F9ECFE]">
							Join
						</IonButton>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CommunityVerticalCard;
