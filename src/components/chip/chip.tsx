/** @format */

import { IonButton } from '@ionic/react'
import React, { FC, useState } from 'react'

const Chip: FC<any> = (props) => {
	const [fill, setFill] = useState(false)
	return (
		<IonButton
			className={`capitalize m-0 rounded-full border text-[12px] ${
				(fill && 'bg-[var(--ion-color-primary)]') || ''
			}`}
			shape='round'
			fill='clear'
			size='small'
			color={(fill && 'white') || 'secondary'}
			onClick={() => setFill((ps: any) => !ps)}>
			{props.children}
		</IonButton>
	)
}

export default Chip
