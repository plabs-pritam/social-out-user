export const menuList = (actionPayload: any) => {
  return [
    {
      icon: "/assets/icons/solar_calendar-mark-outline.svg",
      title: "Manage Events",
    },
    {
      icon: "/assets/icons/solar_chat-round-dots-outline.svg",
      title: "Message Center",
    },
    {
      icon: "/assets/icons/solar_user-outline.svg",
      title: "Profile Settings",
      onClick: () => actionPayload.setEditProfileModal(true),
    },
    {
      icon: "/assets/icons/solar_bell-outline.svg",
      title: "Notification",
    },
    {
      icon: "/assets/icons/solar_wallet-money-outline.svg",
      title: "Payment Methods",
    },
    {
      icon: "/assets/icons/solar_list-arrow-up-outline.svg",
      title: "Linked Accounts",
    },
    {
      icon: "/assets/icons/solar_ticket-outline.svg",
      title: "Ticket Issues",
    },
    {
      icon: "/assets/icons/suit-case.svg",
      title: "Security",
    },
    {
      icon: "/assets/icons/solar_text-outline.svg",
      title: "Language",
    },
    {
      icon: "/assets/icons/solar_eye-outline.svg",
      title: "Dark Mode",
    },
    {
      icon: "/assets/icons/solar_question-circle-outline.svg",
      title: "Help Center",
      onClick: () => actionPayload.setShowFaq(true),
    },
    {
      icon: "/assets/icons/solar_star-outline.svg",
      title: "Rate us",
      onClick: () => actionPayload.setShowFeedback(true),
    },
    {
      icon: "/assets/icons/solar_export-outline.svg",
      title: "Logout",
      onClick: () => actionPayload.logout(),
    },
  ];
};
