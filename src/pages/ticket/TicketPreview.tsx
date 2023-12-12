import {
	IonButton,
	IonContent,
	IonIcon,
	IonModal,
	IonText,
} from "@ionic/react";
import { useState } from "react";
import CommunityCreated from "../community/community-guidelines/CommunityCreated";
import DefaultLayout from "../../layouts/DefaultLayout";
import TicketOptions from "../../components/ticket/ticket-options";
import { useAppSelector } from "../../store/store";
import { BASE_URL } from "../../utils/constants";
import moment from "moment";
// import CreateCommunity from "./CreateCommunity";

const TicketPreview = () => {
	let { event, ticket, razorPay } = useAppSelector((state) => state.event);
	const [ticketOptions, setTicketOptions] = useState(false);
	console.log("event", razorPay);
	return (
		<DefaultLayout
			showDots
			title="Ticket"
			showBackButton
			onDotsClick={() => setTicketOptions(true)}>
			<div className="p-4 pb-0 h-full">
				<div className="h-full relative -mt-4 bg-[url('/assets/images/background.png')] bg-no-repeat bg-contain bg-center p-4">
					{/* img */}
					<div className="h-[200px] w-full rounded-xl overflow-hidden mt-[68px]">
						<img src={`${BASE_URL}/${event.EventImage}`} alt="event-image" />
					</div>
					{/* details */}
					<div className="flex flex-col gap-6 items-start my-5">
						<div className="flex flex-col items-start gap-1">
							<IonText className="text-black text-[20px] font-semibold leading-7">
								{event.EventName}
							</IonText>
							<IonText className="text-[#898989] text-xs font-normal leading-[18px]">
								{moment().format("MMM DD, YYYY")} - {event?.Location}
							</IonText>
						</div>

						<div className="flex flex-col gap-[27px] items-start">
							<div className="flex gap-[117px] items-start">
								<TicketDetails
									label="Order ID"
									value={razorPay?.razororderid}
								/>
								<TicketDetails label="Place" value={event?.Location} />
							</div>

							<div className="flex gap-[117px] items-start">
								<TicketDetails
									label="Date"
									value={moment(event?.EventStartDate).format("MMM DD, YYYY")}
								/>
								<TicketDetails label="Timing" value={event?.Time} />
							</div>
						</div>
					</div>

					<div className="absolute bottom-9 left-[20.5%] flex items-center justify-center h-fit">
						<div className="flex flex-col gap-[6px] items-center">
							<img src="/assets/icons/QR Code.svg" alt="qr-code" />
							<IonText className="text-[#898989] text-sm font-normal leading-[18px]">
								Scan QR code to enter the Event
							</IonText>
						</div>
					</div>
				</div>

				{/* Post Options */}
				<IonModal
					isOpen={ticketOptions}
					onDidDismiss={() => setTicketOptions(false)}
					breakpoints={[0, 0.2, 1]}
					initialBreakpoint={0.2}
					backdropBreakpoint={0}
					className="post-option-modal">
					<TicketOptions closeOption={() => setTicketOptions(false)} />
				</IonModal>
			</div>
		</DefaultLayout>
	);
};

export default TicketPreview;

const TicketDetails = ({ label, value }: { label: string; value: string }) => {
	return (
		<div className="flex flex-col items-start gap-[2px]">
			<IonText className="text-[#898989] text-[11px] font-normal leading-normal">
				{label}
			</IonText>

			<IonText className="text-[#6E0699] text-xs font-semibold leading-normal">
				{value}
			</IonText>
		</div>
	);
};

// ***PREVIOUS CODE***

// const TicketPreview: React.FC<{ handleClose: any }> = ({ handleClose }) => {
//   const [showCommunityCreated, setShowCommunityCreated] = useState(false);

//   return (
//     <IonContent color="white">
//       <div className="text-black p-4 pt-0">
//         <div className="sticky top-0 w-[100vw] ml-[-16px] flex gap-3 items-center bg-white p-4">
//           <IonIcon
//             onClick={handleClose}
//             className="text-2xl cursor-pointer"
//             icon={"/assets/icons/solar_arrow-left-outline.svg"}
//           />
//           <div className="text-[18px] font-bold">Preview</div>
//         </div>

//         <div className="w-full h-[230px] rounded-xl bg-[#D9D9D9] flex items-center justify-center">
//           <IonIcon
//             icon="/assets/icons/solar_camera-outline.svg"
//             className="w-8 h-8"
//           />
//         </div>

//         {/* ticket details */}
//         <div className="flex flex-col items-start gap-4 mt-3 h-[399px] overflow-scroll">
//           <h1 className="text-[#000] text-2xl font-semibold leading-[30px]">
//             Event Name
//           </h1>
//           <div className="flex flex-col items-start gap-2">
//             <div className="flex items-center gap-1">
//               <IonIcon
//                 icon="/assets/icons/solar_text-outline.svg"
//                 className="text-[#717171]"
//               />
//               <p className="text-[#717171] font-normal text-sm leading-[18px]">
//                 Event Description
//               </p>
//             </div>
//             <p className="text-[#000] font-normal text-base leading-6">
//               Lorem ipsum dolor sit amet consectetur. Ac dui sit purus feugiat.
//             </p>
//           </div>

//           <div className="flex flex-col items-start gap-2">
//             <div className="flex items-center gap-1">
//               <IonIcon
//                 icon="/assets/icons/solar_calendar-minimalistic-outline.svg"
//                 className="text-[#717171]"
//               />
//               <p className="text-[#717171] font-normal text-sm leading-[18px]">
//                 Event Date
//               </p>
//             </div>
//             <p className="text-[#000] font-normal text-base leading-6">
//               24 August 2023
//             </p>
//           </div>

//           <div className="flex flex-col items-start gap-2">
//             <div className="flex items-center gap-1">
//               <IonIcon
//                 icon="/assets/icons/solar_clock-circle-outline.svg"
//                 className="text-[#717171]"
//               />
//               <p className="text-[#717171] font-normal text-sm leading-[18px]">
//                 Event Timing
//               </p>
//             </div>
//             <p className="text-[#000] font-normal text-base leading-6">
//               05:00PM - 08:00PM
//             </p>
//           </div>

//           <div className="flex flex-col items-start gap-2">
//             <div className="flex items-center gap-1">
//               <IonIcon
//                 icon="/assets/icons/solar_map-point-outline.svg"
//                 className="text-[#717171]"
//               />
//               <p className="text-[#717171] font-normal text-sm leading-[18px]">
//                 Location
//               </p>
//             </div>
//             <p className="text-[#000] font-normal text-base leading-6">
//               1901 Thornridge Cir. Shiloh, Hawaii 81063
//             </p>
//           </div>

//           <div className="flex flex-col items-start gap-2">
//             <div className="flex items-center gap-1">
//               <IonIcon
//                 icon="/assets/icons/solar_masks-outline.svg"
//                 className="text-[#717171]"
//               />
//               <p className="text-[#717171] font-normal text-sm leading-[18px]">
//                 Artist
//               </p>
//             </div>
//             <p className="text-[#000] font-normal text-base leading-6">
//               Guy Hawkins - Guitarist
//             </p>
//           </div>

//           <div className="flex flex-col items-start gap-2">
//             <div className="flex items-center gap-1">
//               <IonIcon
//                 icon="/assets/icons/solar_map-point-outline.svg"
//                 className="text-[#717171]"
//               />
//               <p className="text-[#717171] font-normal text-sm leading-[18px]">
//                 Tickets
//               </p>
//             </div>
//             <p className="text-[#000] font-normal text-base leading-6">
//               Standard Ticket- <span className="font-semibold">$70</span>
//             </p>
//           </div>
//         </div>

//         <div className="w-full mt-1">
//           <IonButton
//             className="ion-btn-primary w-full"
//             size="large"
//             onClick={() => setShowCommunityCreated(true)}
//           >
//             Continue
//           </IonButton>
//         </div>

//         {showCommunityCreated && (
//           <>
//             <div className="overlay absolute inset-0 bg-[#0000005a]"></div>
//             <CommunityCreated
//               heading={"Event created!"}
//               handleClose={() => setShowCommunityCreated(false)}
//               message={
//                 "Yayyy congratulations, your event has been successfully been created."
//               }
//               btn={"Preview Event"}
//               routerLink={"/events/event-details"}
//             />
//           </>
//         )}
//       </div>
//     </IonContent>
//   );
// };
