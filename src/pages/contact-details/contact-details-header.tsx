/** @format */

import {
	IonAvatar,
	IonFab,
	IonFabButton,
	IonIcon,
	IonImg,
	useIonRouter,
} from "@ionic/react";
import CallingIcon from "../../assets/icons/calling.svg";
import VideoIcon from "../../assets/icons/video.svg";
import React from "react";

const ContactDetailsHeader: React.FC = () => {
	const navigate = useIonRouter();
	return (
		<div className="flex flex-col gap-3 text-center p-5 bg-black text-white">
			<div className="me-auto">
				<IonIcon
					onClick={() =>
						navigate.push(navigate.routeInfo.lastPathname || "", "back", "push")
					}
					className="rotate-90"
					icon={'/assets/icons/solar_alt-arrow-right-outline.svg'}
				/>
			</div>
			<div>
				<IonAvatar className="w-[120px] h-[120px] mx-auto">
					<IonImg src="https://picsum.photos/500" />
				</IonAvatar>
			</div>
			<div className="text-2xl font-medium">Theresa Webb</div>
			<div className="flex items-center justify-center gap-1 text-neutral-500">
				<span className="online-dot" /> Online
			</div>
			<div className="w-[90%] mx-auto">
				Donec porta, nisl quis blandit ullamcorper, dui tellus semper orci
			</div>
			<div className="flex justify-evenly">
				<div>
					<IonFab
						onClick={() => navigate.push("/app/chatting", "forward", "push")}
						className="relative inline-block">
						<IonFabButton>
							<IonIcon color="dark" icon={'/assets/icons/solar_chat-round-dots-outline.svg'}></IonIcon>
						</IonFabButton>
					</IonFab>
					<div>Message</div>
				</div>
				<div>
					<IonFab
						// onClick={() => navigation.push('/app/chatting', 'forward', 'push')}
						className="relative inline-block">
						<IonFabButton>
							<IonIcon color="dark" icon={CallingIcon}></IonIcon>
						</IonFabButton>
					</IonFab>
					<div>Audio</div>
				</div>
				<div>
					<IonFab
						// onClick={() => navigation.push('/app/chatting', 'forward', 'push')}
						className="relative inline-block">
						<IonFabButton>
							<IonIcon color="dark" icon={VideoIcon}></IonIcon>
						</IonFabButton>
					</IonFab>
					<div>Video</div>
				</div>
			</div>
		</div>
	);
};

export default ContactDetailsHeader;
