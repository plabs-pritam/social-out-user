import { IonAvatar, IonIcon, IonText } from '@ionic/react'
import SeeAllMembers from './see-all-members'
import { admins, communityMembers, moderators } from '../../../data/user-data'

const DescriptionTab = () => {
	return (
		<div className='flex gap-4 flex-col'>
			<div>
				<IonText className='block text-xl font-bold mb-2'>About Community</IonText>
				<IonText className='block' color='light'>
					Pellentesque porttitor libero quis lorem efficitur tincidunt. Nulla facilisi.
					Pellentesque ac tellus semper, mollis est viverra, accumsan felis
					<IonText color='primary'>&nbsp;Read more...</IonText>
				</IonText>
			</div>
			<div className='flex gap-3'>
				<div>
					<IonAvatar className='w-[40px] h-[40px] bg-[#F9ECFE] grid place-items-center'>
						<IonIcon className='h-full object-cover' icon='/assets/icons/tickmark.svg' />
					</IonAvatar>
				</div>
				<div>
					<IonText class='block font-bold'>Monday, December 24, 2022</IonText>
					<IonText class='block ' color='light'>
						18:00 - 23:00 PM (GMT +07:00)
					</IonText>
				</div>
			</div>
			<div className='flex gap-3'>
				<div>
					<IonAvatar className='w-[40px] h-[40px] bg-[#F9ECFE] grid place-items-center'>
						<IonIcon className='h-full object-cover' icon='/assets/icons/tickmark.svg' />
					</IonAvatar>
				</div>
				<div>
					<IonText class='block font-bold'>Monday, December 24, 2022</IonText>
					<IonText class='block ' color='light'>
						18:00 - 23:00 PM (GMT +07:00)
					</IonText>
				</div>
			</div>
			<SeeAllMembers {...admins} />
			<SeeAllMembers {...moderators} />
			<SeeAllMembers {...communityMembers} />
		</div>
	)
}

export default DescriptionTab
