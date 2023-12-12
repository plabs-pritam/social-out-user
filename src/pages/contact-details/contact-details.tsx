/** @format */

import ContactDetailsCard from "./contact-details-card";
import NotificationIcon from "../../assets/icons/notification.svg";
import NotificationDotIcon from "../../assets/icons/notification-dot.svg";
import GalleryIcon from "../../assets/icons/gallery.svg";
import TimerIcon from "../../assets/icons/timer.svg";
import DefaultLayout from "../../layouts/DefaultLayout";
import ContactDetailsHeader from "./contact-details-header";

const listItems = [
  {
    icon: NotificationIcon,
    title: "Mute notifications",
    description:
      "Security notifications, change number, account information, verification",
  },
  {
    icon: NotificationDotIcon,
    title: "Custom notifications",
    description: "Block contacts, disappearing messages",
  },
  {
    icon: GalleryIcon,
    title: "Media visibility",
    description: "Themes, wallpapers, chat history",
  },
  {
    icon: TimerIcon,
    title: "Disappearing messages ",
    description: "Messages, groups and call tones",
  },
  {
    icon: "/assets/icons/suit-case.svg",
    title: "Encryption",
    description: "Network usage, auto-download",
  },
];

const ContactDetails: React.FC = () => {
  return (
    <DefaultLayout>
      <div className="pb-32">
        <ContactDetailsHeader />
        <div>
          <div className="p-5">
            {listItems.map((items) => (
              <ContactDetailsCard {...items} />
            ))}
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default ContactDetails;
