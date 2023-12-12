import { useDispatch } from 'react-redux';
import EventOverview from './EventOverview';
import { useAppSelector } from '../../../store/store'; 
import { setActiveChatEvent } from '../../../store/reducer/event-group'; 
 
interface EventListProps {
 events: any;
}

const EventList: React.FC<EventListProps> = ({
  events
}) => {
  const dispatch = useDispatch();   

  const handleNavigation = (screen: string, user: any) => {
    dispatch(
        setActiveChatEvent({
        id: user.userId,
        logo: user.logo,
        name: user.username,
      }),
    );
  };

  const ONE_SECOND_IN_MS = 500;

  const PATTERN = [0.5 * ONE_SECOND_IN_MS, 0.5 * ONE_SECOND_IN_MS];
 
  return (
    <div>
      {events.map((event: any) => (
            <EventOverview
              id={'Chat'}
              userId={event.id}
              eventDetail={event}
              key={Math.random() * 100}
              navigationElement={handleNavigation} type={''} />   
      ))}
    </div>
  );
};

export default EventList;
