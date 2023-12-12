/** @format */

import { IonContent, IonImg } from '@ionic/react'

const GetStartedLayout = (props: any) => {
	return (
		<IonContent>
			<div className='overflow-auto flex flex-col gap-3 h-[100%] bg-[#242424] text-white '>
				<IonImg src='/assets/images/welcome/bg-mask.png' alt='' />
				<div className='flex flex-col gap-5 p-5 mt-5'>{props.children}</div>
			</div>
		</IonContent>
	)
}

export default GetStartedLayout
