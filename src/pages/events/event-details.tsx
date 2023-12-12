/** @format */
import moment from "moment";
import { Share } from "@capacitor/share";
import {
	IonButton,
	IonContent,
	IonFooter,
	IonIcon,
	IonImg,
	IonModal,
	IonPage,
	IonText,
	useIonRouter,
} from "@ionic/react";
import { FC, useEffect, useState } from "react";
import PrimaryButton from "../../components/buttons/primary-button";
import EventGallery from "../../components/events/event-gallery";
import EventOptions from "../../components/events/event-options";
import EventOrganizer from "../../components/events/event-organizer";
import EventSchedule from "../../components/events/event-schedule";
import EventUsers from "../../components/events/event-users";
import Header from "../../components/headers/header";
import { useAppSelector } from "../../store/store";
import { getEventById, getTicketDetails } from "../../services/event";
import { requestQuery } from "../../utils/request-query";
import ShortDescription from "../../components/common/short-description";
import { useDispatch } from "react-redux";
import { setEvent, setTicket } from "../../store/reducer/event";
import { BASE_URL } from "../../utils/constants";

const EventDetails: FC = (props) => {
	const router = useIonRouter();
	const dispatch = useDispatch();
	const [eventOptions, setEventOptions] = useState(false);
	const [intrestedBtn, setIntrestedBtn] = useState(false);

	let { user } = useAppSelector((state) => state.user);
	let { eventId } = useAppSelector((state) => state.event);

	let [eventDetail, setEventDetail] = useState<any>({});
	let [ticketDetail, setTicketDetail] = useState<any>({});

	useEffect(() => {
		fetchEvent();
		dispatch(setTicket({}));
	}, [eventId]);

	const fetchEvent = async () => {
		try {
			let payload: any = {
				EventID: eventId,
				UserID: user.UserID,
			};
			payload = requestQuery(payload);
			const response = await getEventById(payload);
			if (response.ok) {
				if ((response.data as any).length > 0) {
					eventDetail = (response.data as any)[0];
					setEventDetail(JSON.parse(JSON.stringify(eventDetail)));
					getEventTickets(eventDetail?.EventID);
				}
			}
		} catch (error: any) {
			console.log("Error occurred while getting event", error.message);
		}
	};

	const getEventTickets = async (eventId: string) => {
		try {
			const response: any = await getTicketDetails(eventId);
			if (response.ok) {
				if (response.data.length > 0) {
					let tickets = response.data;
					dispatch(setTicket(tickets));
					setTicketDetail(tickets[0]);
				}
			}
		} catch (error: any) {
			console.log("Error occurred while getting event", error.message);
		}
	};

	const handleNavigate = async () => {
		console.log("eventDetail", eventDetail);
		dispatch(setEvent(eventDetail));
		router.push("/event-tickets", "forward", "push");
	};

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

	const intrestedBtnHandler = () => {
		setIntrestedBtn(!intrestedBtn);
	};

	return (
		<IonPage>
			<Header
				showDots
				showBackButton
				showShareButton
				title="Event Description"
				onShareClick={shareContent}
				onDotsClick={() => setEventOptions(true)}
				onClickBack={() => router.push("/user/events", "back", "replace")}
			/>
			<IonContent fullscreen className="ion-padding">
				<div className="flex flex-col gap-5">
					<IonImg
						className="object-cover h-[230px] rounded-xl overflow-hidden mb-4"
						src={`${BASE_URL}/${eventDetail?.EventImage}`}
					/>
					<div className="flex flex-col gap-2 items-start">
						<p className="flex py-[6px] w-fit px-3 items-center justify-center rounded-[20px] bg-[#F8E7FF] text-[#6E0699] text-xs leading-4 font-semibold">
							Music
						</p>
						<IonText className="text-xl font-bold text-black">
							{eventDetail?.EventName} -{" "}
							{moment(eventDetail?.EventStartDate).format("YYYY")}
						</IonText>
						<EventUsers />
					</div>
					<div className="border-b" />
					<div className="flex gap-3 items-center">
						<div className="me-auto">
							<IonText
								color="light"
								className="block text-sm max-w-[220px] text-black leading-[18px]">
								Keep yourself updated about this event by clicking on Interested
							</IonText>
						</div>

						<div>
							<IonButton
								fill="clear"
								style={{ "--ripple-color": "transparent" }}
								onClick={intrestedBtnHandler}
								className={`event-intrested-btn text-sm font-medium leading-normal rounded-[40px] border border-[#6E0699] ${
									intrestedBtn
										? "text-white bg-[#6E0699]"
										: "text-[#6E0699] bg-transparent"
								}`}>
								Intrested{!intrestedBtn && "?"}
							</IonButton>
						</div>
					</div>
					<div className="border-b" />
					<EventOrganizer />
					<div className="border-b" />
					<div>
						<IonText className="block text-xl font-bold mb-2 text-black">
							About Event
						</IonText>
						<ShortDescription text={eventDetail?.Description} />
					</div>
					<div className="border-b" />
					<EventSchedule />
					<IonText className="block text-xl font-bold text-black">
						Gallery (Pre-event)
					</IonText>
					<EventGallery />
					<IonText className="block text-xl font-bold text-black">
						Location
					</IonText>
					<div className="border aspect-video rounded-3xl relative overflow-hidden">
						<img src="/assets/images/venue/map.png" alt="map" />
						<IonIcon
							icon="/assets/icons/map-marker.svg"
							className="absolute top-[28px] left-[102px] h-10 w-10 "
						/>
					</div>
				</div>
			</IonContent>
			<IonFooter className="shadow-none ion-padding">
				<PrimaryButton onClick={handleNavigate}>
					Tickets from ₹{ticketDetail.TotalTicket || 0}
				</PrimaryButton>
			</IonFooter>
			<IonModal
				isOpen={eventOptions}
				initialBreakpoint={0.3}
				breakpoints={[0, 0.3, 1]}
				onDidDismiss={() => setEventOptions(false)}>
				<EventOptions
					event={eventDetail}
					ticket={ticketDetail}
					closeOption={() => setEventOptions(false)}
				/>
			</IonModal>
		</IonPage>
	);
};

export default EventDetails;
