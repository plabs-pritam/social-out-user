import {
	IonAvatar,
	IonButton,
	IonContent,
	IonImg,
	IonText,
} from "@ionic/react";
import HrLine from "../../../components/hr-line";
import { communityRulesData } from "../../../data/user-data";
import {
	FC,
	JSXElementConstructor,
	Key,
	ReactElement,
	ReactFragment,
	ReactPortal,
	useEffect,
	useState,
} from "react";
import { getCommunity, getCommunityId } from "../../../services/community";
import { useSelector } from "react-redux";
import { useAppSelector } from "../../../store/store";

interface props {
	id: string;
	image: string;
	membersProfileImg: string[];
	title: string;
	members: string;
}
const AboutCommunity: FC<props> = ({
	id,
	image,
	membersProfileImg,
	title,
	members,
}) => {
	let [data, setData] = useState<any>([]);
	let [rule, setRules] = useState<any>([]);
	const [showAll, setShowAll] = useState(false);
	const displayLimit = 4;

	const toggleShowAll = () => {
		setShowAll(!showAll);
	};
	const toggleShowLess = () => {
		setShowAll(false);
	};

	useEffect(() => {
		fetchCommunityDetails();
	}, []);

	const fetchCommunityDetails = async () => {
		try {
			let payload: any = {
				communityID: id,
			};
			const response = await getCommunityId(payload);
			if (response.ok) {
				console.log("Community", response.data as any);
				data = (response.data as any).data;
				rule = (response.data as any).rules;
				setRules(JSON.parse(JSON.stringify(rule)));
				setData(JSON.parse(JSON.stringify(data)));
			}
			console.log("user--");
		} catch (error: any) {
			console.log("Error occurred while getting event", error.message);
		}
	};

	console.log();

	return (
		<IonContent className="ion-padding">
			<IonImg
				className="object-cover h-[230px] rounded-xl overflow-hidden mb-4"
				src="/assets/images/community/Rectangle 130.png"
				alt="community image"
			/>
			<div className="flex flex-col gap-[11px] items-center">
				<div className="flex justify-between w-full items-center">
					<div className="me-auto">
						<IonText color="dark" className="block text-xl font-semibold">
							{data.title}
						</IonText>
					</div>
					<div>
						<IonButton
							shape="round"
							fill="clear"
							className="capitalize font-bold rounded-full bg-[#F9ECFE]">
							Follow
						</IonButton>
					</div>
				</div>

				<div className="flex gap-2 w-full items-center">
					<div className="flex justify-center items-center">
						<IonAvatar className="w-[32px] h-[32px]">
							<IonImg
								className="h-full object-cover"
								src="/assets/images/community/Rectangle 130.png"
							/>
						</IonAvatar>
						<IonAvatar className="w-[32px] h-[32px] ml-[-9px]">
							<IonImg
								className="h-full object-cover"
								src="/assets/images/community/Rectangle 130.png"
							/>
						</IonAvatar>
						<IonAvatar className="w-[32px] h-[32px] ml-[-9px]">
							<IonImg
								className="h-full object-cover"
								src="/assets/images/community/Rectangle 130.png"
							/>
						</IonAvatar>
					</div>

					<p className="text-[#898989] text-[13px] leading-normal font-normal">
						12.1k people
					</p>
				</div>
				<IonText className="block" color="light">
					Pellentesque porttitor libero quis lorem efficitur tincidunt. Nulla
					facilisi. Pellentesque ac tellus semper, mollis est viverra, accumsan
					felis
					<IonText color="primary">&nbsp;Read more...</IonText>
				</IonText>
			</div>

			<HrLine />

			<div className="flex flex-col gap-4 items-start">
				<IonText className="text-[#010101] text-lg font-semibold leading-6">
					Rules
				</IonText>
				<div className="flex flex-col gap-4 items-start">
					{rule
						.slice(0, showAll ? rule.length : displayLimit)
						.map((rules: any, index: number) => (
							<div className="flex items-start gap-1" key={index}>
								<IonText className="text-black text-sm font-normal leading-[18px]">
									{index + 1}.
								</IonText>
								<IonText className="text-black text-sm font-normal leading-[18px]">
									{rules.Title}
								</IonText>
							</div>
						))}
				</div>
				{rule.length > displayLimit && (
					<div>
						{!showAll ? (
							<IonText
								className="text-[#6E0699] text-sm font-bold leading-[18px] cursor-pointer"
								onClick={toggleShowAll}>
								Show all rules...
							</IonText>
						) : (
							<IonText
								className="text-[#6E0699] text-sm font-bold leading-[18px] cursor-pointer"
								onClick={toggleShowLess}>
								Show less...
							</IonText>
						)}
					</div>
				)}
			</div>
		</IonContent>
	);
};

export default AboutCommunity;
