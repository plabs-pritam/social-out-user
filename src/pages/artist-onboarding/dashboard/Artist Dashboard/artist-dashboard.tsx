/** @format */

import { IonFab, IonFabButton, IonIcon, IonText } from "@ionic/react";
import { FC } from "react";
import LineChart from "./LineChart";

const ArtistDashboard: FC = () => {
  return (
    <>
      {/* Dashboard data */}
      <div className="flex flex-col items-center gap-4 w-full overflow-scroll">
        <LineChart />

        {/* Average per week */}
        <div className="w-[92%] mx-auto flex items-center justify-between p-4 shrink-0 rounded-3xl border border-[#D0D0D0]">
          <div className="flex flex-col items-start gap-1">
            <p className="text-[#717171] text-sm font-normal leading-[18px]">
              Monthly Sale
            </p>
            <h1 className="text-[#121212] text-[34px] font-medium leading-10">
              $1,888.15
            </h1>
          </div>

          <img
            src="/assets/icons/Chart-Increase.svg"
            alt="increase-chart"
            className="mt-6"
          />
        </div>

        {/* Earning Growth */}
        <div className="w-[92%] mx-auto flex items-center justify-between p-4 shrink-0 rounded-3xl border border-[#D0D0D0]">
          <div className="flex flex-col items-start gap-1">
            <p className="text-[#717171] text-sm font-normal leading-[18px]">
              Earning Growth
            </p>
            <h1 className="text-[#121212] text-[34px] font-medium leading-10">
              88%
            </h1>
          </div>

          <img
            src="/assets/icons/Chart-decrease.svg"
            alt="increase-chart"
            className="mt-6"
          />
        </div>
      </div>
    </>
  );
};

export default ArtistDashboard;
