import { IonImg } from "@ionic/react";

const PostImage: React.FC<{ image?: string }> = ({ image }) => {
	return (
		<div className="px-2">
			<IonImg
				alt=""
				src={image}
				className="rounded-[12px] overflow-hidden aspect-square object-cover"
			/>
		</div>
	);
};

export default PostImage;
