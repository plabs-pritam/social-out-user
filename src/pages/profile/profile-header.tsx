/** @format */

import React, { useEffect, useState } from "react";
import { Preferences } from "@capacitor/preferences";
import { IonAvatar, IonImg, IonText } from "@ionic/react";
import { useAppSelector } from "../../store/store";

const ProfileHeader: React.FC = () => {
  let { user } = useAppSelector((state) => state.user);

  return (
    <div className="flex flex-col gap-3 text-center text-black p-5">
      <div>
        <IonAvatar className="w-[120px] h-[120px] mx-auto">
          <IonImg className="object-cover" src={user?.imageUrl} />
        </IonAvatar>
      </div>
      <div className="text-2xl font-bold capitalize">
        {user?.displayName || "n/a"}
      </div>
      <div className="flex justify-around mt-6">
        <div>
          <IonText className="block text-2xl font-bold">
            {user?.useevents || 0}
          </IonText>
          <IonText color="light" className="block text-sm">
            Events
          </IonText>
        </div>
        <div>
          <IonText className="block text-2xl font-bold">
            {user?.followers || 0}
          </IonText>
          <IonText color="light" className="block text-sm">
            Followers
          </IonText>
        </div>
        <div>
          <IonText className="block text-2xl font-bold">
            {user?.following || 0}
          </IonText>
          <IonText color="light" className="block text-sm">
            Following
          </IonText>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
