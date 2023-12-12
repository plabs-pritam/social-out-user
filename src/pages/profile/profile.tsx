/** @format */
import Faq from "./faq";
import Feedback from "./Feedback";
import { menuList } from "./menu-list";
import React, { useState } from "react";
import ProfileCard from "./profile-card";
import EditProfile from "./edit-profile";
import { useDispatch } from "react-redux";
import ProfileHeader from "./profile-header";
import { setUser } from "../../store/reducer/user";
import { IonModal, useIonRouter } from "@ionic/react";
import DefaultLayout from "../../layouts/DefaultLayout";
import { Preferences } from "@capacitor/preferences";

const Profile: React.FC = () => {
  let dispatch = useDispatch();
  let router = useIonRouter();
  const [showFaq, setShowFaq] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);
  const [editProfileModal, setEditProfileModal] = useState(false);

  let actionPayload = {
    setShowFaq,
    setShowFeedback,
    setEditProfileModal,
    logout: async () => {
      dispatch(setUser(null));
      await Preferences.remove({ key: "userAuth" });
      router.push("/", "forward", "push");
    },
  };

  return (
    <>
      <DefaultLayout title="Profile">
        <div className="pb-32">
          <ProfileHeader />
          <div className="p-5">
            {menuList(actionPayload).map((items, index) => (
              <div key={"key" + index}>
                <ProfileCard {...items} />
                {index === 1 && <div className="border my-2"></div>}
              </div>
            ))}
          </div>
        </div>
      </DefaultLayout>
      <IonModal isOpen={editProfileModal}>
        <EditProfile onCloseModal={() => setEditProfileModal(false)} />
      </IonModal>
      <IonModal isOpen={showFeedback}>
        <Feedback handleClose={() => setShowFeedback(false)} />
      </IonModal>
      <IonModal isOpen={showFaq}>
        <Faq handleClose={() => setShowFaq(false)} />
      </IonModal>
    </>
  );
};

export default Profile;
