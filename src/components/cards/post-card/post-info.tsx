import { IonAvatar, IonImg, IonModal } from "@ionic/react";
import { useState } from "react";
import PostOptions from "../../home/PostOptions";
import UserAvatar from "./user-avatar";

interface PostInfoProps {
	time?: string;
	username?: string;
	postMessage?: string;
	profileImage?: string;
	communityName?: string;
}

const PostInfo: React.FC<PostInfoProps> = ({
	time,
	username,
	postMessage,
	profileImage,
	communityName,
}) => {
	let [postMenu, setPostMenu] = useState<boolean>(false);
	return (
		<>
			<div className="p-4">
				<div className="flex gap-3 items-center">
					<UserAvatar username={username} image={profileImage} />
					<div>
						<div className="font-bold">{username}</div>
						<div className="text-[12px] text-[#898989]">
							{time} added to &nbsp;
							<span
								className={
									communityName !== "N/A"
										? `text-[var(--ion-color-primary)]`
										: ""
								}>
								{communityName}
							</span>
						</div>
					</div>
					<IonImg
						className="cursor-pointer ms-auto mb-auto"
						src="/assets/icons/three-dots.svg"
						onClick={() => setPostMenu(true)}
					/>
				</div>
				<div className="text-[14px] mt-2">{postMessage}</div>
			</div>
			<IonModal
				isOpen={postMenu}
				onDidDismiss={() => setPostMenu(false)}
				breakpoints={[0, 0.3, 1]}
				initialBreakpoint={0.3}
				backdropBreakpoint={0}
				className="post-option-modal">
				<PostOptions closePostOption={() => setPostMenu(false)} />
			</IonModal>
		</>
	);
};

export default PostInfo;
