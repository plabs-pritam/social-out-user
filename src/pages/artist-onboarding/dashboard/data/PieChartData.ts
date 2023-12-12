export const doughnutChartData = {
  labels: ["Occupied Venues", "Unoccupied Venues"],
  datasets: [
    {
      label: "Occupied Venues Vs. Unoccupied Venues",
      backgroundColor: ["#B00DF6", "#F9ECFE"],
      borderColor: "rgba(255,99,132,1)",
      borderWidth: 0,
      data: [50, 50],
    },
  ],
};

// const centerTextPlugin = {
//   afterDraw: (chart: any) => {
//     const { ctx, chartArea } = chart;
//     const { canvas } = ctx;

//     const width = canvas.width;
//     const height = canvas.height;

//     const text = "Center Text"; // Your custom text here

//     ctx.save();
//     ctx.textAlign = "center";
//     ctx.textBaseline = "middle";
//     ctx.fillStyle = "black"; // Text color
//     ctx.font = "18px Arial"; // Text font

//     // Calculate the position to center the text
//     const x = width / 2;
//     const y = height / 2;

//     // Draw the text
//     ctx.fillText(text, x, y);

//     ctx.restore();
//   },
// };

export const doughnutChartOptions: any = {
  plugins: {
    legend: {
      display: false,
    },
  },
};
