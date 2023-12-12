/** @format */

import { IonContent, IonImg, IonSpinner } from '@ionic/react'
import { FC } from 'react'

const LoadingScreen: FC = () => {
	return (
		<IonContent color={'dark'}>
			<div className='h-full flex flex-col gap-3 items-center justify-center'>
				<IonImg src='/assets/images/logo.svg' />
				<IonSpinner
					color={'white'}
					className='h-12 w-12 animate-spin'
					name='circular'></IonSpinner>
			</div>
		</IonContent>
	)
}

export default LoadingScreen
