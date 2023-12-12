/** @format */

import { IonChip, IonLabel, IonRadio } from '@ionic/react'
import { FC } from 'react'

const RadioChip: FC<{
	value: string
	active: string
}> = (props) => {
	return (
		<IonChip color={props.value === props.active ? 'primary' : 'none'} className='border'>
			<IonLabel>{props.value}</IonLabel>
			<IonRadio value={props.value} className='w-0 h-0 opacity-0' />
		</IonChip>
	)
}

export default RadioChip
