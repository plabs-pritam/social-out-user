import { IonText } from "@ionic/react";

interface PostSearchProps {
	time: string;
	image: string;
	title: string;
	username: string;
}

const PostSearchCard: React.FC<PostSearchProps> = ({
	image,
	time,
	title,
	username,
}) => {
	return (
		<div className="w-full rounded-3xl p-3 border border-[#E6E6E6] bg-white flex items-center justify-between">
			<div className="flex flex-col gap-2 items-start">
				<div className="flex flex-col items-start gap-1 w-[200px]">
					<IonText className="text-black text-base font-semibold leading-normal">
						{username}
					</IonText>
					<IonText className="text-black text-sm font-normal leading-normal">
						{title}
					</IonText>
				</div>
				<IonText className="text-[#666] text-xs font-normal leading-normal">
					{time}
				</IonText>
			</div>
			<img
				src={image}
				alt="post-img"
				className="w-[87px] h-[81px] flex-shrink-0 rounded-xl bg-cover"
			/>
		</div>
	);
};

export default PostSearchCard;
