import {
	IonCheckbox,
	IonChip,
	IonCol,
	IonContent,
	IonDatetime,
	IonFooter,
	IonGrid,
	IonInput,
	IonItem,
	IonLabel,
	IonModal,
	IonPage,
	IonRadio,
	IonRadioGroup,
	IonRange,
	IonText,
	useIonRouter,
} from '@ionic/react'
import { FC, useState } from 'react'
import PrimaryButton from '../../components/buttons/primary-button'
import Header from '../../components/headers/header'
import RadioChip from './radio-chip'

const EventFilter: FC = () => {
	const [openDateModal, setOpenDateModal] = useState(false)
	const router = useIonRouter();

	return (
		<IonPage>
			<Header showBackButton title='Filter' />
			<IonContent fullscreen className='ion-padding'>
				<div>
					<div>
						<IonLabel>Event Pricing</IonLabel>
						<IonRadioGroup onIonChange={(e) => console.log(e.target.value)}>
							<IonItem className='ion-no-padding'>
								<RadioChip value='Free' active='Free' />
								<RadioChip value='Paid' active='' />
							</IonItem>
						</IonRadioGroup>
					</div>
					<div>
						<IonLabel>Event Feed</IonLabel>
						<IonRadioGroup onIonChange={(e) => console.log(e.target.value)}>
							<IonItem className='ion-no-padding'>
								<RadioChip value='All' active='' />
								<RadioChip value='Popular' active='' />
							</IonItem>
						</IonRadioGroup>
					</div>
					<div>
						<IonLabel>Event Type</IonLabel>
						<IonRadioGroup onIonChange={(e) => console.log(e.target.value)}>
							<IonItem className='ion-no-padding'>
								<RadioChip value='Online' active='' />
								<RadioChip value='Offline' active='' />
							</IonItem>
						</IonRadioGroup>
					</div>
					<div>
						<IonLabel>Time</IonLabel>
						<IonRadioGroup onIonChange={(e) => console.log(e.target.value)}>
							<IonItem className='ion-no-padding'>
								<RadioChip value='Morning' active='' />
								<RadioChip value='Afternoon' active='' />
								<RadioChip value='Evening' active='' />
							</IonItem>
						</IonRadioGroup>
					</div>
					<div>
						<IonLabel>Date</IonLabel>
						<IonItem
							button
							mode='ios'
							className='ion-no-padding text-sm'
							onClick={() => setOpenDateModal(true)}
						>
							<IonText>24 August 2024</IonText>
						</IonItem>
					</div>
					<div>
						<IonLabel>Price</IonLabel>
						<div className='flex justify-between text-sm '>
							<IonText>$0</IonText>
							<IonText>$500</IonText>
						</div>
						<IonRange
							className='ion-no-padding px-2'
							min={0}
							max={500}
							dualKnobs={true}
							pin={true}
						></IonRange>
					</div>
					<div>
						<IonLabel>Language</IonLabel>
						<IonItem className='ion-no-padding text-sm'>
							<IonLabel>English</IonLabel>
							<IonCheckbox slot='end' />
						</IonItem>
						<IonItem className='ion-no-padding text-sm'>
							<IonLabel>Hindi</IonLabel>
							<IonCheckbox slot='end' />
						</IonItem>
						<IonItem className='ion-no-padding text-sm'>
							<IonLabel>Bengali</IonLabel>
							<IonCheckbox slot='end' />
						</IonItem>
					</div>
					<div>
						<IonLabel>Location</IonLabel>
						<IonItem className='ion-no-padding text-sm'>
							<IonLabel>Mumbai</IonLabel>
							<IonCheckbox slot='end' />
						</IonItem>
						<IonItem className='ion-no-padding text-sm'>
							<IonLabel>Kolkata</IonLabel>
							<IonCheckbox slot='end' />
						</IonItem>
						<IonItem className='ion-no-padding text-sm'>
							<IonLabel>Bengaluru</IonLabel>
							<IonCheckbox slot='end' />
						</IonItem>
					</div>
				</div>
			</IonContent>
			<IonFooter className='shadow-none ion-padding' onClick={() => router.push("/upcoming-events")}>
				<PrimaryButton>Apply</PrimaryButton>
			</IonFooter>

			<IonModal
				mode='ios'
				isOpen={openDateModal}
				onDidDismiss={() => setOpenDateModal(false)}
				breakpoints={[0, 0.75, 1]}
				initialBreakpoint={0.75}
			>
				<IonContent className='ion-padding'>
					<IonDatetime className='bg-white' />
					<IonFooter className='shadow-none '>
						<PrimaryButton>Apply</PrimaryButton>
					</IonFooter>
				</IonContent>
			</IonModal>
		</IonPage>
	)
}

export default EventFilter
