import { useState } from "react";
import PostButton from "./post-button";
import { IonModal } from "@ionic/react";
import { useDispatch } from "react-redux";
import { ButtonList } from "./button-list";
import { useAppSelector } from "../../../store/store";
import { likeAndDislikeEvent } from "../../../data/event";
import HomeComments from "../../../pages/home/home-comments";
import { setPostReload } from "../../../store/reducer/post";

interface ActionButtonProps {
	likes?: string;
	postId: string;
	shares?: string;
	dislikes?: string;
	comments?: string;
	isUserLike?: boolean;
	isUserDisLike?: boolean;
}

const ActionButton: React.FC<ActionButtonProps> = ({
	likes,
	postId,
	shares,
	dislikes,
	comments,
	isUserLike,
	isUserDisLike,
}) => {
	let dispatch = useDispatch();
	let { user } = useAppSelector((state) => state.user);
	let [showComments, setShowComments] = useState<boolean>(false);

	const buttonAction = (title: string) => {
		let value: any = "";
		switch (title) {
			case "Like":
				value = likes;
				break;
			case "Dislike":
				value = dislikes;
				break;
			case "Comments":
				value = comments;
				break;
			case "Share":
				value = shares;
				break;
		}
		return value;
	};

	const handleOnClickButton = async (buttonName: string) => {
		if (buttonName === "Like") {
			await likeAndDislikeEvent(user.UserID, postId, true);
			dispatch(setPostReload(true));
		} else if (buttonName === "Dislike") {
			await likeAndDislikeEvent(user.UserID, postId, false);
			dispatch(setPostReload(true));
		} else if (buttonName === "Comments") {
			setShowComments(true);
		}
	};

	return (
		<>
			<div className="flex gap-3 text-[14px] p-4">
				{ButtonList.map((button) => (
					<PostButton
						icon={button.icon}
						isLike={isUserLike}
						image={button?.image}
						rotate={button.rotate}
						isDisLike={isUserDisLike}
						count={buttonAction(button.title)}
						onClick={() => handleOnClickButton(button.title)}
					/>
				))}
			</div>
			<IonModal isOpen={showComments}>
				<HomeComments
					postId={postId}
					handleClose={() => setShowComments(false)}
				/>
			</IonModal>
		</>
	);
};

export default ActionButton;
