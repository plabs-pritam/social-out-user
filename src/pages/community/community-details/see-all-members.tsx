/** @format */

import { IonAvatar, IonImg, IonText } from "@ionic/react";
import { FC } from "react";

export interface SeeAllMembersProps {
  title: string;
  description: string;
  membersList: membersListType[];
}

export interface membersListType {
  name: string;
  profileImg: string;
	role?: string;
}

const SeeAllMembers: FC<SeeAllMembersProps> = (props) => {
  return (
    <div className="flex gap-3 flex-col mt-3">
      <div className="flex justify-between">
        <IonText className="text-lg text-black font-bold capitalize">
          {props.title}
        </IonText>
        <IonText className="" color="primary">
          View all
        </IonText>
      </div>
      <IonText color="light" className="text-sm">
        {props.description}
      </IonText>
      {props.membersList &&
        props.membersList.map((member, index) => (
          <div
            key={"member" + index}
            className="flex justify-between items-center"
          >
            <div className="flex gap-3 items-center">
              <div>
                <IonAvatar class="w-[36px] h-[36px]">
                  <IonImg src={member.profileImg} />
                </IonAvatar>
              </div>
              <div className="capitalize text-black">{member.name}</div>
            </div>

            {member.role && (
              <div className="flex py-[6px] px-3 items-center gap-[2px] bg-[#FFF6ED] border-[0.5px] border-[#FF8A00] rounded-3xl">
                <img
                  src="/assets/icons/solar_medal-ribbons-star-bold.svg"
                  alt=""
                />
                <IonText className="text-[#FF8A00] text-xs font-semibold leading-normal">
                  {member.role}
                </IonText>
              </div>
            )}
          </div>
        ))}
    </div>
  );
};

export default SeeAllMembers;
