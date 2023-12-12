import { Share } from "@capacitor/share";
import {
	IonButton,
	IonButtons,
	IonHeader,
	IonIcon,
	IonItem,
	IonRouterLink,
	IonSelect,
	IonSelectOption,
	IonText,
	IonTitle,
	IonToolbar,
	useIonRouter,
} from "@ionic/react";

import React from "react";

export interface HeaderProps {
	showBackButton?: boolean;
	showDropDown?: boolean;
	title?: string;
	showShareButton?: boolean;
	showSearchButton?: boolean;
	showChatButton?: boolean;
	showBellButton?: boolean;
	showFilterButton?: boolean;
	showDots?: boolean;
	onClickBack?: any;
	onDotsClick?: any;
	onShareClick?: any;
	onClickSearch?: string;
	onCLickFilter?: string;
}

const Header: React.FC<HeaderProps> = ({
	showBackButton,
	showDropDown,
	title,
	showShareButton,
	showSearchButton,
	showChatButton,
	showBellButton,
	showFilterButton,
	showDots,
	onClickBack,
	onDotsClick,
	onShareClick,
	onClickSearch,
	onCLickFilter,
}) => {
	const router = useIonRouter();

	const shareContent = async () => {
		try {
			await Share.share({
				title: "Social Out",
				text: "Check out this cool app!",
				url: "https://www.example.com",
			});
		} catch (error) {
			console.error("Error sharing:", error);
		}
	};

	return (
		<IonHeader className="shadow-none" mode="md">
			<IonToolbar>
				<IonButtons className="flex items-center justify-between px-4">
					<div className="flex items-center gap-3">
						{showBackButton && (
							<IonIcon
								icon="/assets/icons/solar_arrow-left-outline.svg"
								className="text-[#222] text-2xl"
								onClick={() => {
									onClickBack ? onClickBack() : router.goBack();
								}}
							/>
						)}
						{title && (
							<IonTitle className="p-0 text-[#010101] text-lg font-semibold leading-6">
								{title}
							</IonTitle>
						)}
						{showDropDown && (
							<div>
								<IonSelect
									interface="popover"
									placeholder="Select City"
									value="Mumbai"
									className="text-[#010101] border-none text-[20px] font-medium leading-normal">
									<IonSelectOption value="Mumbai">Mumbai</IonSelectOption>
									<IonSelectOption value="Pune">Pune</IonSelectOption>
									<IonSelectOption value="Thane">Thane</IonSelectOption>
								</IonSelect>
							</div>
						)}
					</div>

					<div className="flex items-center gap-2">
						{showSearchButton && (
							<IonButton
								routerLink={onClickSearch}
								className="flex items-center p-[3px] w-auto h-auto border rounded-full border-[#0000001A]">
								<IonIcon className="w-4 h-4" icon="/assets/icons/search.svg" />
							</IonButton>
						)}
						{showChatButton && (
							<IonButton
								className="flex items-center p-[3px] w-auto h-auto border rounded-full border-[#0000001A]"
								routerLink="/chats">
								<IonIcon
									className="w-4 h-4"
									icon="/assets/icons/solar_chat-round-dots-outline.svg"
								/>
							</IonButton>
						)}
						{showBellButton && (
							<IonButton
								routerLink="/notification"
								className="flex items-center p-[3px] w-auto h-auto border rounded-full border-[#0000001A]">
								<IonIcon
									className="w-4 h-4"
									icon="/assets/icons/solar_bell-outline.svg"
								/>
							</IonButton>
						)}
						{showShareButton && (
							<IonButton
								className="flex items-center p-[3px] w-auto h-auto border rounded-full border-[#0000001A]"
								onClick={onShareClick ? onShareClick : shareContent}>
								<IonIcon
									className="w-4 h-4"
									icon="/assets/icons/solar_share-outline.svg"
								/>
							</IonButton>
						)}
						{showDots && (
							<IonButton
								className="flex items-center p-[3px] w-auto h-auto border rounded-full border-[#0000001A]"
								onClick={onDotsClick}>
								<IonIcon
									className="w-4 h-4"
									icon="/assets/icons/solar_menu-dots-outline.svg"
								/>
							</IonButton>
						)}
						{showFilterButton && (
							<IonButton
								className="flex items-center p-[3px] w-auto h-auto border rounded-full border-[#0000001A]"
								routerLink={onCLickFilter}>
								<IonIcon
									className="w-4 h-4"
									icon="/assets/icons/solar_tuning-4-outline.svg"
								/>
							</IonButton>
						)}
					</div>
				</IonButtons>
			</IonToolbar>
		</IonHeader>
	);
};

export default Header;
