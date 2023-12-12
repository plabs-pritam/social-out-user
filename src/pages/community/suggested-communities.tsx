/** @format */

import DefaultLayout from '../../layouts/DefaultLayout'
import { IonRouterLink, IonSegment, IonSegmentButton, IonText, generateId } from '@ionic/react'
import getRandomId from '../../helperFunctions/getRandomId'
import EventsHorizontalCard from '../../components/cards/events-horizontal-card'
import SeeAllList from '../../components/pages/see-all-list'

const categoriesList = [
	{
		id: getRandomId(),
		categoryName: '✅️ All',
	},
	{
		id: getRandomId(),
		categoryName: '🎶 music & concert',
	},
	{
		id: getRandomId(),
		categoryName: '🥗 Food & nutrition',
	},
	{
		id: getRandomId(),
		categoryName: '✏️ Design',
	},
	{
		id: getRandomId(),
		categoryName: '🎙️ comedy & karoke',
	},
	{
		id: getRandomId(),
		categoryName: '🎭 performing arts',
	},
	{
		id: getRandomId(),
		categoryName: '💻 technology',
	},
	{
		id: getRandomId(),
		categoryName: '🎉 Party Popper',
	},
	{
		id: getRandomId(),
		categoryName: '🩺 health & well-being',
	},
	{
		id: getRandomId(),
		categoryName: '🥋 Martial arts',
	},
	{
		id: getRandomId(),
		categoryName: '⚖️ Law & prejudice',
	},
	{
		id: getRandomId(),
		categoryName: '🎮 Gaming',
	},
	{
		id: getRandomId(),
		categoryName: '🔭 space & technology',
	},
	{
		id: getRandomId(),
		categoryName: '🎫 Movies & fiction',
	},
	{
		id: getRandomId(),
		categoryName: '🏺 Pottery Making',
	},
	{
		id: getRandomId(),
		categoryName: '🤿 scuba Diving',
	},
	{
		id: getRandomId(),
		categoryName: '🎨 Art & culture',
	},
]

const verticalCardList = [
	{
		id: generateId(),
		image: 'https:picsum.photos/0',
		title: 'TroyBoi India Tour',
		date: '12th Jun, 2023',
		location: 'Lamington Road, Mumbai',
		membersProfileImg: [
			'https:picsum.photos/1',
			'https:picsum.photos/2',
			'https:picsum.photos/3',
		],
		totalMembers: '5',
	},
	{
		id: generateId(),
		image: 'https:picsum.photos/1',
		title: 'TroyBoi India Tour',
		date: '12th Jun, 2023',
		location: 'Lamington Road, Mumbai',
		membersProfileImg: [
			'https:picsum.photos/1',
			'https:picsum.photos/2',
			'https:picsum.photos/3',
		],
		totalMembers: '5',
	},
	{
		id: generateId(),
		image: 'https:picsum.photos/2',
		title: 'TroyBoi India Tour',
		date: '12th Jun, 2023',
		location: 'Lamington Road, Mumbai',
		membersProfileImg: [
			'https:picsum.photos/1',
			'https:picsum.photos/2',
			'https:picsum.photos/3',
		],
		totalMembers: '5',
	},
]

const SuggestedCommunities = () => {
	return (
		<SeeAllList
			title='Suggested Communities'
			cardLink='/community/community-details'
			categoriesList={categoriesList}
			verticalCardList={verticalCardList}
		/>
	)
}

export default SuggestedCommunities
