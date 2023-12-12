import { IonModal, IonText } from "@ionic/react";
import DefaultLayout from "../../layouts/DefaultLayout";
import OrderSummary from "../../components/ticket/order-summary";
import PrimaryButton from "../../components/buttons/primary-button";
import PaymentCard from "../../components/cards/payment-card";
import { paymentData } from "../../data/user-data";
import { useState, useEffect } from "react";
import TicketTerms from "./ticket-terms";
import PaymentOptions from "./payment-options";
import CommunityCreated from "../community/community-guidelines/CommunityCreated";
import { useAppSelector } from "../../store/store";
import RazorPayButton from "../../components/payment-button/razor-pay";
import { getEventPayment } from "../../services/event";
import { useDispatch } from "react-redux";
import { setRazorPay } from "../../store/reducer/event";

const BookTicket = () => {
	let dispatch = useDispatch();
	let [email, setEmail] = useState<string>("");
	let [contact, setContact] = useState<number>(0);
	let [razor, setRazor] = useState<any>({});
	const [ticketBooked, setTicketBooked] = useState(false);
	const [selectedOption, setSelectedOption] = useState("");
	const [paymentOptions, setPaymentOptions] = useState(false);
	const { user } = useAppSelector((state) => state.user);
	const { event, ticket } = useAppSelector((state) => state.event);

	useEffect(() => {
		fetchEventPayment();
	}, [event]);

	const handleRadioChange = (e: any) => {
		setSelectedOption(e.target.value);
	};

	const ticketPaymentHandler = () => {
		setPaymentOptions(false);
		setTicketBooked(true);
	};

	const fetchEventPayment = async () => {
		const response = await getEventPayment(user?.UserID, event?.EventID);
		if (response.ok) {
			setRazor(response.data);
			dispatch(setRazorPay(response.data));
		}
	};

	return (
		<DefaultLayout title="Book tickets" showBackButton>
			<div className="p-4">
				<OrderSummary />
				<div className="flex flex-col w-full gap-2 items-start mb-6">
					<IonText className="text-[#111729] text-sm font-bold leading-[23px] tracking-[0.07px]">
						Email
					</IonText>
					<div className="flex pt-[9px] px-3 pb-2 w-full items-center rounded-lg border border-[#E3E8EF]">
						<input
							type="email"
							placeholder="joylawson@gmail.com"
							onChange={(e: any) => setEmail(e.target.value)}
							className="bg-transparent w-full text-[#111729] text-sm font-medium leading-[23px] tracking-[0.07px] outline-none"
						/>
					</div>
				</div>
				<div className="flex flex-col w-full gap-2 items-start mb-6">
					<IonText className="text-[#111729] text-sm font-bold leading-[23px] tracking-[0.07px]">
						Phone number
					</IonText>
					<div className="flex gap-3 pt-[9px] px-3 pb-2 w-full items-center rounded-lg border border-[#E3E8EF]">
						<img
							alt=""
							width={20}
							height={20}
							src="/assets/images/india-flag-icon.png"
						/>
						<input
							type="number"
							placeholder="0000000000"
							onChange={(e: any) => setContact(e.target.value)}
							className="bg-transparent w-full text-[#111729] text-sm font-medium leading-[23px] tracking-[0.07px] outline-none"
						/>
					</div>
				</div>
				{/* Payments */}
				{paymentData.map((section, index) => (
					<div
						key={index}
						className="flex flex-col w-full gap-2 items-start mb-6">
						<IonText className="text-[#111729] text-sm font-bold leading-[23px] tracking-[0.07px]">
							{section.label}
						</IonText>
						{section.cards.map((card, cardIndex) => (
							<PaymentCard
								key={cardIndex}
								img={card.img}
								heading={card.heading}
								name={card.name}
								value={card.value}
								onChange={handleRadioChange}
							/>
						))}
					</div>
				))}
				{/* Terms & Conditions */}
				<TicketTerms />
				<RazorPayButton
					email={email}
					contact={contact}
					price={ticket.TotalTicket}
					razorKey={razor.razorKey}
					razorSecret={razor.razorsecret}
					razorOrderId={razor.razororderid}
					setPaymentOptions={setPaymentOptions}
				/>
				{/* Post Options */}
				{selectedOption && (
					<IonModal
						isOpen={paymentOptions}
						onDidDismiss={() => setPaymentOptions(false)}
						breakpoints={[0, 0.45, 1]}
						initialBreakpoint={0.45}
						backdropBreakpoint={0}
						className="post-option-modal">
						<PaymentOptions
							closeOption={() => setPaymentOptions(false)}
							selectedOption={selectedOption}
							onPay={ticketPaymentHandler}
						/>
					</IonModal>
				)}
				{ticketBooked && (
					<>
						<div className="overlay absolute inset-0 bg-[#0000005a] z-50"></div>
						<CommunityCreated
							heading={"Tickets Booked! 🎉"}
							handleClose={() => setTicketBooked(false)}
							message={
								"Yayyy congratulations Andrew, your tickets have been succesfully been booked."
							}
							btn={"View tickets"}
							routerLink={"/ticket-preview"}
						/>
					</>
				)}
			</div>
		</DefaultLayout>
	);
};

export default BookTicket;
