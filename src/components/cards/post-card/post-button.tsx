import { IonIcon } from "@ionic/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface PostButtonProps {
	icon: any;
	onClick: any;
	image: string;
	count: string;
	isLike?: boolean;
	rotate?: boolean;
	isDisLike?: boolean;
}

const PostButton: React.FC<PostButtonProps> = ({
	icon,
	image,
	count,
	rotate,
	onClick,
	isLike,
}) => {
	// <IonIcon src={icon} className={`text-lg`} />;
	return (
		<button className="inline-flex gap-1 items-center" onClick={onClick}>
			{icon && (
				<FontAwesomeIcon
					icon={icon}
					className={`w-4 h-4 ${isLike && "text-green-600"}`}
				/>
			)}
			{image && (
				<IonIcon src={image} className={`text-lg ${rotate && "rotate-180"}`} />
			)}
			<span className="">{count}</span>
		</button>
	);
};

export default PostButton;
