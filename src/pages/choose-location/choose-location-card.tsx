/** @format */

import { IonCheckbox, IonItem, IonLabel, IonRadio } from '@ionic/react'
import { FC } from 'react'

const ChooseLocationCard: FC<{ id: string; title: string; subtitle: string }> = ({
	id,
	title,
	subtitle,
}) => {
	return (
		<IonItem className='py-2' mode='ios'>
			<div>
				<h4 className='text-xl text-[#2A2A2A] font-semibold leading-normal'>{title}</h4>
				<small className='text-base text-[#696969] font-normal leading-[18px]'>
					{subtitle}
				</small>
			</div>
			<IonRadio slot='end' />
			<IonLabel/>
		</IonItem>
	)
}

export default ChooseLocationCard
