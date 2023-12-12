import { IonButton, IonContent, IonIcon, IonModal } from "@ionic/react";
import { useState } from "react";
import CommunityCreated from "../community/community-guidelines/CommunityCreated";

const Feedback: React.FC<{ handleClose: any }> = ({ handleClose }) => {

  const [submitFeedback, setSubmitFeedback ] = useState(false)

  return (
    <IonContent color='white'>
			<div className='text-black p-4 pt-0'>
				<div className='sticky top-0 w-[100vw] ml-[-16px] flex gap-3 items-center bg-white p-4'>
					<IonIcon onClick={handleClose} className='text-2xl cursor-pointer' icon={'/assets/icons/solar_arrow-left-outline.svg'} />
					<div className='text-[18px] font-bold'>FeedBack</div>
				</div>
        {/* feedback 2 */}
        <div className="flex flex-col gap-4 mb-6 items-end">
          {/* question */}
          <h1 className="w-full text-sm text-clip flex gap-[2px] font-bold tracking-[0.07px] leading-normal">
            <span>1.</span> What are the few challenges you faced and what suggestions can you give?
          </h1>

          {/* feedback */}
          <div className="flex flex-col items-start gap-3 w-[318px]">
            {/* /choices */}
            <div className="flex items-start gap-2">
              <div className="flex py-[6px] px-3 justify-center items-center gap-[10px] rounded-lg border border-[#6E0699] text-[#898989] text-sm font-normal leading-normal">
                Okay 🤕
              </div>
              <div className="flex py-[6px] px-3 justify-center items-center gap-[10px] rounded-lg border border-[#898989] text-[#898989] text-sm font-normal leading-normal">
                Good 🤕
              </div>
              <div className="flex py-[6px] px-3 justify-center items-center gap-[10px] rounded-lg border border-[#898989] text-[#898989] text-sm font-normal leading-normal">
                Bad 🤕
              </div>
            </div>
            <div className="flex flex-col items-start gap-2 w-full">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-[50px]">
                  <img src="/assets/images/Avatar.png" alt="avatar" />
                </div>
                <p className="text-[#898989] text-xs font-normal leading-[18px]">
                  @Sarah answer to this question
                </p>
              </div>
              <div className="flex w-full h-20 px-3 pt-[9px] pb-[8px] gap-3 items-start rounded-lg border border-[#E3E8EF]">
                <p className="text-[#898989] text-xs font-normal leading-[18px]">
                  Suspendisse et suscipit quam, vestibulum condimentum nisl. Sed euismod mi vel pellentesque feugiat.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* feedback 1 */}
        <div className="flex flex-col gap-4 mb-6 items-end">
          {/* question */}
          <h1 className="w-full text-sm text-clip flex gap-[2px] font-bold tracking-[0.07px] leading-normal">
            <span>2.</span> How satisfied are you with the event considering the services?
          </h1>

          {/* feedback 2*/}
          <div className="flex flex-col items-start gap-3 w-[318px]">
            {/* /choices */}
            <div className="flex items-start gap-2">
              <div className="flex py-[6px] px-3 justify-center items-center gap-[10px] rounded-lg border border-[#6E0699] text-[#898989] text-sm font-normal leading-normal">
                Satisfied 👍
              </div>
              <div className="flex py-[6px] px-3 justify-center items-center gap-[10px] rounded-lg border border-[#898989] text-[#898989] text-sm font-normal leading-normal">
                Not satisfied 👎
              </div>
            </div>
            <div className="flex flex-col items-start gap-2 w-full">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-[50px]">
                  <img src="/assets/images/Avatar.png" alt="avatar" />
                </div>
                <p className="text-[#898989] text-xs font-normal leading-[18px]">
                  @Sarah answer to this question
                </p>
              </div>
              <div className="flex w-full h-20 px-3 pt-[9px] pb-[8px] gap-3 items-start rounded-lg border border-[#E3E8EF]">
                <p className="text-[#898989] text-xs font-normal leading-[18px]">
                  Suspendisse et suscipit quam, vestibulum condimentum nisl. Sed euismod mi vel pellentesque feugiat.
                </p>
              </div>
            </div>
          </div>
        </div>

        <button
          className="w-full mt-[160px] flex py-3 px-[70px] justify-center items-center gap-[10px] rounded-lg bg-[#6E0699] mx-auto"
          onClick={() => setSubmitFeedback(true)}
        >
          <span className="text-white text-lg not-italic font-semibold leading-6">
            I understand
          </span>
        </button>
			</div>
      {submitFeedback && (
        <>
          <div className="overlay absolute inset-0 bg-[#0000005a]"></div>
          <CommunityCreated heading={'Feedback submitted'} handleClose={() => setSubmitFeedback(false)} 
            message={'You’ve earned 5 points from answering this feedback, keep answering to earn more points'}
            btn={'Back to homepage'}
            routerLink={"/artist-dashboard"}
          />
        </>
      )}
		</IonContent>
  )
}

export default Feedback;