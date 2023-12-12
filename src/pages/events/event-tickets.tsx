import {
	IonButton,
	IonContent,
	IonFooter,
	IonPage,
	useIonRouter,
} from "@ionic/react";
import Header from "../../components/headers/header";
import { useAppSelector } from "../../store/store";
import { useState } from "react";
import { EventTicketCard, EventTicketCardAdd } from "./event-ticket";
import { useDispatch } from "react-redux";
import { getUserEventBook } from "../../services/event";
import { setEvent, setTicket } from "../../store/reducer/event";

interface EventTicketProps {}

const EventTickets: React.FC<EventTicketProps> = ({}) => {
	let dispatch = useDispatch();
	let router = useIonRouter();
	let [count, setCount] = useState<number>(1);
	let [addTicket, setAddTicket] = useState<any>({});
	let { user } = useAppSelector((state) => state.user);
	let { ticket, event } = useAppSelector((state) => state.event);

	const handleNavigateTicket = async () => {
		try {
			let payload = {
				Qty: count,
				Amount: 100,
				IsFree: false,
				type: "insert",
				Userid: user?.UserID,
				CreatedBy: user?.UserID,
				EventID: event?.EventID,
				TicketID: addTicket?.TickID,
				OrderID: "00000000-0000-0000-0000-000000000000",
			};
			const response: any = await getUserEventBook(payload);
			if (response.ok) {
				dispatch(setTicket({ ...response.data, ...addTicket }));
				router.push("/book-ticket", "forward", "push");
			}
		} catch (error) {}
	};

	return (
		<IonPage>
			<Header showBackButton />
			<IonContent fullscreen forceOverscroll className="ion-padding">
				{ticket?.length > 0 ? (
					ticket?.map((tick: any) => (
						<EventTicketCard
							title={tick?.Name}
							ticketDetail={tick}
							setAddTicket={setAddTicket}
							amount={tick?.Amount || 0}
							tickets={tick?.TotalTicket}
							description={tick?.Details}
						/>
					))
				) : (
					<div className="font-semibold text-center mt-10">
						Tickets is not Available
					</div>
				)}

				{addTicket?.Name && (
					<div className="mt-4">
						<EventTicketCardAdd
							count={count}
							setCount={setCount}
							ticketDetail={addTicket}
						/>
					</div>
				)}
			</IonContent>
			{ticket?.length > 0 && (
				<IonFooter className="shadow-none ion-padding">
					<IonButton expand="block" onClick={() => handleNavigateTicket()}>
						Buy tickets at ₹{100 * count || 0}
					</IonButton>
				</IonFooter>
			)}
		</IonPage>
	);
};

export default EventTickets;
