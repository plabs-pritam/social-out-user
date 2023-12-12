import { IonFab, IonFabButton, IonIcon, IonText } from "@ionic/react";
import { FC, useState } from "react";
import { useLocation } from "react-router-dom"; // Import useLocation
import DefaultLayout from "../../../../layouts/DefaultLayout";
import VenueDashboard from "../Venue DashBoard/venue-dashboard";
import ArtistDashboard from "./artist-dashboard";
import QuickBall from "../../../../components/buttons/quickball";

const Dashboard: FC = () => {
  const location = useLocation();

  let dashboardContent;
  let id;

  if (location.pathname === "/venue-dashboard") {
    dashboardContent = <VenueDashboard />;
    id = "venue";
  } else if (location.pathname === "/artist-dashboard") {
    dashboardContent = <ArtistDashboard />;
    id = "artist";
  } else {
    dashboardContent = (
      <div className="grid grid-cols-1 gap-2 justify-center m-auto">
        <IonIcon
          className="border-2 border-gray-400 p-3 rounded-full h-[34px] w-[34px] mx-auto"
          icon="/assets/icons/solar_chart-outline.svg"
        />
        <IonText color={"secondary"}>You don't have any data</IonText>
      </div>
    );
  }

  const [showQuickBallList, setShowQuickBallList] = useState(false);
  const [showGuidelines, setShowGuidelines] = useState(false);

  const quickBallHandler = () => {
    setShowQuickBallList((prevShowQuickBallList) => !prevShowQuickBallList);
  };

  return (
    <>
      <DefaultLayout title="Dashboard">
        <div className="flex h-full mt-6">{dashboardContent}</div>

        {/* overflow */}
        {showQuickBallList && (
          <div className="absolute bg-[#000000cc] top-0 bottom-0 w-full h-full z-[100]"></div>
        )}

        {/* <IonFab slot="fixed" vertical="bottom" horizontal="end">
          <IonFabButton color={"mauve700"}> */}
        <QuickBall
          quickBallHandler={quickBallHandler}
          showQuickBallList={showQuickBallList}
          showGuidelines={() => setShowGuidelines(true)}
        />
        {/* </IonFabButton>
        </IonFab> */}
      </DefaultLayout>
    </>
  );
};

export default Dashboard;
