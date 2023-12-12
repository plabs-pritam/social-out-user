/** @format */

import { IonIcon, IonText } from "@ionic/react";
import React from "react";

interface props {
  icon: any;
  title: string;
  onClick?: any;
}

const ProfileCard: React.FC<props> = ({ icon, title, onClick }) => {
  return (
    <div
      className="flex gap-3 items-center dark:text-black py-4 mt-1"
      onClick={onClick}
    >
      <IonIcon className="text-2xl" icon={icon} />
      <IonText className="block me-auto">{title}</IonText>
      <IonIcon
        className="text-xl text-neutral-500"
        icon={"/assets/icons/solar_alt-arrow-right-outline.svg"}
      />
    </div>
  );
};

export default ProfileCard;
