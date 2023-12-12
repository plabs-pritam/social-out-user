import { IonContent, IonIcon, IonImg, IonItem, IonText } from "@ionic/react";

function EventOptions({
	event,
	ticket,
	closeOption,
}: {
	event: any;
	ticket: any;
	closeOption: any;
}) {
	return (
		<IonContent className="ion-padding-vertical">
			<IonItem button>
				<IonIcon
					className="me-2"
					icon="/assets/icons/solar_calendar-mark-outline.svg"
				/>
				<IonText>Add to Calendar</IonText>
			</IonItem>
			<IonItem button>
				<IonIcon
					className="me-2"
					icon="/assets/icons/solar_letter-outline.svg"
				/>
				<IonText>Contact Organizer</IonText>
			</IonItem>
			<IonItem button>
				<IonIcon
					className="me-2"
					icon="/assets/icons/solar_danger-circle-outline.svg"
				/>
				<IonText color={"danger"}> Report Event</IonText>
			</IonItem>
		</IonContent>
	);
}

export default EventOptions;
