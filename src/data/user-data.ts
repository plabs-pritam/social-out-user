import { generateId } from "@ionic/react";

import getRandomId from "../helperFunctions/getRandomId";

export const Posts = [
	{
		id: getRandomId(),
		name: "Jane Cooper",
		message:
			"Aliquam erat volutpat. Integer tincidunt scelerisque mi, eget semper diam luctus vel! 🔥",
		time: "10min ago",
		image: "/assets/images/Avatar.png",
		likes: "5.2k",
		dislikes: "21",
		comments: "21",
		shares: "21",
	},
	{
		id: getRandomId(),
		name: "Jane Cooper",
		message:
			"Aliquam erat volutpat. Integer tincidunt scelerisque mi, eget semper diam luctus vel! 🔥",
		time: "10min ago",
		image: "/assets/images/Avatar.png",
		likes: "5.2k",
		dislikes: "21",
		comments: "21",
		shares: "21",
	},
];

export const categoriesList = [
	{
		id: getRandomId(),
		categoryName: "✅️ All",
	},
	{
		id: getRandomId(),
		categoryName: "🎶 music & concert",
	},
	{
		id: getRandomId(),
		categoryName: "🥗 Food & nutrition",
	},
	{
		id: getRandomId(),
		categoryName: "✏️ Design",
	},
	{
		id: getRandomId(),
		categoryName: "🎙️ comedy & karoke",
	},
	{
		id: getRandomId(),
		categoryName: "🎭 performing arts",
	},
	{
		id: getRandomId(),
		categoryName: "💻 technology",
	},
	{
		id: getRandomId(),
		categoryName: "🎉 Party Popper",
	},
	{
		id: getRandomId(),
		categoryName: "🩺 health & well-being",
	},
	{
		id: getRandomId(),
		categoryName: "🥋 Martial arts",
	},
	{
		id: getRandomId(),
		categoryName: "⚖️ Law & prejudice",
	},
	{
		id: getRandomId(),
		categoryName: "🎮 Gaming",
	},
	{
		id: getRandomId(),
		categoryName: "🔭 space & technology",
	},
	{
		id: getRandomId(),
		categoryName: "🎫 Movies & fiction",
	},
	{
		id: getRandomId(),
		categoryName: "🏺 Pottery Making",
	},
	{
		id: getRandomId(),
		categoryName: "🤿 scuba Diving",
	},
	{
		id: getRandomId(),
		categoryName: "🎨 Art & culture",
	},
];

export const verticalCardList = [
	{
		id: generateId(),
		image: "/assets/images/events/event.jpg",
		title: "TroyBoi India Tour",
		date: "12th Jun, 2023",
		location: "Lamington Road, Mumbai",
		membersProfileImg: [
			"/assets/images/Avatar.png",
			"/assets/images/user.jpg",
			"/assets/images/Avatar.png",
		],
		totalMembers: "5",
	},
	{
		id: generateId(),
		image: "/assets/images/events/event.jpg",
		title: "TroyBoi India Tour",
		date: "12th Jun, 2023",
		location: "Lamington Road, Mumbai",
		membersProfileImg: [
			"/assets/images/Avatar.png",
			"/assets/images/user.jpg",
			"/assets/images/Avatar.png",
		],
		totalMembers: "5",
	},
	{
		id: generateId(),
		image: "/assets/images/events/event.jpg",
		title: "TroyBoi India Tour",
		date: "12th Jun, 2023",
		location: "Lamington Road, Mumbai",
		membersProfileImg: [
			"/assets/images/Avatar.png",
			"/assets/images/user.jpg",
			"/assets/images/Avatar.png",
		],
		totalMembers: "5",
	},
];

type PaymentCardData = {
	img: string;
	heading: string;
	name?: string;
	value: string;
};

type PaymentSectionData = {
	label: string;
	cards: PaymentCardData[];
};

export const paymentData: PaymentSectionData[] = [
	{
		label: "Other Payments",
		cards: [
			{
				img: "/assets/images/razor-pay.png",
				heading: "Razor Pay",
				name: "Razor",
				value: "visa",
			},
		],
	},
];

export const chatlist = [
	{
		id: getRandomId(),
		profileImg: "/assets/images/user.jpg",
		name: "Robert Fox",
		message: "Robert: I'll be leaving in 5",
		time: "11:01 AM",
	},
	{
		id: getRandomId(),
		profileImg: "/assets/images/user.jpg",
		name: "Robert Fox",
		message: "Robert: I'll be leaving in 5",
		time: "11:01 AM",
	},
	{
		id: getRandomId(),
		profileImg: "/assets/images/user.jpg",
		name: "Robert Fox",
		message: "Robert: I'll be leaving in 5",
		time: "11:01 AM",
	},
];

export const cancelReason = [
	"I want to change the date",
	"I want to change the contact details",
	"I want to change the payment option",
	"I want to change the payment option",
	"Booking placed by mistake",
	"Other",
];

export const communityRulesData = [
	"Remember the human",
	"Abide by the community rules",
	"Respect the privacy of others, interfering in others privacy will not be tolerated",
	"Don’t impersonate people or their entities",
];

export const admins = {
	title: "admins",
	description: "Pellentesque porttitor libero.",
	membersList: [
		{
			name: "Alena Kenter",
			profileImg: "https://picsum.photos/0",
			role: "Pioneer",
		},
		{
			name: "Alena Kenter",
			profileImg: "https://picsum.photos/0",
		},
		{
			name: "Alena Kenter",
			profileImg: "https://picsum.photos/0",
		},
	],
};

export const moderators = {
	title: "moderators",
	description: "Pellentesque porttitor libero.",
	membersList: [
		{
			name: "Alena Kenter",
			profileImg: "https://picsum.photos/0",
		},
		{
			name: "Alena Kenter",
			profileImg: "https://picsum.photos/0",
		},
		{
			name: "Alena Kenter",
			profileImg: "https://picsum.photos/0",
		},
	],
};

export const communityMembers = {
	title: "Community Members",
	description: "Pellentesque porttitor libero.",
	membersList: [
		{
			name: "Alena Kenter",
			profileImg: "https://picsum.photos/0",
		},
		{
			name: "Alena Kenter",
			profileImg: "https://picsum.photos/0",
		},
		{
			name: "Alena Kenter",
			profileImg: "https://picsum.photos/0",
		},
	],
};

export const LeaderBoard = [
	{
		image: "/assets/images/user.jpg",
		name: "Jenny Wilson",
		points: "5,000 Pts",
	},
	{
		image: "/assets/images/user.jpg",
		name: "Cameron Williams",
		points: "4,500 Pts",
	},
	{
		image: "/assets/images/user.jpg",
		name: "Diana Jane",
		points: "3,000 Pts",
	},
	{
		image: "/assets/images/user.jpg",
		name: "Ken Khoi",
		points: "2,700 Pts",
	},
	{
		image: "/assets/images/user.jpg",
		name: "Ken Khoi",
		points: "2,700 Pts",
	},
];

export let initCategories = [
	{
		id: getRandomId(),
		title: "🎭 performing Arts",
		active: false,
	},
	{
		id: getRandomId(),
		title: "🎨 Community Services",
		active: false,
	},
	{
		id: getRandomId(),
		title: "🎮 Gaming",
		active: false,
	},
	{
		id: getRandomId(),
		title: "🎨  Art & culture",
		active: false,
	},
	{
		id: getRandomId(),
		title: "🥂 Weddings ",
		active: false,
	},
	{
		id: getRandomId(),
		title: "🧑‍⚕️ Health & Nutrition",
		active: false,
	},
	{
		id: getRandomId(),
		title: "🎤 Music & Concerts",
		active: false,
	},
	{
		id: getRandomId(),
		title: "🎨 Conferences & Workshops",
		active: false,
	},
	{
		id: getRandomId(),
		title: "🎨 Art & Exhibitions ",
		active: false,
	},
	{
		id: getRandomId(),
		title: "🪔 Festivals & Fairs",
		active: false,
	},
	{
		id: getRandomId(),
		title: "🍜 Food & Culinary Events ",
		active: false,
	},
	{
		id: getRandomId(),
		title: "📔 Book Clubs & Literary Events",
		active: false,
	},
	{
		id: getRandomId(),
		title: "👪 Family & Kids",
		active: false,
	},
	{
		id: getRandomId(),
		title: "🏋️ Sports Events",
		active: false,
	},
	{
		id: getRandomId(),
		title: "🏟️ Comedy Shows",
		active: false,
	},
];

export let initCommunity = [
	{
		id: getRandomId(),
		image: "https://picsum.photos/200",
		title: "Performing Arts",
		active: false,
	},
	{
		id: getRandomId(),
		image: "https://picsum.photos/200",
		title: "Performing Arts",
		active: false,
	},
	{
		id: getRandomId(),
		image: "https://picsum.photos/200",
		title: "Performing Arts",
		active: false,
	},
];
