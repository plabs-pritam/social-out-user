/** @format */

import { IonIcon, IonRippleEffect, IonText } from '@ionic/react'
import React from 'react'

interface props {
	icon: any
	title: string
	description: string
}

const ContactDetailsCard: React.FC<props> = ({ icon, title, description }) => {
	return (
		<>
			<div className='flex gap-3 py-4'>
				<div>
					<IonIcon className='text-2xl py-1' icon={icon} />
				</div>
				<div>
					<div className=''>{title}</div>
					<div className='text-neutral-500 text-xs'>{description}</div>
				</div>
				<div className='ms-auto my-auto'>
					<IonIcon className='text-neutral-500 text-xs -rotate-90' icon={'/assets/icons/solar_alt-arrow-right-outline.svg'} />
				</div>
			</div>
            <div className='gradient-divider last-of-type:hidden'></div>
		</>
	)
}

export default ContactDetailsCard
