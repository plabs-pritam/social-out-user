 
import {useDispatch} from 'react-redux';
import {useEffect, useState} from 'react'; 
import {useAppSelector} from '../../../store/store'; 
import {setSearch} from '../../../store/reducer/ui-controller'; 
import { IonAvatar, IonImg, IonText } from '@ionic/react';
import {setSelectedEvents} from '../../../store/reducer/event-group'
import EventList from './EventList';
import { Avatar } from '@mui/material';
import EventOverview from './EventOverview';

interface ChatsProps {
  searchInput: string;
}

const CommunityChats: React.FC<ChatsProps> = ({searchInput}) => {
  const dispatch = useDispatch();
  const {events} = useAppSelector(state => state.events);
 // const {showSelectBox} = useAppSelector(state => state.uiController);

  let [eventList, setEventList] = useState<any>([]);
  let [selectEventList, setSelectEventList] = useState<any>([]);

  useEffect(() => {
    filterAndListItems();
  }, [searchInput, events]);

  useEffect(() => {
     
      if (events.length > 0) {
        let tempSelectedEvents = events.map((event: any) => {
          return {...event, selected: false};
        });
        dispatch(
        setSelectedEvents(JSON.parse(JSON.stringify(tempSelectedEvents))),
        );
        setSelectEventList(JSON.parse(JSON.stringify(tempSelectedEvents)));
      }
    
  }, []);

  useEffect(() => {
    if (events.length > 0) {
      let tempSelectedEvents = events.map((event: any) => {
        return {...event, selected: false};
      });
      dispatch(
        setSelectedEvents(JSON.parse(JSON.stringify(tempSelectedEvents))),
      );
      setSelectEventList(JSON.parse(JSON.stringify(tempSelectedEvents)));
    }
  }, [events]);

  useEffect(() => {
    dispatch(setSearch(false));
  }, []);

  const filterAndListItems = () => {
    eventList = events;
    if (searchInput) {
        eventList = events.filter((item: any) =>
        item.username.includes(searchInput),
      );
    }
    setEventList(eventList);
  };
 
  
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
        <div className=" ">
        <EventOverview
          id={'Chat'}
          userId={friend.id}
          profileDetail={friend}
          key={Math.random() * 100}
          selectedUser={selectedUser}
          navigationElement={handleNavigation}
        />
        </div>
        </>
      ))}
    </div>
    </>    
  );
};
 
export default CommunityChats;
