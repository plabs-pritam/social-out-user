/** @format */

import { IonButton } from '@ionic/react'
import { FC } from 'react'

export interface PrimaryButtonTypes {
	children?: any
	routerLink?: string
	onClick?: any
}

const PrimaryButton: FC<PrimaryButtonTypes> = ({ children, routerLink, onClick }) => {
	return (
		<IonButton onClick={onClick} routerLink={routerLink} size='large' className='w-full capitalize rounded-lg text-[18px] overflow-hidden' >
			{children}
		</IonButton>
	)
}

export default PrimaryButton
