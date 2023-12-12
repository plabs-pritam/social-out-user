import {
	IonAvatar,
	IonIcon,
	IonImg,
	IonText,
	useIonRouter,
} from "@ionic/react";

import React from "react";

interface props {
	id?: string;
	date?: string;
	image?: string;
	price?: number;
	title?: string;
	location?: string;
	ratings?: boolean;
	totalMembers?: string;
	membersProfileImg?: string[];
}

const EventsVerticalCard: React.FC<props> = ({
	id,
	date,
	image,
	title,
	price,
	ratings,
	location,
	totalMembers,
	membersProfileImg,
}) => {
	const ionRouter = useIonRouter();
	return (
		<div className="rounded-[24px] text-black bg-white border">
			<div className="px-2 pt-2 relative">
				<IonImg
					className="rounded-[12px] overflow-hidden h-[170px] object-cover"
					src={image}
					alt=""
				/>
				<p className="absolute flex py-[6px] px-3 items-center justify-center rounded-[20px] bg-[#F8E7FF] top-3 left-3 text-[#6E0699] text-xs leading-4 font-semibold">
					Music
				</p>
			</div>
			<div className="p-4">
				<div className=" mb-3 flex justify-between">
					<div className="text-lg font-medium">{title}</div>
					{ratings && (
						<div className="flex p-2 pr-3 justify-center items-center gap-1 rounded-[20px] bg-[#6E0699] border-[#F9ECFE]">
							<IonIcon
								icon="/assets/icons/solar_star-bold.svg"
								className="text-[#F9ECFE]"
							/>
							<p className="text-[#F9ECFE] text-xs font-normal leading-normal">
								4.5
							</p>
						</div>
					)}
				</div>

				<div className="flex gap-3 flex-wrap">
					<div className="me-auto flex flex-col gap-[6px]">
						<IonText className="text-sm flex gap-1 items-center" color="light">
							<IonIcon
								className="text-lg"
								icon="/assets/icons/solar_calendar-mark-bold.svg"
							/>
							{date}
						</IonText>
						<IonText className="text-sm flex gap-1 items-center" color="light">
							<IonIcon
								className="text-lg"
								icon={"/assets/icons/solar_map-point-bold.svg"}
							/>
							{location}
						</IonText>
					</div>
					{/* member images */}
					{membersProfileImg && membersProfileImg?.length > 0 && (
						<div className="inline-flex items-center">
							{membersProfileImg?.map((image, index) => (
								<div key={index} className="w-[20px]">
									<IonAvatar className="w-[30px] h-[30px]">
										<IonImg className="h-full object-cover" src={image} />
									</IonAvatar>
								</div>
							))}
							<div className="w-[20px]">
								<IonAvatar className="w-[30px] h-[30px] bg-black text-white grid place-items-center">
									+{totalMembers}
								</IonAvatar>
							</div>
						</div>
					)}
				</div>
				<p className="text-[#6E0699] test-sm leading-[18px] font-medium mt-[9px]">
					Buy at ₹{price}
				</p>
			</div>
		</div>
	);
};

export default EventsVerticalCard;
