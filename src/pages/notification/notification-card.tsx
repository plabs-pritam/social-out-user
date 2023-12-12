/** @format */

import { IonAvatar, IonIcon, IonImg } from '@ionic/react'
import HeartIcon from '../../assets/icons/solar_heart-linear.svg'

interface props {
	id: string
	name: string
	time: string
	comment: string
	profileImg: string
	replierName: string
	replierProfileImg: string
	totalReplies: number
	readed: boolean
}

const NotificationCard: React.FC<props> = ({
	id,
	name,
	time,
	comment,
	profileImg,
	replierName,
	replierProfileImg,
	totalReplies = 0,
	readed,
}) => {
	return (
		<div className='flex gap-3'>
			<div>
				<IonAvatar className='w-[36px] h-[36px] relative'>
					{!readed && (
						<div className='absolute top-0 start-0 h-[8px] w-[8px] rounded-full border bg-blue-400'></div>
					)}
					<IonImg src={profileImg} />
				</IonAvatar>
			</div>
			<div>
				<div className='flex gap-3 items-center py-1'>
					<div className='font-medium'>{name}</div>
				</div>
				<div className='border-s-4 px-3'>{comment}</div>
				<div className='text-sm font-medium text-[#999] py-1 cursor-pointer'>{time}</div>
			</div>
		</div>
	)
}

export default NotificationCard
