import { IonContent, IonIcon, IonModal } from "@ionic/react";
import CreateCommunity from "./CreateCommunity";
import { useState } from "react";
import CommunityCreated from "./CommunityCreated";

const CommunityJoinRules: React.FC<{ handleClose: any }> = ({ handleClose }) => {

  const [showCommunityCreated, setShowCommunityCreated ] = useState(false)

  return (
    <IonContent color='white'>
			<div className='text-black p-4 pt-0'>
				<div className='sticky top-0 w-[100vw] ml-[-16px] flex gap-3 items-center bg-white p-4'>
					<IonIcon onClick={handleClose} className='text-2xl cursor-pointer' icon={'/assets/icons/solar_arrow-left-outline.svg'} />
					<div className='text-[18px] font-bold'>Community Guidelines</div>
				</div>

        <p className="text-[#A19EA2] text-sm not-italic my-6 font-normal leading-[18px]">
          Follow the below guidelines to create a community within the SocialOut app.
        </p>

        <div className="flex flex-col items-start gap-6">
          <ol className="guide-list text-black text-xs not-italic font-normal leading-[18px] flex flex-col items-center gap-6 list-decimal ml-3">
            <li className="w-full">
              Remember the human  
            </li>

            <li>
              Abide by the community rules
            </li>

            <li>
              Respect the privacy of others, interfering in others privacy will not be tolerated
            </li>

            <li>
              Don’t impersonate people or their entities
            </li>

            <li>
              Properly label “Not safe for Work” (NSFW) content
            </li>

            <li>
              Keep it Legal
            </li>

            <li>
              Don’t break SocialOut (a lot of us really like it here)
            </li>
          </ol>

          <div className="flex items-center gap-2">
            <input type="checkbox"
              className="w-6 h-6 bg-[#9962b0] accent-[#d5a9e7] shrink-0"
            />

            <p className="text-[#677489] text-xs not-italic font-medium leading-normal tracking-[0.06px]">
              I understand and abide by the rules and regulations of <a href="#" className="text-[#6E0699]">SocialOut</a> and will follow the <a href="#" className="text-[#6E0699]">Community Guidelines</a> 
            </p>
          </div>
        </div>

        <button
          className="w-full mt-[160px] flex py-3 px-[70px] justify-center items-center gap-[10px] rounded-lg bg-[#6E0699] mx-auto"
          onClick={() => setShowCommunityCreated(true)}
        >
          <span className="text-white text-lg not-italic font-semibold leading-6">
            I understand
          </span>
        </button>
      </div>

      {showCommunityCreated && (
        <>
          <div className="overlay absolute inset-0 bg-[#0000005a]"></div>
          <CommunityCreated heading={'Community created!'} handleClose={() => setShowCommunityCreated(false)} 
            message={'Yayyy congratulations, your community has been successfully been created.'}
            btn={'Preview community'}
            routerLink={"/community/community-details"}
          />
        </>
      )}

    </IonContent>
  )
}

export default CommunityJoinRules;