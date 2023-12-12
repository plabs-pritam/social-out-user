import { IonText } from "@ionic/react";
import EventsHorizontalCard from "../../../../components/cards/events-horizontal-card";
import PieChart from "./PieChart";

const horizontalCardList = [
  {
    id: 1,
    image: "/assets/images/events/event.jpg",
    title: "Happy Art",
    ratings: "4.5/05",
    members: "12.13k members",
    location: "Lamington Road, Mumbai",
  },
  {
    id: 2,
    image: "/assets/images/events/event.jpg",
    title: "Happy Art",
    ratings: "4.5/05",
    members: "12.13k members",
    location: "Lamington Road, Mumbai",
  },
  {
    id: 3,
    image: "/assets/images/events/event.jpg",
    title: "Happy Art",
    ratings: "4.5/05",
    members: "12.13k members",
    location: "Lamington Road, Mumbai",
  },
  {
    id: 4,
    image: "/assets/images/events/event.jpg",
    title: "Happy Art",
    ratings: "4.5/05",
    members: "12.13k members",
    location: "Lamington Road, Mumbai",
  },
];

const VenueDashboard = () => {

  return (
    // {/* Dashboard data */}
    <div className="flex flex-col items-center gap-4 h-max w-full overflow-scroll">
      {/* Sales */}
      <div className="w-[92%] mx-auto flex-col items-center justify-between p-4 shrink-0 rounded-3xl border border-[#D0D0D0]">
        <div className="flex items-center justify-between">
          <p className="text-[#717171] text-sm font-normal leading-[18px]">
            Sales
          </p>

          <div className="flex justify-center items-center gap-1">
            <p className="text-black text-xs font-normal leading-[18px]">
              Monthly
            </p>
            <img
              src="/assets/icons/solar_alt-arrow-down-outline.svg"
              alt="down arrow"
            />
          </div>
        </div>

        <div className="flex items-end justify-between">
          <h1 className="text-[#121212] text-[34px] font-medium leading-10">
            $1,888.15
          </h1>

          <div className="flex py-1 px-2 items-center justify-center gap-1 rounded bg-[#EEFEE4]">
            <img
              src="/assets/icons/solar_course-up-outline.svg"
              alt="chart-down"
            />
            <p className="text-base font-normal leading-[20px] text-[#337B06]">
              15.25%
            </p>
          </div>
        </div>
      </div>

      {/* Doughnut Chart */}
      <div className="w-[92%] mx-auto flex-col items-center p-4 shrink-0 rounded-3xl border border-[#D0D0D0]">
        <p className="text-[#717171] text-sm font-normal leading-[18px]">
          Sales
        </p>

        <div className="flex items-center gap-3">
          <div className="flex flex-col items-start gap-6">
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-[4px] bg-[#B00DF6]"></div>
              <p className="text-black">Occupied Venues</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-[4px] bg-[#F9ECFE]"></div>
              <p className="text-black">Unoccupied Venues</p>
            </div>
          </div>

          <div className="h-[110px]">
            <PieChart />
          </div>
        </div>
      </div>

      <div className="flex w-full justify-between p-4">
        <IonText className="text-lg font-bold">Hosted Events</IonText>
        <IonText className="" color="primary">
          See all
        </IonText>
      </div>

      <div className="flex flex-col gap-3 overflow-auto">
        {horizontalCardList.map((cardItem) => (
          <div key={cardItem.id}>
            <EventsHorizontalCard {...cardItem} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default VenueDashboard;
