 
import React from 'react'; 
import {useAppSelector} from '../../store/store';     
import { IonButton, IonButtons, IonIcon, IonText, useIonRouter } from '@ionic/react';
import { useDispatch } from 'react-redux';
import { setSearch } from '../../store/reducer/ui-controller';

interface HeaderProps {
  showBackButton?: boolean;
  heading?: string;
  isSearch?: boolean; 
  onClickBack?: any;
}

const ChatsHeader: React.FC<HeaderProps> = ({
  showBackButton,
  isSearch,
  onClickBack,
  heading, 
}) => {
  const dispatch = useDispatch();
	const router = useIonRouter();
  const {search} = useAppSelector(state => state.uiController);

  const handleEnableSearch = () => {
    dispatch(setSearch(!search));
  };
 
  return (
    <div className='flex flex-row items-center justify-between mx-5 mt-6'>
       <div className='flex flex-row gap-2'>
         		{showBackButton && (
							<IonIcon
								icon="../../../public/assets/icons/solar_arrow-left-outline.svg"
								className="text-[#222] text-2xl"
								onClick={() => {
									onClickBack ? onClickBack() : router.goBack();
								}}
							/>
						)}
           
          <div className='flex flex-row gap-5'>
        <IonText className='text-black text-lg font-semibold leading-normal'>
              {heading}
            </IonText>
          </div>
        </div>
       {(
        <div>
          {isSearch && (
           <div onClick={handleEnableSearch}
           className="flex items-center p-[3px] border rounded-full border-black">
           <IonIcon className="w-4 h-4" icon="../../../public/assets/icons/search.svg" />
           </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ChatsHeader;
