 import React from 'react'; 
import { EventAvatar, EventDetail } from '../../../components/events/EventAvatar';
 
interface EventOverviewProps {
  id?: string;
  userId?: string;
  eventDetail: any;
  navigationElement: any;
}

const EventOverview: React.FC<EventOverviewProps> = ({
  userId,
  id = 'Chat', 
  eventDetail,
  navigationElement,
}) => {  

  return (
    <>
      <div className='flex flex-row justify-between items-center  w-[95%]'>
        <div className='flex flex-row items-center gap-[5px] mb-[-15px]'>
          <EventAvatar
            userId={userId}
            eventDetail={eventDetail}
            navigationElement={navigationElement}
          />
          <EventDetail
            id={id}
            userId={userId}
            eventDetail={eventDetail}
            navigationElement={navigationElement}
          />
        </div>
       </div>
    </>
  );
};

export default EventOverview;
