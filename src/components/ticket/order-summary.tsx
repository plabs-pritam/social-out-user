import { IonText } from "@ionic/react";
import { useState } from "react";
import HrLine from "../hr-line";
import Order from "./order";
import { useAppSelector } from "../../store/store";

const cost = [
	{
		label: "Tax",
		price: "₹0.00",
	},
	{
		label: "Discount(10%)",
		price: "₹0.00",
	},
];

const OrderSummary = () => {
	const { event, ticket } = useAppSelector((state) => state.event);
	const [showOrder, setShowOrder] = useState(false);
	return (
		<div className="border border-[#E8E8E8] bg-white rounded-xl p-4 pt-[11px] mb-6">
			<div
				className="flex items-center justify-between"
				onClick={() => setShowOrder(!showOrder)}>
				<IonText className="text-[#111729] text-sm font-semibold leading-[23px] tracking-[0.07px]">
					Order Summary
				</IonText>
				<img
					src="/assets/icons/arrow-up.svg"
					alt="arrow-up-icon"
					className={`${!showOrder ? "rotate-180" : ""}`}
				/>
			</div>

			{showOrder && (
				<>
					<div className="border border-[#E8E8E8] bg-white rounded-xl mt-3 mb-5">
						<Order
							qty="01"
							name={event?.EventName}
							price={`₹${ticket?.TotalTicket || 0}`}
						/>
						{/* <HrLine />
						<Order name="Pottery Show" qty="04" price="$28.00" /> */}
					</div>
					{ticket?.discount && (
						<div className="flex flex-col gap-2 w-full items-start mb-4">
							<IonText className="text-[#111729] text-sm font-semibold leading-[23px] tracking-[0.07px]">
								Discount Code
							</IonText>
							<div className="flex justify-between w-full items-center border-2 border-[#6E0699] bg-white rounded-lg pt-[9px] px-3 pb-2">
								<div className="flex gap-2">
									<img
										src="/assets/icons/ticket-discount.svg"
										alt="discount-icon"
									/>
									<IonText className="text-[#111729] text-sm font-medium leading-[23px] tracking-[0.07px]">
										Discount Code
									</IonText>
								</div>
								<IonText className="text-[#6E0699] text-sm font-bold leading-[23px] tracking-[0.07px]">
									Apply
								</IonText>
							</div>
						</div>
					)}

					<HrLine />
					{/* Cost */}
					<div className="flex flex-col gap-3 items-start mt-6">
						<div className="flex justify-between w-full items-start">
							<IonText className="text-[#677489] text-sm font-medium leading-[23px]">
								Subtotal
							</IonText>
							<IonText className="text-[#111729] text-sm font-medium leading-[23px] tracking-[0.07px]">
								{`₹${ticket.TotalTicket}`}
							</IonText>
						</div>
						{cost.map((item) => (
							<div
								key={item.label}
								className="flex justify-between w-full items-start">
								<IonText className="text-[#677489] text-sm font-medium leading-[23px]">
									{item.label}
								</IonText>
								<IonText className="text-[#111729] text-sm font-medium leading-[23px] tracking-[0.07px]">
									{item.price}
								</IonText>
							</div>
						))}
						<HrLine />
						<div className="flex justify-between w-full items-start">
							<IonText className="text-[#111729] text-sm font-medium leading-[23px] tracking-[0.07px]">
								Total
							</IonText>
							<IonText className="text-[#111729] text-sm font-bold leading-[23px] tracking-[0.07px]">
								{`₹${ticket?.TotalTicket || 0}`}
							</IonText>
						</div>
					</div>
				</>
			)}
		</div>
	);
};

export default OrderSummary;
