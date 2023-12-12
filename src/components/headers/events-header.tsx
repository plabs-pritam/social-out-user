import { IonRouterLink, IonText, useIonRouter } from "@ionic/react";
import { useDispatch } from "react-redux";
import { setHeader } from "../../store/reducer/ui-controller";

interface EventHeaderProps {
	eventName: string;
	icon?: string;
	iconBg?: string;
	routerLink: string | undefined;
}

const EventHeader: React.FC<EventHeaderProps> = ({
	icon,
	iconBg,
	eventName,
	routerLink,
}) => {
	const router = useIonRouter();
	const dispatch = useDispatch();

	const handleNavigate = () => {
		if (routerLink) {
			dispatch(setHeader(eventName));
			router.push(routerLink, "forward", "push");
		}
	};

	return (
		<div className="flex items-center w-full justify-between p-4">
			<div className="flex gap-[10px] items-center">
				{icon && (
					<div
						className={`flex w-10 h-10 items-center justify-center p-[10px] rounded-[20px] ${iconBg}`}>
						<img src={icon} />
					</div>
				)}
				<IonText className="text-lg text-[#010101] font-semibold">
					{eventName}
				</IonText>
			</div>
			{routerLink && (
				<div onClick={handleNavigate}>
					<IonText color="primary">See all</IonText>
				</div>
			)}
		</div>
	);
};

export default EventHeader;
