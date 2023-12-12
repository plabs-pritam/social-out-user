import React, {useEffect, useState} from 'react'; 
import EventDiscussions from './EventDiscussions';
import CommunityChats from './CommunityChats';
import EventChatTab from '../../../components/events/event-chat-tab';
import ChatsHeader from '../../../components/EventChatHeader/EventChatHeader';  
import { useIonRouter } from '@ionic/react';

const communityMessageList: React.FC<{}> = ({}) => {
  //const navigation = useNavigation(); 
  const router = useIonRouter();
  let [activeTab, setActiveTab] = useState<string>('General Messages'); 

  const handleActiveTab = (tabName: string) => {
    setActiveTab(tabName);
  };

  return (
    <div className='w-full h-full bg-white'>
      <ChatsHeader  
       showBackButton
       isSearch 
       heading={activeTab}
       onClickBack={() => router.push("/user/community", "back", "replace")} /> 
      <EventChatTab onChange={handleActiveTab} activeTab={activeTab} />
      {activeTab === 'General Messages' && <EventDiscussions searchInput={''}/>}
      {activeTab === 'Event Discussions' && <EventDiscussions searchInput={''}/>}
      {activeTab === 'Community Chats' && <CommunityChats searchInput={''}/>}
      </div>
  );
};

export default communityMessageList;
