import { generateId, useIonRouter } from "@ionic/react";
import { FC } from "react";
import ChooseComponent from "./choose-component";

let initLanguageList = [
  {
    id: generateId().toString(),
    title: "English (UK)",
    subtitle: "English (UK)",
  },
  {
    id: generateId().toString(),
    title: "Hindi",
    subtitle: "Hindi (India)",
  },
];

const ChooseLanguage: FC = () => {
  const router = useIonRouter();
  return (
    <ChooseComponent
      onBack={() => router.push("/choose-location", "back")}
      list={initLanguageList}
      title="Language preference"
      listHeading="Languages"
      onContinue="/user/home"
    />
  );
};

export default ChooseLanguage;
