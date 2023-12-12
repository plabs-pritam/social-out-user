/** @format */

import React from 'react'
import Header from '../../components/headers/header'
import { IonAvatar, IonContent, IonIcon, IonImg, useIonRouter } from '@ionic/react'
import getRandomId from '../../helperFunctions/getRandomId'
import CommentCard from '../../components/cards/comment-card'
import NotificationCard from './notification-card'

const Comments = [
	{
		id: getRandomId(),
		name: 'Ronald Richards',
		time: '10min ago',
		comment:
			'Fusce auctor, nibh a tempor cursus, erat lorem facilisis sapien, sed euismod leo quam vitae lorem.',
		profileImg: 'https://picsum.photos/30',
		replierName: 'Wade Warren',
		replierProfileImg: 'https://picsum.photos/20',
		totalReplies: 3,
		readed: false,
	},
	{
		id: getRandomId(),
		name: 'Ronald Richards',
		time: '10min ago',
		comment:
			'Fusce auctor, nibh a tempor cursus, erat lorem facilisis sapien, sed euismod leo quam vitae lorem.',
		profileImg: 'https://picsum.photos/40',
		replierName: 'Wade Warren',
		replierProfileImg: 'https://picsum.photos/10',
		totalReplies: 0,
		readed: false,
	},
	{
		id: getRandomId(),
		name: 'Ronald Richards',
		time: '10min ago',
		comment:
			'Fusce auctor, nibh a tempor cursus, erat lorem facilisis sapien, sed euismod leo quam vitae lorem.',
		profileImg: 'https://picsum.photos/40',
		replierName: 'Wade Warren',
		replierProfileImg: 'https://picsum.photos/10',
		totalReplies: 1,
		readed: false,
	},
]

const Notification = () => {
	const ionRouter = useIonRouter()
	return (
		<IonContent color='white'>
			<div className='text-black'>
				<div className='sticky top-0 z-10 flex gap-3 items-center bg-white p-4'>
					<IonIcon
						onClick={() => ionRouter.push('/home', 'back', 'push')}
						className='text-2xl cursor-pointer'
						icon={'/assets/icons/solar_arrow-left-outline.svg'}
					/>
					<div className='text-[18px] font-bold'>Notification</div>
				</div>

				<div className='flex gap-5 flex-col p-4'>
					<div className='flex items-center justify-between'>
						<div className='text-[18px] font-bold'>Today</div>
						<div className='text-sm text-[var(--ion-color-primary)] font-medium'>
							Mark all as read
						</div>
					</div>
					{Comments.map((comment) => (
						<NotificationCard {...comment} />
					))}
					<div className='flex items-center justify-between'>
						<div className='text-[18px] font-bold'>Yesterday</div>
						<div className='text-sm text-[var(--ion-color-primary)] font-medium'>
							Mark all as read
						</div>
					</div>
					{Comments.map((comment) => (
						<NotificationCard {...comment} />
					))}
				</div>
			</div>
		</IonContent>
	)
}

export default Notification
