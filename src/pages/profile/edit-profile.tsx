/** @format */

import React, { FC, useRef, useState } from 'react'
import DefaultLayout from '../../layouts/DefaultLayout'
import {
	IonAvatar,
	IonButton,
	IonIcon,
	IonImg,
	IonInput,
	IonSelect,
	IonSelectOption,
} from '@ionic/react'

export interface EditProfileProps {
	onCloseModal?: any
}

function readFile(file: File, onload: any) {
	const reader = new FileReader()
	reader.addEventListener('load', (event: any) => {
		const result = event.target.result
		// Do something with result
		onload(result)
	})
	reader.readAsDataURL(file)
}

const EditProfile: FC<EditProfileProps> = ({ onCloseModal }) => {
	const [avatar, setAvatar] = useState('https://picsum.photos/100')
	const fileInput = useRef<HTMLInputElement>(null)
	function onSelectFile(e: any) {
		let file = e.nativeEvent.target.files[0]
		console.log(file)
		readFile(file, setAvatar)
	}
	return (
		<DefaultLayout hideTabBar showBackButton title='Edit Profile' onClickBack={onCloseModal}>
			<form className='flex flex-col gap-5 p-4'>
				<div>
					<IonAvatar className='w-[120px] h-[120px] mx-auto relative'>
						<IonImg className='object-cover' src={avatar} />
						<div
							className='grid place-items-center absolute bottom-0 end-0 h-[30px] w-[30px] bg-neutral-100 shadow rounded-full'
							onClick={() => {
								fileInput?.current?.click()
							}}>
							<IonIcon className='' icon={'/assets/icons/solar_pen-2-outline.svg'} />
							<input
								ref={fileInput}
								hidden
								type='file'
								accept='image/*'
								onChange={onSelectFile}
							/>
						</div>
					</IonAvatar>
				</div>
				<IonInput
					label='First name'
					fill='outline'
					className='bg-[#F7F8F9]'
					labelPlacement='floating'
					style={style}
				/>
				<IonInput
					label='Last name'
					fill='outline'
					className='bg-[#F7F8F9]'
					labelPlacement='floating'
					style={style}
				/>
				<IonInput
					label='Date of birth'
					fill='outline'
					type='date'
					className='bg-[#F7F8F9]'
					labelPlacement='floating'
					style={style}
				/>
				<IonSelect
					label='Gender'
					fill='outline'
					className='bg-[#F7F8F9]'
					labelPlacement='floating'
					style={style}>
					<IonSelectOption>Male</IonSelectOption>
					<IonSelectOption>Female</IonSelectOption>
				</IonSelect>
				<IonInput
					label='Email'
					fill='outline'
					className='bg-[#F7F8F9]'
					labelPlacement='floating'
					style={style}
				/>
				<IonInput
					label='Phone'
					fill='outline'
					className='bg-[#F7F8F9]'
					labelPlacement='floating'
					style={style}
				/>
				<IonSelect
					label='Country'
					fill='outline'
					className='bg-[#F7F8F9] text-black'
					labelPlacement='floating'
					style={style}>
					<IonSelectOption>Apple</IonSelectOption>
					<IonSelectOption>Banana</IonSelectOption>
					<IonSelectOption>Orange</IonSelectOption>
				</IonSelect>
				<div className='grid grid-cols-2 gap-3'>
					<div>
						<IonButton
							shape='round'
							fill='clear'
							size='large'
							className='w-full rounded-full bg-[#F9ECFE] capitalize'>
							Reset
						</IonButton>
					</div>
					<div>
						<IonButton type='submit' shape='round' size='large' className='w-full capitalize'>
							Save
						</IonButton>
					</div>
				</div>
			</form>
		</DefaultLayout>
	)
}

export default EditProfile

const style = {
	'--border-radius': '14px',
	'--border-color': '#E8E8E8',
}
