/** @format */

import React, { FC, useState } from 'react'
import DefaultLayout from '../../layouts/DefaultLayout'
import getRandomId from '../../helperFunctions/getRandomId'
import ChatCard from './chat-card'
import { IonButton, IonRouterLink, IonSegment, IonSegmentButton } from '@ionic/react'
import Chip from '../../components/chip/chip'
import { chatlist } from '../../data/user-data'



const tags = [
	{
		id: getRandomId(),
		name: '💬 General Messages',
	},
	{
		id: getRandomId(),
		name: '🎫 Event Discussions',
	},
	{
		id: getRandomId(),
		name: '🏴 Community Discussions',
	},
]

const Chats: FC = () => {
	const [fill, setFill] = useState(false)
	const [activeTag, setActiveTag] = useState<string>(tags[0].name)

	const title = activeTag.split(' ')[1] + " " + activeTag.split(' ')[2];

	return (
		<DefaultLayout title={title} hideTabBar showBackButton showSearchButton>
			<IonSegment
				className='tag-selection flex bg-white sticky top-0 px-2'
				scrollable={true}
				value={activeTag}>
				{tags.map((tag) => (
					<div>
						<IonSegmentButton
							className='capitalize'
							value={tag.name}
							onClick={() => setActiveTag(tag.name)}>
							{tag.name}
						</IonSegmentButton>
					</div>
				))}
			</IonSegment>
			<div className='p-4'>
				<div className='flex flex-col gap-5'>
					{chatlist.map((chatitem) => (
						<IonRouterLink routerLink='/user-chat' key={chatitem.id}>
							<ChatCard {...chatitem} />
						</IonRouterLink>
					))}
				</div>
			</div>
		</DefaultLayout>
	)
}

export default Chats
