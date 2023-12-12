/** @format */

import { IonAvatar, IonButton, IonImg, IonText } from '@ionic/react'
import React, { FC, useState } from 'react'

export interface ChatCardProps {
	id: string
	profileImg: string
	name: string
	message: string
	time: string
}

const ChatCard: FC<ChatCardProps> = (props) => {
	return (
		<div className='flex gap-3'>
			<div>
				<IonAvatar className='h-[50px] w-[50px]'>
					<IonImg src={props.profileImg} />
				</IonAvatar>
			</div>
			<div className='flex-1 flex items-center justify-between text-black'>
				<div>
					<IonText class='font-medium'>{props.name}</IonText>
					<IonText class='block text-sm text-neutral-400'>{props.message}</IonText>
				</div>
				<IonText class='text-sm text-neutral-400'>{props.time}</IonText>
			</div>
		</div>
	)
}

export default ChatCard
