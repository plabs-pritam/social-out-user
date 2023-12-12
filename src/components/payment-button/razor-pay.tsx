import uuid from "uuid";
import { Checkout } from "capacitor-razorpay";
import PrimaryButton from "../buttons/primary-button";
import { getEventPaymentReceived } from "../../services/event";
import { useIonRouter } from "@ionic/react";

const RazorPayButton = ({
	price,
	email,
	contact,
	razorKey,
	razorSecret,
	razorOrderId,
	setPaymentOptions,
}: any) => {
	const router = useIonRouter();
	const payment = async () => {
		try {
			let options: any = {
				name: "Plabs",
				key: razorKey,
				currency: "INR",
				amount: price * 100,
				order_id: razorOrderId,
				description: "Great offer",
				prefill: {
					email: email,
					contact: contact,
				},
				theme: {
					color: "#3399cc",
				},
				image: "https://percipiencelabs.co/img/logo.png",
			};
			let data: any = await Checkout.open(options);
			if (data.response.status_code === 200) {
				let payload = {
					razorpay_signature: razorSecret,
					razorpay_order_id: razorOrderId,
					razorpay_payment_id: data.response.razorpay_payment_id,
				};
				let response = await getEventPaymentReceived(payload);
				if (response.ok) {
					setPaymentOptions(true);
				}
			} else {
				console.log("Data", data);
			}
			router.push("/ticket-preview", "forward", "push");
		} catch (error: any) {
			console.log("Error occurred while payment", error.message);
		}
	};
	return (
		<PrimaryButton onClick={() => payment()}>
			Buy Ticket at {`₹${price || 0}`}
		</PrimaryButton>
	);
};

export default RazorPayButton;
