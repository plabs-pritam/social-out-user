import { ClassNames } from "@emotion/react";
import { IonAvatar, IonImg, IonText } from "@ionic/react";
import { Avatar } from "@mui/material";

 

interface ChatsProps {
  searchInput: string;
}

const EventDiscussions: React.FC<ChatsProps> = ({searchInput}) => {
 const eventdata=
    [
        {
          "name": "Happy Art",
          "logo": "",
          "lastMessage": "Ken: Wearning street style there",
          "time": "03:00",
          "participants": [        {
                  "userId": "2",
                  "chatRole": "admin",
                  "email": "subodh@gmail.com",
                  "username": "Subodh Kalarathi"
              },        {
                  "userId": "2",
                  "chatRole": "admin",
                  "email": "subodh@gmail.com",
                  "username": "Subodh Kalarathi"
              }]
        },
        {
          "name": "happy Art",
          "logo": "",
          "lastMessage": "Ken: Wearning street style there",
          "time": "03:00",
          "participants": [        {
              "userId": "2",
              "chatRole": "admin",
              "email": "subodh@gmail.com",
              "username": "Subodh Kalarathi"
          },        {
              "userId": "2",
              "chatRole": "admin",
              "email": "subodh@gmail.com",
              "username": "Subodh Kalarathi"
          }]
        },
        {
            "name": "happy Art",
            "logo": "",
            "lastMessage": "Ken: Wearning street style there",
            "time": "03:00",
            "participants": [        {
                "userId": "2",
                "chatRole": "admin",
                "email": "subodh@gmail.com",
                "username": "Subodh Kalarathi"
            },        {
                "userId": "2",
                "chatRole": "admin",
                "email": "subodh@gmail.com",
                "username": "Subodh Kalarathi"
            }]
          }
      ]
  
  return (
    <>
    <div className="mt-[20px]">
      {eventdata.map((event: any) => (
        <>
        <div className="flex flex-row justify-between -mb-[20px] p-4 ">
        <div className=" flex flex-row gap-2">
              {event.logo ? (
                  <IonImg src={event.logo} />
              ) : (
                <Avatar src='avatar' alt={event.name} size='medium'/>
              )}   
          <div className="flex flex-col">
          <IonText className="text-black text-lg">{event.name}</IonText>
          <IonText className="text-zinc-500 text-xs">{event.lastMessage}</IonText>  
          </div>
        </div>
        <IonText className=" text-zinc-500 text-xs mt-[12px]">{event.time}</IonText>
  
        </div>
        </>
      ))}
    </div>
    </> 
  )
};
 
export default EventDiscussions;
