/** @format */

import { IonButton, IonContent, IonIcon, IonRadioGroup, useIonRouter } from '@ionic/react'
import { FC } from 'react'
import ChooseLocationCard from './choose-location-card'

export interface ChooseComponentProps {
	list: any
	title: string
	listHeading: string
	onContinue: any
	onBack: any
}

const ChooseComponent: FC<ChooseComponentProps> = (props) => {
	const router = useIonRouter()

	const checkTitle = 'Language preference'

	return (
		<IonContent>
			<div className='flex flex-col px-3 h-full'>
				<div className='flex items-center gap-3 py-4'>
					<div
						className='cursor-pointer flex items-center justify-center'
						onClick={props.onBack}
					>
						<IonIcon
							src='/assets/icons/solar_arrow-left-outline.svg'
							className='text-[24px]'
						/>
					</div>
					<h5 className='font-semibold m-0 text-black text-lg leading-6'>
						{props.title === checkTitle ? props.title : `Set your ${props.title}`}
					</h5>
				</div>
				<div className='relative flex mb-4'>
					<IonIcon icon='/assets/icons/search.svg' className='absolute h-full ms-5 my-auto' />
					<input
						className='border border-neutral-300 rounded-lg w-full p-3 ps-11 bg-[#F7F8F9]'
						placeholder={`Type your ${props.title}`}
					/>
				</div>
				<div>
					<h6 className='font-medium text-base text-[#212020] leading-normal mb-1'>
						{props.listHeading}
					</h6>
					<div>
						<IonRadioGroup>
							{props.list.map((value: any, index: number) => (
								<ChooseLocationCard key={value.id} {...value} />
							))}
						</IonRadioGroup>
					</div>
				</div>
				<IonButton className='mt-auto mb-3' routerLink={props.onContinue}>
					continue
				</IonButton>
			</div>
		</IonContent>
	)
}

export default ChooseComponent
