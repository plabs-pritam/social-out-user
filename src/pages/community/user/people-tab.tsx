/** @format */

import { IonAvatar, IonContent, IonIcon, IonText } from '@ionic/react'
import SeeAllMembers from '../community-details/see-all-members'
import { admins, communityMembers, moderators } from '../../../data/user-data'

const PeopleTab = () => {
	return (
		<IonContent className="ion-padding">
			<div className='flex gap-4 flex-col'>
				<SeeAllMembers {...admins} />
				<SeeAllMembers {...moderators} />
				<SeeAllMembers {...communityMembers} />
			</div>
		</IonContent>
	)
}

export default PeopleTab
