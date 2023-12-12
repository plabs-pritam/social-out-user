/** @format */
import React from "react";
import DefaultLayout from "../layouts/DefaultLayout";
// import ContactCard from "../components/cards/contact-card";
import { useAppSelector } from "../store/store";
import { IonRouterLink, IonText } from "@ionic/react";

const Contacts: React.FC = () => {
	// const contactList: any = useAppSelector((state) => state.contact.contactList);
	// console.log("contactList", contactList);
	return (
		<DefaultLayout title="Chats">
			<div className="flex flex-col px-5 h-full">
				{/* <h6>Contacts ({contactList.length})</h6> */}
				{/* <div className="flex flex-col gap-1">
          {(contactList.length > 0 &&
            contactList.map((contact: any) => (
              <ContactCard
                key={contact?.id}
                id={contact?.id}
                name={contact?.username}
                message={contact?.lastMessage}
                profileImg={contact?.profileImg}
                time=""
              />
            ))) || <IonText className="m-auto pb-12">No Contacts</IonText>}
        </div> */}
			</div>
		</DefaultLayout>
	);
};

export default Contacts;
