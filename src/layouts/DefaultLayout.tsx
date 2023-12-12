/** @format */

import { IonContent, IonSpinner } from "@ionic/react";
import TabBar from "../components/tab-bar/tab-bar";
import Header, { HeaderProps } from "../components/headers/header";
import { useAppSelector } from "../store/store";

interface DefaultLayoutProps extends HeaderProps {
	children?: any;
	hideTabBar?: boolean;
	paddingBottom?: boolean;
}

let PageLoader = () => {
	return (
		<div
			className=""
			style={{
				top: 0,
				left: 0,
				right: 0,
				bottom: 0,
				zIndex: -1,
				position: "absolute",
				background: "white",
			}}>
			<IonSpinner
				name="crescent"
				className="mt-72 ml-40 w-10 h-10"></IonSpinner>
		</div>
	);
};

const DefaultLayout: React.FC<DefaultLayoutProps> = (props) => {
	let { reload } = useAppSelector((state) => state.uiController);
	return (
		<IonContent fullscreen color="white">
			<div className="flex flex-col h-full overflow-auto">
				<div className="sticky top-0 z-50">
					<Header {...props} />
				</div>
				{reload && <PageLoader />}
				<div
					className={`flex-1 overflow-auto ${
						props.paddingBottom ? "pb-24" : "pb- 3"
					}`}>
					{props.children}
				</div>
				{!props.hideTabBar && (
					<div className="absolute bottom-0 w-full z-50">
						<TabBar />
					</div>
				)}
			</div>
		</IonContent>
	);
};

export default DefaultLayout;
