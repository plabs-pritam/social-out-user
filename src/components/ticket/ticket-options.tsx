import { IonContent, IonImg, IonRouterLink, IonText } from "@ionic/react";
import { Share } from "@capacitor/share";

function TicketOptions({ closeOption }: { closeOption: any }) {
  const shareContent = async () => {
    try {
      await Share.share({
        title: 'Social Out',
        text: 'Check out this cool app!',
        url: 'https://www.example.com',
      });
    } catch (error) {
      console.error('Error sharing:', error);
    }
  };
  return (
    <IonContent onMouseLeave={closeOption}>
      <div className="flex py-3 px-4 items-center gap-2 mt-[41px]" onClick={shareContent}>
        <IonImg src="/assets/icons/solar_share-outline.svg" />
        <p className="text-base font-medium leading-normal text-black">Share Ticket</p>
      </div>
      <div className="flex py-3 px-4 items-center gap-2">
          <IonImg src="/assets/icons/red-ticket-outline.svg" className="text-[#FF0000]" />
          <IonRouterLink routerLink='/cancel-ticket'>
            <IonText className="text-base font-medium leading-normal text-[#FF0000]">
              Cancel Ticket
            </IonText>
          </IonRouterLink>
      </div>
    </IonContent>
  );
}

export default TicketOptions;
