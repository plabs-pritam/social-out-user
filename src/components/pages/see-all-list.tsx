/** @format */

import {
	IonFab,
	IonFabButton,
	IonIcon,
	IonRouterLink,
	IonSegment,
	IonSegmentButton,
	IonText,
} from "@ionic/react";
import React, { FC } from "react";
import DefaultLayout from "../../layouts/DefaultLayout";
import EventsHorizontalCard from "../cards/events-horizontal-card";
import Categories from "../categories";

export interface SeeAllList {
	categoriesList?: any;
	title: string;
	verticalCardList?: any;
	cardLink: string;
}

const SeeAllList: FC<SeeAllList> = ({
	title,
	categoriesList,
	verticalCardList,
	cardLink,
}) => {
	return (
		<DefaultLayout
			title={title}
			paddingBottom
			showBackButton
			showFilterButton
			onCLickFilter="/event-filter">
			<div className="text-black ">
				<Categories />
				<div className="flex flex-col gap-3 overflow-auto px-4 mt-4">
					{verticalCardList[0] &&
						verticalCardList.map((cardItem: any) => (
							<div>
								<IonRouterLink routerLink={cardLink}>
									<EventsHorizontalCard {...cardItem} price="$50" />
								</IonRouterLink>
							</div>
						))}
				</div>
			</div>
		</DefaultLayout>
	);
};

export default SeeAllList;
