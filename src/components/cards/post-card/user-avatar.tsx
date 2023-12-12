import { Avatar } from "@mui/material";
import { IonAvatar, IonImg } from "@ionic/react";

interface UserAvatarProps {
	image?: string;
	username?: string;
}

const UserAvatar: React.FC<UserAvatarProps> = ({ image, username }) => {
	return (
		<>
			{image && (
				<IonAvatar className="w-[36px] h-[36px]">
					<IonImg className="h-full object-contain" src={image} />
				</IonAvatar>
			)}
			{username && <Avatar>{username ? username.substr(0, 1) : "L"}</Avatar>}
		</>
	);
};

export default UserAvatar;
