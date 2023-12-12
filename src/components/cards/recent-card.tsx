import { IonImg } from "@ionic/react";

interface props {
	id?: string;
	image?: string;
	title?: string;
	date?: string;
	location?: string;
	ratings?: boolean;
	totalMembers?: string;
	membersProfileImg?: string[];
}

const RecentCard: React.FC<props> = ({
	id,
	image,
	title,
	date,
	location,
	membersProfileImg,
	totalMembers,
	ratings,
}) => {
	return (
		<div className="rounded-[24px] text-black bg-white border">
			<div className="px-2 pt-2 relative">
				<IonImg
					className="rounded-[12px] overflow-hidden h-[170px] object-cover"
					src={image}
					alt=""
				/>
			</div>
			<div className="p-4">
				<div className=" mb-3 flex justify-between">
					<div className="text-lg font-medium">{title}</div>
				</div>
			</div>
		</div>
	);
};

export default RecentCard;
