/** @format */

import { IonAvatar, IonContent, IonImg, IonModal, IonText } from '@ionic/react'
import HrLine from '../../../components/hr-line'
import { useState } from 'react'
import EventOptions from '../../../components/events/event-options'
import ProfileOptions from '../../../components/community/profile-option'

const LeaderboardTab = () => {
	const [profileOptions, setProfileOptions] = useState(false)

	return (
		<IonContent className='ion-padding'>
			<div className='flex gap-[31px] items-center justify-center ion-padding-vertical'>
				{/* Leaderboard 2 */}
				<div className='flex flex-col gap-5 items-center'>
					<div className="w-20 h-20 border-[1.5px] border-[#5465FF] flex-shrink-0 rounded-full bg-[url('/assets/images/user.jpg')] bg-cover bg-center bg-no-repeat relative">
						<IonText className='flex flex-col items-center justify-center gap-[10px] bg-[#5465FF] rounded-[50px] py-[4px] px-[10px] text-white text-[14px] font-medium leading-normal absolute -bottom-[8px] left-[26px]'>
							2
						</IonText>
					</div>

					<div className='flex flex-col items-end gap-[3px]'>
						<IonText className='text-sm w-[80px] text-[#2A2A2A] font-medium truncate'>
							Cameron Williams
						</IonText>
						<div className='flex py-2 px-3 items-center gap-[10px] bg-white border border-[#0000001A] rounded-[32px]'>
							<IonText className='text-black text-xs font-semibold leading-normal'>
								2,700 Pts
							</IonText>
						</div>
					</div>
				</div>

				{/* Leaderboard 1 */}
				<div className='flex flex-col gap-5 items-center mt-[-20px]'>
					<div className="w-[100px] h-[100px] border-[1.5px] border-[#FF5C00] flex-shrink-0 rounded-full bg-[url('/assets/images/user.jpg')] bg-cover bg-center bg-no-repeat relative">
						<IonText className='flex flex-col items-center justify-center gap-[10px] bg-[#FF5C00] rounded-[50px] py-[4px] px-[11px] text-white text-[14px] font-medium leading-normal absolute -bottom-[11px] left-[36px]'>
							1
						</IonText>
					</div>

					<div className='flex flex-col items-center gap-[3px]'>
						<IonText className='text-sm  text-[#2A2A2A] font-medium truncate'>
							Jenny Wilson
						</IonText>
						<div className='flex py-2 px-3 items-center gap-[10px] bg-white border border-[#0000001A] rounded-[32px]'>
							<IonText className='text-black text-xs font-semibold leading-normal'>
								5,000 Pts
							</IonText>
						</div>
					</div>
				</div>

				{/* Leaderboard 3 */}
				<div className='flex flex-col gap-5 items-center'>
					<div className="w-20 h-20 border-[1.5px] border-[#5465FF] flex-shrink-0 rounded-full bg-[url('/assets/images/user.jpg')] bg-cover bg-center bg-no-repeat relative">
						<IonText className='flex flex-col items-center justify-center gap-[10px] bg-[#5465FF] rounded-[50px] py-[4px] px-[10px] text-white text-[14px] font-medium leading-normal absolute -bottom-[8px] left-[26px]'>
							3
						</IonText>
					</div>

					<div className='flex flex-col items-end gap-[3px]'>
						<IonText className='text-sm w-[80px] text-[#2A2A2A] font-medium truncate'>
							Diana Jane
						</IonText>
						<div className='flex py-2 px-3 items-center gap-[10px] bg-white border border-[#0000001A] rounded-[32px]'>
							<IonText className='text-black text-xs font-semibold leading-normal'>
								2,700 Pts
							</IonText>
						</div>
					</div>
				</div>
			</div>

			<div className='border-b'></div>

			<div className='flex flex-col gap-4 items-start ion-padding-vertical'>
				<div
					className='flex items-center justify-between w-full'
					onClick={() => setProfileOptions(true)}
				>
					<div className='flex gap-2 items-center'>
						<IonText className='text-sm font-medium leading-normal text-black'>4</IonText>
						<div className='flex gap-3 items-center'>
							<div>
								<IonAvatar class='w-10 h-10'>
									<IonImg src='/assets/images/user.jpg' />
								</IonAvatar>
							</div>
							<IonText className='text-base font-medium leading-normal text-[#2A2A2A]'>
								Alena Kenter
							</IonText>
						</div>
					</div>

					<div className='flex py-2 px-3 items-center gap-[10px] bg-white border border-[#0000001A] rounded-[32px]'>
						<IonText className='text-black text-xs font-semibold leading-normal'>
							2,700 Pts
						</IonText>
					</div>
				</div>

				<div
					className='flex items-center justify-between w-full'
					onClick={() => setProfileOptions(true)}
				>
					<div className='flex gap-2 items-center'>
						<IonText className='text-sm font-medium leading-normal text-black'>4</IonText>
						<div className='flex gap-3 items-center'>
							<div>
								<IonAvatar class='w-10 h-10'>
									<IonImg src='/assets/images/user.jpg' />
								</IonAvatar>
							</div>
							<IonText className='text-base font-medium leading-normal text-[#2A2A2A]'>
								Alena Kenter
							</IonText>
						</div>
					</div>

					<div className='flex py-2 px-3 items-center gap-[10px] bg-white border border-[#0000001A] rounded-[32px]'>
						<IonText className='text-black text-xs font-semibold leading-normal'>
							2,700 Pts
						</IonText>
					</div>
				</div>
			</div>

			{/* Profile Options */}
			<IonModal
				isOpen={profileOptions}
				onDidDismiss={() => setProfileOptions(false)}
				breakpoints={[0, 0.45, 1]}
				initialBreakpoint={0.45}
        mode='ios'
			>
				<ProfileOptions closeOption={() => setProfileOptions(false)} />
			</IonModal>
		</IonContent>
	)
}

export default LeaderboardTab

{
	/* <IonRow>
<IonCol className='mx-auto'>
    <div className='flex flex-row gap-8 mx-auto mt-2'>
        <div className='position-relative'>
            <img className='mt-10' src="/public/assets/images/avtar2.png" alt="" />
            <img className='badge' src="/public/assets/images/two.png" alt="" />
            <div className='w-20 h-20 mt-5'>
                <p className="overflow-hidden whitespace-nowrap w-74 text-ellipsis text-neutral-gray-900 font-SFProDisplay font-medium text-base leading-normal">
                    Cameron Williams
                </p>
                <p className="overflow-hidden whitespace-nowrap w-74 text-ellipsis text-neutral-gray-900 font-SFProDisplay font-medium text-base leading-normal">
                    4500 Pts
                </p>
            </div>

        </div>
        <div>
            <img src="/public/assets/images/avtar1.png" alt="" />
            <img className='badge2' src="/public/assets/images/one.png" alt="" />
            <div className='h-20 mt-5'>
                <p className="overflow-hidden whitespace-nowrap w-74 text-ellipsis text-neutral-gray-900 font-SFProDisplay font-medium text-base leading-normal">
                    Jenny Wilson
                </p>
                <p className="overflow-hidden whitespace-nowrap w-74 text-ellipsis text-neutral-gray-900 font-SFProDisplay font-medium text-base leading-normal">
                    5000 Pts
                </p>
            </div>
        </div>
        <div>
            <img className='mt-10' src="/public/assets/images/avtar3.png" alt="" />
            <img className='badge3' src="/public/assets/images/three.png" alt="" />
            <div className='h-20 mt-5 text-base'>
                <p className="overflow-hidden whitespace-nowrap w-74 text-ellipsis text-neutral-gray-900 font-SFProDisplay font-medium  leading-normal">
                    Diana Jane
                </p>
                <p className="overflow-hidden whitespace-nowrap w-74 text-ellipsis text-neutral-gray-900 font-SFProDisplay font-medium  leading-normal">
                    3000 Pts
                </p>
            </div>
        </div>
    </div>

    <div className='flex flex-row justify-between items-center mt-4'>
        <div className='flex justify-center items-center gap-2'>
            <IonText>4</IonText>
            <img src="/public/assets/images/four.svg" alt="" />
            <IonText>Ken Khoi</IonText>
        </div>
        <div className='inline-flex justify-center items-center gap-2'>
            <IonText>2,700 Pts</IonText>
        </div>
    </div>

    <div className='flex flex-row justify-between items-center mt-2'>
        <div className='flex justify-center items-center gap-2'>
            <IonText>5</IonText>
            <img src="/public/assets/images/five.png" alt="" />
            <IonText>Guy Hawkins</IonText>
        </div>
        <div className='inline-flex justify-center items-center gap-2'>
            <IonText>2,500 Pts</IonText>
        </div>
    </div>

    <div className='flex flex-row justify-between items-center mt-2'>
        <div className='flex justify-center items-center gap-2'>
            <IonText>6</IonText>
            <img src="/public/assets/images/six.png" alt="" />
            <IonText>Daniel Yui</IonText>
        </div>
        <div className='inline-flex justify-center items-center gap-2'>
            <IonText>2,400 Pts</IonText>
        </div>
    </div>

    <div className='flex flex-row justify-between items-center mt-2'>
        <div className='flex justify-center items-center gap-2'>
            <IonText>7</IonText>
            <img src="/public/assets/images/seven.png" alt="" />
            <IonText>Ronald Richards</IonText>
        </div>
        <div className='inline-flex justify-center items-center gap-2'>
            <IonText>2,400 Pts</IonText>
        </div>
    </div>

    <div className='flex flex-row justify-between items-center mt-2'>
        <div className='flex justify-center items-center gap-2'>
            <IonText>8</IonText>
            <img src="/public/assets/images/eight.png" alt="" />
            <IonText>Eric Lubin</IonText>
        </div>
        <div className='inline-flex justify-center items-center gap-2'>
            <IonText>1,900 Pts</IonText>
        </div>
    </div>
</IonCol>
</IonRow> */
}
