import { IonImg, IonText } from "@ionic/react";
import { Avatar } from "@mui/material";

export const EventAvatar: React.FC<{
    userId:any
    eventDetail:any
    navigationElement:any
}> = ({userId, eventDetail, navigationElement }) => {
  
  return (
    <div className="mt-[20px]">  
        <>
        <div className="flex flex-row justify-between -mb-[20px] p-4 ">
               {eventDetail.logo ? (
                  <IonImg src={eventDetail.logo} />
              ) : (
                <Avatar src='avatar' alt={eventDetail.name} size='medium'/>
              )}  
              </div> 
        </>
    </div>
  );
};


export const EventDetail: React.FC<{
    userId?: string;
    eventDetail: any;
    navigationElement: any;
    id: string
  }> = ({ userId, eventDetail, navigationElement, id }) => {
    const handleNavigation = () => {
      navigationElement('EventChat', { userId, ...eventDetail });
    };
  
    return (
     <div className="flex flex-row justify-between -mb-[20px] p-4 ">    
          <div className="flex flex-col">
          <IonText className="text-black text-lg">{eventDetail.name}</IonText>
          <IonText className="text-zinc-500 text-xs">{eventDetail.lastMessage}</IonText>       
        </div>
        <IonText className=" text-zinc-500 text-xs mt-[12px]">{eventDetail.time}</IonText>
    </div>

    );
  };
  
 
