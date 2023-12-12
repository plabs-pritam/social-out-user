import { IonText } from "@ionic/react";
import { useState } from "react";

const ShortDescription: React.FC<{ text: string }> = ({ text }) => {
	let [showFullText, setShowFullText] = useState<boolean>(false);

	if (text?.length === 0) {
		return <></>;
	}

	return (
		<IonText color={"light"}>
			{!showFullText && text?.length > 120 ? text.slice(0, 120) : text}
			{text?.length > 120 && (
				<IonText color="primary" onClick={() => setShowFullText(!showFullText)}>
					&nbsp;{!showFullText ? "Read more..." : "Show less..."}
				</IonText>
			)}
		</IonText>
	);
};

export default ShortDescription;
