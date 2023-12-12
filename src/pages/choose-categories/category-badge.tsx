/** @format */

import { IonButton } from '@ionic/react'
import React, { useState } from 'react'

const CategoryBadge = (props: any) => {
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
			onClick={() => setFill((ps) => !ps)}>
			{props.children}
		</IonButton>
	)
}

export default CategoryBadge
