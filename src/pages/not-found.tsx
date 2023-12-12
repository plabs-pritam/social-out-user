/** @format */

import { IonBackButton, IonButton, IonContent, IonText, useIonRouter } from '@ionic/react'
import React from 'react'

const NotFound = () => {
	const navigation = useIonRouter()
	return (
		<div className='flex flex-col items-center justify-center h-full'>
			<h1 className='text-4xl'>Nothing Here</h1>
			<div>
				<IonButton
					color='dark'
					onClick={() =>
						navigation.push(navigation?.routeInfo?.lastPathname || '/', 'back', 'push')
					}>
					Go Back
				</IonButton>
			</div>
		</div>
	)
}

export default NotFound
