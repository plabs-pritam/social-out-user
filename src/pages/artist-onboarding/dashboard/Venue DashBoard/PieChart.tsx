import { useIonViewWillEnter, useIonViewWillLeave } from "@ionic/react";
import { Doughnut } from "react-chartjs-2";
import { CategoryScale } from "chart.js";
import { Chart as ChartJS } from "chart.js/auto";
import { doughnutChartData, doughnutChartOptions } from "../data/PieChartData";

const PieChart = () => {

  useIonViewWillEnter(() => {
    ChartJS.register(CategoryScale);
  }, []);

  useIonViewWillLeave(() => {
    ChartJS.unregister(CategoryScale);
  }, []);

  return (
    <Doughnut data={doughnutChartData} options={doughnutChartOptions} />
  );
};

export default PieChart;
