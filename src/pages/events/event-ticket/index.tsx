/** @format */

import { IonAccordion, IonAccordionGroup, IonIcon, IonImg, IonItem, IonLabel } from '@ionic/react'

interface EventTicketCardProps {
	title: string
	amount: number
	tickets: number
	ticketDetail: any
	setAddTicket: any
	description: string
}

interface EventTicketCardAddProps {
	count: number
	setCount: any
	ticketDetail: any
}

let TicketDetail = () => {
	return (
		<div className='flex flex-col gap-1 text-[#898989]'>
			<div className='flex gap-2'>
				<div>
					<IonIcon icon='/public/assets/icons/check-circle.svg' />
				</div>
				<small>Lorem ipsum dolor sit amet consectetur adipisicing elit.</small>
			</div>
			<div className='flex gap-2'>
				<div>
					<IonIcon icon='/public/assets/icons/check-circle.svg' />
				</div>
				<small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, quaerat.</small>
			</div>
			<div className='flex gap-2'>
				<div>
					<IonIcon icon='/public/assets/icons/check-circle.svg' />
				</div>
				<small>Lorem ipsum dolor sit amet consectetur adipisicing elit.</small>
			</div>
			<div className='flex gap-2'>
				<div>
					<IonIcon icon='/public/assets/icons/check-circle.svg' />
				</div>
				<small>Lorem ipsum dolor sit amet consectetur adipisicing elit.</small>
			</div>
		</div>
	)
}

export const EventTicketCard: React.FC<EventTicketCardProps> = ({
	title,
	amount,
	tickets,
	setAddTicket,
	ticketDetail,
}) => {
	return (
		<div className='border-2 rounded-lg'>
			<div className='ion-padding'>
				<div className='flex flex-row justify-between'>
					<div className='font-semibold'>{title}</div>
					<div>
						<button
							onClick={() => setAddTicket(ticketDetail)}
							className=' bg-black text-white text-xs rounded-full font-semibold py-1 px-3'
						>
							Add
						</button>
					</div>
				</div>
				<div>
					<h6 className='mt-1 text-xs text-[#898989]'>{tickets} tickets available</h6>
					<h6 className='mt-1 font-semibold text-[#010101]'>₹{amount}.00</h6>
				</div>
			</div>
			{ticketDetail && (
				<div>
					<IonAccordionGroup>
						<IonAccordion value='first'>
							<IonItem slot='header'>
								<div className='text-[#6E0699]'>Details</div>
							</IonItem>
							<div className='ion-padding-horizontal mb-3' slot='content'>
								<TicketDetail />
							</div>
						</IonAccordion>
					</IonAccordionGroup>
				</div>
			)}
		</div>
	)
}

export const EventTicketCardAdd: React.FC<EventTicketCardAddProps> = ({
	count,
	setCount,
	ticketDetail,
}) => {
	return (
		<div className='border-2 rounded-lg'>
			<div className='ion-padding'>
				<div className='flex flex-row justify-between'>
					<div className='font-semibold'>{ticketDetail.Name}</div>
					<div className='flex flex-row gap-3'>
						<IonImg
							src='/assets/images/minus.png'
							onClick={() => {
								if (count > 1) {
									setCount(count - 1)
								}
							}}
						/>
						<div>{count || 0}</div>
						<IonImg src='/assets/images/plus.png' onClick={() => setCount(count + 1)} />
					</div>
				</div>
				<div>
					<h6 className='mt-1 text-xs text-[#898989]'>
						{ticketDetail.TotalTicket} tickets available
					</h6>
					<h6 className='mt-1 font-semibold text-[#010101]'>
						₹{ticketDetail.Amount || 0}.00
					</h6>
				</div>
			</div>
			{/* <div className='mt-4 flex flex-row justify-between'>
				<div className='text-sm text-[#6E0699]'>Details</div>
				<IonImg src='/assets/images/up-arrow.png' />
			</div> */}
			{ticketDetail && (
				<div>
					<IonAccordionGroup>
						<IonAccordion value='first'>
							<IonItem slot='header'>
								<div className='text-[#6E0699]'>Details</div>
							</IonItem>
							<div className='ion-padding-horizontal mb-3' slot='content'>
								<TicketDetail />
							</div>
						</IonAccordion>
					</IonAccordionGroup>
				</div>
			)}
		</div>
	)
}
