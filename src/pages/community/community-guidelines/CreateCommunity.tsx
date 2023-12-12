import { IonContent, IonIcon, IonModal } from "@ionic/react";
import { useState } from "react";
import CommunityRules from "./CommunityRules";

const CreateCommunity: React.FC<{ handleClose: any }> = ({ handleClose }) => {

  const [ showCommunityRules, setShowCommunityRules ] = useState(false);

  return (
    <IonContent color='white'>
			<div className='text-black'>
				<div className='sticky top-0 flex gap-3 items-center bg-white mb-6 p-4'>
					<IonIcon onClick={handleClose} className='text-2xl cursor-pointer' icon={'/assets/icons/solar_arrow-left-outline.svg'} />
					<div className='text-[18px] font-bold'>Create a Community</div>
				</div>
        
        <form className="create-community-form flex flex-col items-start gap-4 mx-[16px]">
          <div className="flex flex-col w-full gap-2 items-stretch">
            <label htmlFor="" className="text-[#111729] text-sm not-italic font-bold leading-[23px] tracking-[0.07px]">
              Community name
            </label>
            <input type="text"
              className="input flex px-3 pt-[9px] pb-2 gap-3 items-stretch outline-none"
              placeholder="Name of community"
            />
          </div>

          <div className="flex flex-col w-full gap-2 items-stretch">
            <label htmlFor="" className="text-[#111729] text-sm not-italic font-bold leading-[23px] tracking-[0.07px]">
              Community brief
            </label>
            <div className="input px-3 pt-[9px] pb-2 align-top outline-none h-20">
              <input type="textarea"
                className="outline-none bg-transparent w-full"
                placeholder="Write a brief about your community"
              />
            </div>
          </div>

          <div className="flex flex-col w-full gap-2 items-stretch">
            <label htmlFor="" className="text-[#111729] text-sm not-italic font-bold leading-[23px] tracking-[0.07px]">
            Community type Public
            </label>
            <select className="input items-center gap-3 px-3 pt-[9px] pb-2 align-top outline-none text-[#97A3B6]">
              <option value="1">Public</option>
              <option value="2">Private</option>
            </select>
            <div className="flex items-center gap-2">
              <input type="checkbox"
                className="w-5 h-5 bg-[#9962b0] accent-[#d5a9e7] shrink-0"
              />

              <p className="text-[#677489] text-xs not-italic font-medium leading-normal tracking-tighter-[0.06px]">
                Anyone can view, post and comment to this community
              </p>
            </div>
          </div>

          <div className="flex flex-col w-full gap-2 items-stretch">
            <label htmlFor="" className="text-[#111729] text-sm not-italic font-bold leading-[23px] tracking-[0.07px]">
              Community tags
            </label>
            <input type="text"
              className="input flex px-3 pt-[9px] pb-2 gap-3 items-stretch outline-none"
              placeholder="Add tags to get reach"
            />
          </div>

          <div className="flex flex-col w-full gap-2 items-stretch">
            <label htmlFor="" className="text-[#111729] text-sm not-italic font-bold leading-[23px] tracking-[0.07px]">
              Upload Photos
            </label>
            <div
              className="input flex flex-col px-6 py-4 gap-1 items-center outline-none"
            >
              <div className="flex w-10 h-10 p-[10px] justify-center items-center rounded-[28px] border-[6px] border-[#F9FAFB] bg-[#F2F4F7]">
                <IonIcon 
                  icon="/assets/icons/upload-cloud-02.svg"
                  className="w-6 h-6 shrink-0"
                />
              </div>
              <div className="flex flex-col items-center gap-1 self-stretch">
                <h1 className="text-[#6E0699] text-sm not-italic font-semibold leading-5">
                  Click to upload and attach files
                </h1>
                <p className="text-[#475467] text-xs not-italic font-normal leading-[18px]">
                  SVG, PNG, JPG or GIF (max. 800x400px)
                </p>
              </div>
            </div>
          </div>
        </form>

        <button
          className='w-[343px] flex py-3 px-[70px] justify-center items-center gap-[10px] rounded-lg bg-[#6E0699] mx-auto mt-[40px] mb-4'
          onClick={() => setShowCommunityRules(true)}
        >
          <span className="text-white text-lg not-italic font-semibold leading-6">Create community</span> 
        </button>
      </div>
      <IonModal isOpen={showCommunityRules}>
        <CommunityRules handleClose={() => setShowCommunityRules(false)} />
      </IonModal>
    </IonContent>
  )
}

export default CreateCommunity;