/** @format */

import {
	IonButton,
	IonCheckbox,
	IonContent,
	IonIcon,
	IonInput,
	IonLabel,
	IonRouterLink,
} from '@ionic/react'

const SignUp = () => {
	return (
		<IonContent color='white'>
			<div className='flex flex-col min-h-full px-3'>
				<div className='flex gap-3 sticky top-0 pt-5 pb-2 bg-white z-10'>
					<IonRouterLink routerLink='/'>
						<IonIcon
							className='w-[24px] h-[24px]'
							icon='/assets/icons/solar_arrow-left-outline.svg'
						/>
					</IonRouterLink>
					<div className='text-black'>Sign Up</div>
				</div>
				<div className={`flex-1 flex flex-col animate__animated animate__faster`}>
					<form className='flex-1 flex flex-col gap-3 h-full'>
						<div>
							<IonLabel className='text-[14px] text-black font-medium'>Name</IonLabel>
							<IonInput className='text-black' fill='outline' placeholder='Enter your Full name' />
						</div>
						<div>
							<IonLabel className='text-[14px] text-black font-medium'>Email address</IonLabel>
							<IonInput className='text-black' fill='outline' placeholder='Enter your email id' />
						</div>
						<div>
							<IonLabel className='text-[14px] text-black font-medium'>Password</IonLabel>
							<IonInput className='text-black' fill='outline' placeholder='Enter your password' />
							<div className='text-xs text-neutral-500 mt-1'>
								Your password must contain a uppercase letter, lowercase letter, one special
								character (@,&,_,etc..) and a number. It shouldn't contain any space in
								between.
							</div>
						</div>
						<IonButton className='mt-auto mb-3' routerLink='/choose-categories' >Sign Up</IonButton>
					</form>
				</div>
			</div>
		</IonContent>
	)
}

export default SignUp
