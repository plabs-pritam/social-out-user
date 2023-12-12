/** @format */

import { generateId, useIonRouter } from "@ionic/react";
import { FC } from "react";
import ChooseComponent from "./choose-component";

let initLocationList = [
	{
		id: generateId().toString(),
		title: "Mumbai",
		subtitle: "Maharashtra, India",
	},
	{
		id: generateId().toString(),
		title: "Mumbai",
		subtitle: "Maharashtra, India",
	},
	{
		id: generateId().toString(),
		title: "Mumbai",
		subtitle: "Maharashtra, India",
	},
	{
		id: generateId().toString(),
		title: "Mumbai",
		subtitle: "Maharashtra, India",
	},
];

const ChooseLocation: FC = () => {
	const router = useIonRouter();
	return (
		<ChooseComponent
			title="Location"
			list={initLocationList}
			onContinue="/choose-language"
			listHeading="Popular Locations"
			onBack={() => router.push("/choose-categories", "back")}
		/>
	);
};

export default ChooseLocation;
