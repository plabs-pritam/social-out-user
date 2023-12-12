import { useIonViewWillEnter, useIonViewWillLeave } from "@ionic/react";
import { Line } from "react-chartjs-2";
import { CategoryScale } from "chart.js";
import { Chart as ChartJS } from "chart.js/auto";
import { LineData, LineOptions } from "../data/LineChartData";

const LineChart = () => {

  useIonViewWillEnter(() => {
    ChartJS.register(CategoryScale);
  }, []);

  useIonViewWillLeave(() => {
    ChartJS.unregister(CategoryScale);
  }, []);

  return (
    <div className="w-[92%] mx-auto flex flex-col items-center gap-[13px] p-4 shrink-0 rounded-3xl border border-[#D0D0D0]">
      <div className="flex items-center justify-between w-full">
        <div className="flex flex-col items-start gap-1">
          <p className="text-[#717171] text-sm font-normal leading-[18px]">
            Monthly Sale
          </p>
          <h1 className="text-[#121212] text-[34px] font-medium leading-10">
            $1,888.15
          </h1>
          <div className="flex items-center justify-center gap-[2px]">
            <img
              src="/assets/icons/solar_course-down-outline.svg"
              alt="chart-down"
            />
            <p className="text-xs font-normal leading-[18px] text-[#717171]">
              <span className="text-[#FF1C10]">-12%</span> this month
            </p>
          </div>
        </div>

        <div className="flex py-2 px-3 justify-center items-center gap-1 rounded-[20px] bg-[#EECAFD]">
          <p className="text-black text-xs font-normal leading-[18px]">
            Monthly
          </p>
          <img src="/assets/icons/solar_alt-arrow-down-outline.svg" alt="" />
        </div>
      </div>

      <Line data={LineData} options={LineOptions} />
    </div>
  );
};

export default LineChart;
