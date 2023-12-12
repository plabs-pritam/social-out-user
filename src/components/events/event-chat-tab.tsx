import { IonButton, IonText } from "@ionic/react";


interface ChatTabProps {
    onChange: any;
    activeTab: string;
}
let topTabBarList = [
    {
        label: 'General Messages',
        value: 'General Messages',
    },
    {
        label: 'Event Discussions',
        value: 'Event Discussions',
    },
    {
        label: 'Community Chats',
        value: 'Community Chats',
    },
];

const EventChatTab: React.FC<ChatTabProps> = ({ onChange, activeTab }) => {
    return (
        <div className='flex mt-[20px]'>
            {topTabBarList.map((tabBar: any) => (
                <div
                    key={tabBar.label}
                    onClick={() => onChange(tabBar.value)}
                      >
                    <IonText className={`${activeTab === tabBar.label ? 'bg-purple-600  text-white p-[4px] ml-[4px] rounded-2xl border border-solid border-gray-500' : 'bg-white text-black p-[4px] ml-[4px] rounded-2xl border border-solid border-gray-500'}`}>
                        {tabBar.label}
                    </IonText>
                </div>
            ))}
        </div>
    );
};


export default EventChatTab;
