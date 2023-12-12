/** @format */

import { IonAvatar, IonIcon, IonImg } from '@ionic/react'

interface props {
	id: string
	name: string
	time: string
	comment: string
	profileImg: string
	replierName: string
	replierProfileImg: string
	totalReplies: number
}

const CommentCard: React.FC<props> = ({
	id,
	name,
	time,
	comment,
	profileImg,
	replierName,
	replierProfileImg,
	totalReplies = 0,
}) => {
	return (
		<div className='flex gap-3'>
			<div>
				<IonAvatar className='w-[36px] h-[36px]'>
					<IonImg src={profileImg} />
				</IonAvatar>
			</div>
			<div>
				<div className='flex gap-3 items-center py-1'>
					<div className='font-medium'>{name}</div>
					<div className='text-[#999]'>{time}</div>
					<div className='text-lg ms-auto'>
						<IonIcon icon='/assets/icons/solar_heart-linear.svg' />
					</div>
				</div>
				<div className='border-s-4 px-3'>{comment}</div>
				<div className='font-medium text-[var(--ion-color-primary)] py-1 cursor-pointer'>
					Reply
				</div>
				{totalReplies > 0 && (
					<div className='flex gap-2 items-center mt-2'>
						<IonAvatar className='w-[36px] h-[36px]'>
							<IonImg src={replierProfileImg} />
						</IonAvatar>
						<b className='font-medium'>{replierName}</b>
						{totalReplies > 1 && (
							<span className='text-[#999]'> and {totalReplies} more replied</span>
						)}
					</div>
				)}
			</div>
		</div>
	)
}

export default CommentCard
