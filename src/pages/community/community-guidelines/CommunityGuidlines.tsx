import { IonButton, IonContent, IonIcon, IonModal } from "@ionic/react";
import { useState } from "react";
import CreateCommunity from "./CreateCommunity";

const CommunityGuidlines: React.FC<{ handleClose: any }> = ({ handleClose }) => {

  const [ showCreateCommunity, setShowCreateCommunity] = useState(false);

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
              Clearly define the purpose and goals of the community.  
            </li>

            <li>
              Establish and communicate clear guidelines and rules for participation and behavior based on the community
            </li>

            <li>
              Appoint active and fair moderators who can enforce community guidelines.
            </li>

            <li>
              The moderating team should primarily consist of the following three positions: <br />
              <ul className=" list-disc ml-[2px]">
                <li>
                  Admin: This person will make sure that the rules are followed, deal with problems, and uphold the integrity and direction of the community.
                </li>
                <li>
                  Content Creator: This position involves creating valuable and relevant information, encouraging community engagement, and providing members with insightful and interesting content.
                </li>
                <li>
                  Event logistics: This person is in charge of event planning and coordination, making sure everything runs smoothly and promoting member interaction and engagement.
                </li>
              </ul>
            </li>

            <li>
              There should be a minimum of 1 event happening every month.
            </li>

            <li>
              Keep the community active with regular discussions, events, or activities.
            </li>

            <li>
              Provide opportunities for members to participate and connect. Encourage mutual assistance and knowledge sharing
            </li>
            
            <li>
              Encourage members to share content that is optimistic, inspiring, valuable, and informative.
            </li>

            <li>
              Posts and content should be relevant to the community's goal; avoid self-promotion and political arguments.
            </li>

            <li>
              Discourage personal attacks, hate speech, and disrespectful language.
            </li>
          </ol>

          <div className="flex items-center gap-2">
            <input type="checkbox"
              className="w-6 h-6 bg-[#9962b0] accent-[#d5a9e7] shrink-0"
            />

            <p className="text-[#677489] text-xs not-italic font-medium leading-normal tracking-tighter-[0.06px]">
              I understand and abide by the rules and regulations of <a href="#" className="text-[#6E0699]">SocialOut</a> and will follow the <a href="#" className="text-[#6E0699]">Community Guidelines</a> 
            </p>
          </div>
        </div>

        <div className='w-full mt-10'>
          <IonButton
            className='ion-btn-primary w-full'
            size='large'
            onClick={() => setShowCreateCommunity(true)}
          >
            I understand
          </IonButton>
        </div>
			</div>

      <IonModal isOpen={showCreateCommunity}>
        <CreateCommunity handleClose={() => setShowCreateCommunity(false)} />
      </IonModal>
		</IonContent>
  )
}

export default CommunityGuidlines;