import { IonSegment, IonSegmentButton } from "@ionic/react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setPostReload } from "../../store/reducer/post";
import { setReload } from "../../store/reducer/ui-controller";

let tabsList = [
	{
		title: "For You",
		value: "for-you",
	},
	{
		title: "Trending",
		value: "trending",
	},
];

const PostTabs = () => {
	let dispatch = useDispatch();
	let [activeTab, setActiveTab] = useState<string>("for-you");

	const handleChangeTab = (value: string) => {
		setActiveTab(value);
		dispatch(setReload(true));
		dispatch(setPostReload(true));
	};

	return (
		<IonSegment
			scrollable={true}
			value={activeTab}
			className="tag-selection bg-white sticky top-0 px-2 z-30 flex flex-row">
			{tabsList.map((tab: any) => (
				<div className="">
					<IonSegmentButton
						value={tab.value}
						onClick={() => handleChangeTab(tab.value)}
						className="capitalize custom-segment py-[6px] px-[10px] text-xs font-normal leading-normal">
						{tab.title}
					</IonSegmentButton>
				</div>
			))}
		</IonSegment>
	);
};

export default PostTabs;
